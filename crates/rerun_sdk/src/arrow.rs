use std::collections::BTreeMap;

use arrow2::{
    array::{Array, ListArray, StructArray},
    buffer::Buffer,
    chunk::Chunk,
    datatypes::{DataType, Field, Schema},
};

use re_log_types::{
    arrow::{build_time_cols, ENTITY_PATH_KEY},
    ArrowMsg, LogMsg, MsgId, ObjPath, TimePoint,
};

/// Create a [`StructArray`] from an array of (name, Array) tuples
pub fn components_as_struct_array(components: &[(&str, Box<dyn Array>)]) -> StructArray {
    let data_types = DataType::Struct(
        components
            .iter()
            .map(|(name, data)| Field::new(*name, data.data_type().clone(), true))
            .collect(),
    );

    let data_arrays = components.iter().map(|(_, data)| data.clone()).collect();

    StructArray::new(data_types, data_arrays, None)
}

/// Build the [`LogMsg`] from the [`StructArray`]
pub fn build_arrow_log_msg(
    obj_path: &ObjPath,
    array: &StructArray,
    time_point: &TimePoint,
) -> Result<LogMsg, arrow2::error::Error> {
    re_log::info!(
        "Logged an arrow msg to path '{}'  with components {:?}",
        obj_path,
        array
            .fields()
            .iter()
            .map(|field| field.name.as_str())
            .collect::<Vec<_>>()
    );

    let data_type = ListArray::<i32>::default_datatype(array.data_type().clone());
    let offsets = Buffer::from(vec![0, array.values()[0].len() as i32]);
    let values = array.clone().boxed();
    let validity = None;
    let data_col = ListArray::<i32>::try_new(data_type, offsets, values, validity)?;

    // Build columns for timeline data
    let (mut fields, mut cols): (Vec<Field>, Vec<Box<dyn Array>>) =
        build_time_cols(time_point).unzip();

    fields.push(arrow2::datatypes::Field::new(
        "components",
        data_col.data_type().clone(),
        true,
    ));
    cols.push(data_col.boxed());

    let metadata = BTreeMap::from([(ENTITY_PATH_KEY.into(), obj_path.to_string())]);
    let schema = Schema { fields, metadata };
    let chunk = Chunk::new(cols);

    Ok(LogMsg::ArrowMsg(ArrowMsg {
        msg_id: MsgId::random(),
        schema,
        chunk,
    }))
}
