use std::{num::NonZeroU32, ops::DerefMut, sync::mpsc};

use crate::wgpu_resources::{BufferDesc, GpuBufferHandleStrong, GpuBufferPool, PoolError};

/// A sub-allocated staging buffer that can be written to.
///
/// Behaves a bit like a fixed sized `Vec` in that far it keeps track of how many elements were written to it.
///
/// We do *not* allow reading from this buffer as it is typically write-combined memory.
/// Reading would work, but it can be *very* slow.
/// For details on why, see
/// [Write combining is not your friend, by Fabian Giesen](https://fgiesen.wordpress.com/2013/01/29/write-combining-is-not-your-friend/)
/// Note that the "vec like behavior" further encourages
/// * not leaving holes
/// * keeping writes sequential
pub struct CpuWriteGpuReadBuffer<T: bytemuck::Pod + 'static> {
    /// Write view into the relevant buffer portion.
    ///
    /// UNSAFE: The lifetime is transmuted to be `'static`.
    /// In actuality it is tied to the lifetime of [`chunk_buffer`](#structfield.chunk.chunk_buffer)!
    write_view: wgpu::BufferViewMut<'static>,

    /// How many elements of T were already pushed into this buffer.
    write_counter: usize,

    chunk_buffer: GpuBufferHandleStrong,
    offset_in_chunk_buffer: wgpu::BufferAddress,

    /// Marker for the type whose alignment and size requirements are honored by `write_view`.
    _type: std::marker::PhantomData<T>,
}

impl<T> CpuWriteGpuReadBuffer<T>
where
    T: bytemuck::Pod + 'static,
{
    /// Memory as slice of T.
    ///
    /// Do *not* make this public as we need to guarantee that the memory is *never* read from!
    #[inline(always)]
    fn as_slice(&mut self) -> &mut [T] {
        &mut bytemuck::cast_slice_mut(&mut self.write_view)[self.write_counter..]
    }

    /// Pushes a slice of elements into the buffer.
    ///
    /// Panics if the data no longer fits into the buffer.
    #[inline]
    pub fn extend_from_slice(&mut self, elements: &[T]) {
        self.as_slice().copy_from_slice(elements);
        self.write_counter += elements.len();
    }

    /// Pushes several elements into the buffer.
    ///
    /// Panics if the data no longer fits into the buffer.
    #[inline]
    pub fn extend(&mut self, elements: impl Iterator<Item = T>) {
        let mut num_elements = 0;
        for (target, source) in self.as_slice().iter_mut().zip(elements) {
            *target = source;
            num_elements += 1;
        }
        self.write_counter += num_elements;
    }

    /// Pushes a single element into the buffer and advances the write pointer.
    ///
    /// Panics if the data no longer fits into the buffer.
    #[inline]
    pub fn push(&mut self, element: &T) {
        *self.as_slice().first_mut().unwrap() = *element;
        self.write_counter += 1;
    }

    /// The number of elements pushed into the buffer so far.
    #[inline]
    pub fn num_written(&self) -> usize {
        self.write_counter
    }

    pub fn copy_to_texture(
        self,
        encoder: &mut wgpu::CommandEncoder,
        buffer_pool: &GpuBufferPool,
        destination: wgpu::ImageCopyTexture<'_>,
        bytes_per_row: Option<NonZeroU32>,
        rows_per_image: Option<NonZeroU32>,
        copy_size: wgpu::Extent3d,
    ) -> Result<(), PoolError> {
        let source_buffer = buffer_pool.get_resource(&self.chunk_buffer)?;

        encoder.copy_buffer_to_texture(
            wgpu::ImageCopyBuffer {
                buffer: source_buffer,
                layout: wgpu::ImageDataLayout {
                    offset: self.offset_in_chunk_buffer,
                    bytes_per_row,
                    rows_per_image,
                },
            },
            destination,
            copy_size,
        );

        Ok(())
    }

    /// Consume this data view and copy it to another gpu buffer.
    pub fn copy_to_buffer(
        mut self,
        encoder: &mut wgpu::CommandEncoder,
        buffer_pool: &GpuBufferPool,
        destination: &GpuBufferHandleStrong,
        destination_offset: wgpu::BufferAddress,
    ) -> Result<(), PoolError> {
        let source_buffer = buffer_pool.get_resource(&self.chunk_buffer)?;

        encoder.copy_buffer_to_buffer(
            source_buffer,
            self.offset_in_chunk_buffer,
            buffer_pool.get_resource(destination)?,
            destination_offset,
            self.write_view.deref_mut().len() as u64,
        );

        Ok(())
    }
}

/// Internal chunk of the staging belt.
struct Chunk {
    buffer: GpuBufferHandleStrong,
    size: wgpu::BufferAddress,

    /// At what offset is [`write_view`](#structfield.write_view) unused.
    unused_offset: wgpu::BufferAddress,
}

/// Efficiently performs many buffer writes by sharing and reusing temporary buffers.
///
/// Internally it uses a ring-buffer of staging buffers that are sub-allocated.
///
/// Based on to [`wgpu::util::StagingBelt`](https://github.com/gfx-rs/wgpu/blob/a420e453c3d9c93dfb1a8526bf11c000d895c916/wgpu/src/util/belt.rs)
/// However, there are some important differences:
/// * can create buffers without yet knowing the target copy location
/// * lifetime of returned buffers is independent of the [`StagingWriteBelt`] (allows working with several in parallel!)
/// * use of `re_renderer`'s resource pool
/// * handles alignment
pub struct CpuWriteGpuReadBelt {
    /// Minimum size for new buffers.
    chunk_size: wgpu::BufferSize,

    /// Chunks which are CPU write at the moment.
    active_chunks: Vec<Chunk>,

    /// Chunks which are GPU read at the moment.
    ///
    /// I.e. they have scheduled transfers already; they are unmapped and one or more
    /// command encoder has one or more `copy_buffer_to_buffer` commands with them
    /// as source.
    closed_chunks: Vec<Chunk>,

    /// Chunks that are back from the GPU and ready to be mapped for write and put
    /// into `active_chunks`.
    free_chunks: Vec<Chunk>,

    /// When closed chunks are mapped again, the map callback sends them here.
    ///
    /// Behind a mutex, so that our StagingBelt becomes Sync.
    /// Note that we shouldn't use SyncSender since this can block the Sender if a buffer is full,
    /// which means that in a single threaded situation (Web!) we might deadlock.
    sender: mpsc::Sender<Chunk>,

    /// Free chunks are received here to be put on `self.free_chunks`.
    receiver: mpsc::Receiver<Chunk>,
}

impl CpuWriteGpuReadBelt {
    /// Create a new staging belt.
    ///
    /// The `chunk_size` is the unit of internal buffer allocation; writes will be
    /// sub-allocated within each chunk. Therefore, for optimal use of memory, the
    /// chunk size should be:
    ///
    /// * larger than the largest single [`StagingBelt::write_buffer()`] operation;
    /// * 1-4 times less than the total amount of data uploaded per submission
    ///   (per [`StagingBelt::finish()`]); and
    /// * bigger is better, within these bounds.
    ///
    /// TODO(andreas): Adaptive chunk sizes
    /// TODO(andreas): Shrinking after usage spikes?
    pub fn new(chunk_size: wgpu::BufferSize) -> Self {
        let (sender, receiver) = mpsc::channel();
        CpuWriteGpuReadBelt {
            chunk_size,
            active_chunks: Vec::new(),
            closed_chunks: Vec::new(),
            free_chunks: Vec::new(),
            sender,
            receiver,
        }
    }

    /// Allocates a cpu writable buffer for `num_elements` instances of T.
    ///
    /// Handles alignment requirements automatically which allows faster copy operations.
    pub fn allocate<T: bytemuck::Pod + 'static>(
        &mut self,
        device: &wgpu::Device,
        buffer_pool: &mut GpuBufferPool,
        num_elements: usize,
    ) -> CpuWriteGpuReadBuffer<T> {
        let alignment = (std::mem::align_of::<T>() as wgpu::BufferAddress).min(wgpu::MAP_ALIGNMENT);
        let size = (std::mem::size_of::<T>() * num_elements) as wgpu::BufferAddress;

        // We need to be super careful with alignment since today wgpu
        // has NO guarantees on how pointers to mapped memory are aligned!
        // For all we know, pointers might be 1 aligned, causing even a u32 write to crash the process!
        //
        // See https://github.com/gfx-rs/wgpu/issues/3508
        //
        // To work around this, we require a bigger size to begin with.
        //
        // TODO(andreas): Either fix the wgpu issue or come up with a more conservative strategy,
        //                where we first look for a buffer slice with `size` and then again with required_size if needed.
        let required_size = size + alignment - 1;

        // We explicitly use `deref_mut` on write_view everywhere, since wgpu warns if we accidentally use `deref`.

        // Try to find space in any of the active chunks first.
        let mut chunk = if let Some(index) = self
            .active_chunks
            .iter_mut()
            .position(|chunk| chunk.size - chunk.unused_offset >= required_size)
        {
            self.active_chunks.swap_remove(index)
        } else {
            self.receive_chunks(); // ensure self.free_chunks is up to date

            // Use a free chunk if possible, fall back to creating a new one if necessary.
            if let Some(index) = self
                .free_chunks
                .iter()
                .position(|chunk| chunk.size >= required_size)
            {
                self.free_chunks.swap_remove(index)
            } else {
                // Allocation might be bigger than a chunk.
                let size = self.chunk_size.get().max(required_size);

                let buffer = buffer_pool.alloc(
                    device,
                    &BufferDesc {
                        label: "CpuWriteGpuReadBelt buffer".into(),
                        size,
                        usage: wgpu::BufferUsages::MAP_WRITE | wgpu::BufferUsages::COPY_SRC,
                        mapped_at_creation: true,
                    },
                );

                Chunk {
                    buffer,
                    size,
                    unused_offset: 0,
                }
            }
        };

        let buffer = buffer_pool
            .get_resource(&chunk.buffer)
            .expect("invalid chunk buffer");

        // Allocate mapping from a chunk.
        fn allocate_mapping<'a>(
            chunk: &mut Chunk,
            size: u64,
            buffer: &'a wgpu::Buffer,
        ) -> (u64, wgpu::BufferViewMut<'a>) {
            let start_offset = chunk.unused_offset;
            let end_offset = start_offset + size;

            debug_assert!(end_offset <= chunk.size);
            chunk.unused_offset = end_offset;

            let buffer_slice = buffer.slice(start_offset..end_offset);
            (start_offset, buffer_slice.get_mapped_range_mut())
        }

        // Allocate mapping from a chunk with alignment requirements.
        //
        // Depending on how https://github.com/gfx-rs/wgpu/issues/3508 will be solved, this will become trivial
        // as we will have knowledge of a full buffer mapping alignment beforehand.
        // (we then should probably always align to 32 byte and don't allow types with even higher alignment requirements!)
        fn allocate_chunk_mapping_with_alignment<'a>(
            chunk: &mut Chunk,
            size: u64,
            buffer: &'a wgpu::Buffer,
            alignment: u64,
        ) -> (u64, wgpu::BufferViewMut<'a>) {
            // First optimistically try without explicit padding.
            let (start_offset, mut write_view) = allocate_mapping(chunk, size, buffer);
            let required_padding = write_view.deref_mut().as_ptr() as u64 % alignment; // use deref_mut because wgpu warns otherwise that read access is slow.

            if required_padding == 0 {
                (start_offset, write_view)
            } else {
                // Undo mapping and try again with padding.
                // We made sure earlier that the chunk has enough space for this case!
                drop(write_view);
                chunk.unused_offset = start_offset + required_padding;

                let (start_offset, mut write_view) = allocate_mapping(chunk, size, buffer);
                let required_padding = write_view.deref_mut().as_ptr() as u64 % alignment; // use deref_mut because wgpu warns otherwise that read access is slow.
                debug_assert_eq!(required_padding, 0);

                (start_offset, write_view)
            }
        }

        let (start_offset, write_view) =
            allocate_chunk_mapping_with_alignment(&mut chunk, size, buffer, alignment);

        #[allow(unsafe_code)]
        // SAFETY:
        // write_view has a lifetime dependency on the chunk's buffer.
        // To ensure that the buffer is still around, we put the ref counted buffer handle into the struct with it.
        // However, this also implies that the buffer pool is still alive! The renderer context needs to make sure of this.
        let write_view = unsafe {
            std::mem::transmute::<wgpu::BufferViewMut<'_>, wgpu::BufferViewMut<'static>>(write_view)
        };

        let cpu_buffer_view = CpuWriteGpuReadBuffer {
            chunk_buffer: chunk.buffer.clone(),
            offset_in_chunk_buffer: start_offset,
            write_view,
            write_counter: 0,
            _type: std::marker::PhantomData,
        };

        self.active_chunks.push(chunk);

        cpu_buffer_view
    }

    /// Prepare currently mapped buffers for use in a submission.
    ///
    /// This must be called before the command encoder(s) used in [`StagingBuffer`] copy operations are submitted.
    ///
    /// At this point, all the partially used staging buffers are closed (cannot be used for
    /// further writes) until after [`StagingBelt::recall()`] is called *and* the GPU is done
    /// copying the data from them.
    pub fn before_queue_submit(&mut self, buffer_pool: &GpuBufferPool) {
        // This would be a great usecase for persistent memory mapping, i.e. mapping without the need to unmap
        // https://github.com/gfx-rs/wgpu/issues/1468
        // However, WebGPU does not support this!

        for chunk in self.active_chunks.drain(..) {
            buffer_pool
                .get_resource(&chunk.buffer)
                .expect("invalid buffer handle")
                .unmap();
            self.closed_chunks.push(chunk);
        }
    }

    /// Recall all of the closed buffers back to be reused.
    ///
    /// This must only be called after the command encoder(s) used in [`StagingBuffer`]
    /// copy operations are submitted. Additional calls are harmless.
    /// Not calling this as soon as possible may result in increased buffer memory usage.
    pub fn after_queue_submit(&mut self, buffer_pool: &GpuBufferPool) {
        self.receive_chunks();

        let sender = &self.sender;
        for chunk in self.closed_chunks.drain(..) {
            let sender = sender.clone();
            buffer_pool
                .get_resource(&chunk.buffer)
                .expect("invalid buffer handle")
                .slice(..)
                .map_async(wgpu::MapMode::Write, move |_| {
                    let _ = sender.send(chunk);
                });
        }
    }

    /// Move all chunks that the GPU is done with (and are now mapped again)
    /// from `self.receiver` to `self.free_chunks`.
    fn receive_chunks(&mut self) {
        while let Ok(mut chunk) = self.receiver.try_recv() {
            chunk.unused_offset = 0;
            self.free_chunks.push(chunk);
        }
    }
}

impl std::fmt::Debug for CpuWriteGpuReadBelt {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("StagingBelt")
            .field("chunk_size", &self.chunk_size)
            .field("active_chunks", &self.active_chunks.len())
            .field("closed_chunks", &self.closed_chunks.len())
            .field("free_chunks", &self.free_chunks.len())
            .finish_non_exhaustive()
    }
}
