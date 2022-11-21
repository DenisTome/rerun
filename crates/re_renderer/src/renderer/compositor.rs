use crate::{
    context::SharedRendererData,
    include_file,
    resource_pools::{
        bind_group_layout_pool::*, bind_group_pool::*, pipeline_layout_pool::*,
        render_pipeline_pool::*, shader_module_pool::*, texture_pool::GpuTextureHandleStrong,
        WgpuResourcePools,
    },
};

use super::*;

use smallvec::smallvec;

pub struct Compositor {
    render_pipeline: GpuRenderPipelineHandle,
    bind_group_layout: GpuBindGroupLayoutHandle,
}

#[derive(Clone)]
pub struct CompositorDrawable {
    /// [`GpuBindGroup`] pointing at the current image source and
    /// a uniform buffer for describing a tonemapper/compositor configuration.
    bind_group: GpuBindGroupHandleStrong,
}

impl Drawable for CompositorDrawable {
    type Renderer = Compositor;
}

impl CompositorDrawable {
    pub fn new(ctx: &mut RenderContext, target: &GpuTextureHandleStrong) -> Self {
        let pools = &mut ctx.resource_pools;
        let compositor = ctx.renderers.get_or_create::<_, Compositor>(
            &ctx.shared_renderer_data,
            pools,
            &ctx.device,
            &mut ctx.resolver,
        );
        CompositorDrawable {
            bind_group: pools.bind_groups.alloc(
                &ctx.device,
                &BindGroupDesc {
                    label: "compositor".into(),
                    entries: smallvec![BindGroupEntry::DefaultTextureView(**target)],
                    layout: compositor.bind_group_layout,
                },
                &pools.bind_group_layouts,
                &pools.textures,
                &pools.buffers,
                &pools.samplers,
            ),
        }
    }
}

impl Renderer for Compositor {
    type DrawData = CompositorDrawable;

    fn create_renderer<Fs: FileSystem>(
        shared_data: &SharedRendererData,
        pools: &mut WgpuResourcePools,
        device: &wgpu::Device,
        resolver: &mut FileResolver<Fs>,
    ) -> Self {
        let bind_group_layout = pools.bind_group_layouts.get_or_create(
            device,
            &BindGroupLayoutDesc {
                label: "compositor".into(),
                entries: vec![wgpu::BindGroupLayoutEntry {
                    binding: 0,
                    visibility: wgpu::ShaderStages::FRAGMENT,
                    ty: wgpu::BindingType::Texture {
                        sample_type: wgpu::TextureSampleType::Float { filterable: false },
                        view_dimension: wgpu::TextureViewDimension::D2,
                        multisampled: false,
                    },
                    count: None,
                }],
            },
        );

        let render_pipeline = pools.render_pipelines.get_or_create(
            device,
            &RenderPipelineDesc {
                label: "compositor".into(),
                pipeline_layout: pools.pipeline_layouts.get_or_create(
                    device,
                    &PipelineLayoutDesc {
                        label: "compositor".into(),
                        entries: vec![shared_data.global_bindings.layout, bind_group_layout],
                    },
                    &pools.bind_group_layouts,
                ),
                vertex_entrypoint: "main".into(),
                vertex_handle: pools.shader_modules.get_or_create(
                    device,
                    resolver,
                    &ShaderModuleDesc {
                        label: "screen_triangle (vertex)".into(),
                        source: include_file!("../../shader/screen_triangle.wgsl"),
                    },
                ),
                fragment_entrypoint: "main".into(),
                fragment_handle: pools.shader_modules.get_or_create(
                    device,
                    resolver,
                    &ShaderModuleDesc {
                        label: "tonemap (fragment)".into(),
                        source: include_file!("../../shader/composite.wgsl"),
                    },
                ),
                vertex_buffers: smallvec![],
                render_targets: smallvec![Some(shared_data.config.output_format_color.into())],
                primitive: wgpu::PrimitiveState::default(),
                depth_stencil: None,
                multisample: wgpu::MultisampleState::default(),
            },
            &pools.pipeline_layouts,
            &pools.shader_modules,
        );

        Compositor {
            render_pipeline,
            bind_group_layout,
        }
    }

    fn draw<'a>(
        &self,
        pools: &'a WgpuResourcePools,
        pass: &mut wgpu::RenderPass<'a>,
        draw_data: &CompositorDrawable,
    ) -> anyhow::Result<()> {
        let pipeline = pools.render_pipelines.get_resource(self.render_pipeline)?;
        let bind_group = pools.bind_groups.get_resource(&draw_data.bind_group)?;

        pass.set_pipeline(&pipeline.pipeline);
        pass.set_bind_group(1, &bind_group.bind_group, &[]);
        pass.draw(0..3, 0..1);

        Ok(())
    }
}