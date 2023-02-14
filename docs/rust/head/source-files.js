var sourcesIndex = JSON.parse('{\
"api_demo":["",[],["main.rs"]],\
"minimal":["",[],["main.rs"]],\
"objectron":["",[],["main.rs","objectron.rs"]],\
"raw_mesh":["",[],["main.rs"]],\
"re_analytics":["",[],["cli.rs","config_native.rs","events.rs","lib.rs","pipeline_native.rs","sink_native.rs"]],\
"re_arrow_store":["",[],["arrow_util.rs","lib.rs","polars_util.rs","store.rs","store_gc.rs","store_polars.rs","store_read.rs","store_stats.rs","store_write.rs","test_util.rs"]],\
"re_data_store":["",[],["entity_properties.rs","entity_tree.rs","instance_path.rs","lib.rs","log_db.rs"]],\
"re_error":["",[],["lib.rs"]],\
"re_format":["",[],["arrow.rs","lib.rs"]],\
"re_int_histogram":["",[],["lib.rs","tree.rs"]],\
"re_log":["",[],["lib.rs"]],\
"re_log_types":["",[["component_types",[],["arrow.rs","bbox.rs","class_id.rs","color.rs","context.rs","coordinates.rs","instance_key.rs","keypoint_id.rs","label.rs","linestrip.rs","mat.rs","mesh3d.rs","mod.rs","msg_id.rs","point.rs","quaternion.rs","radius.rs","rect.rs","scalar.rs","size.rs","tensor.rs","text_entry.rs","transform.rs","vec.rs"]],["path",[],["component_name.rs","component_path.rs","entity_path.rs","entity_path_impl.rs","mod.rs","parse_path.rs"]],["time_point",[],["arrow.rs","mod.rs","time_int.rs","timeline.rs"]]],["arrow_msg.rs","data.rs","datagen.rs","encoding.rs","hash.rs","index.rs","lib.rs","msg_bundle.rs","time.rs","time_range.rs","time_real.rs"]],\
"re_memory":["",[],["accounting_allocator.rs","allocation_tracker.rs","lib.rs","memory_history.rs","memory_limit.rs","memory_use.rs","util.rs"]],\
"re_query":["",[],["dataframe_util.rs","entity_view.rs","lib.rs","query.rs","range.rs","util.rs","visit.rs"]],\
"re_renderer":["",[["importer",[],["gltf.rs","mod.rs","obj.rs"]],["renderer",[],["compositor.rs","generic_skybox.rs","lines.rs","mesh_renderer.rs","mod.rs","point_cloud.rs","rectangles.rs","test_triangle.rs"]],["resource_managers",[],["mesh_manager.rs","mod.rs","resource_manager.rs","texture_manager.rs"]],["wgpu_resources",[],["bind_group_layout_pool.rs","bind_group_pool.rs","buffer_pool.rs","dynamic_resource_pool.rs","mod.rs","pipeline_layout_pool.rs","render_pipeline_pool.rs","resource.rs","sampler_pool.rs","shader_module_pool.rs","static_resource_pool.rs","texture_pool.rs"]]],["config.rs","context.rs","debug_label.rs","depth_offset.rs","error_tracker.rs","file_resolver.rs","file_server.rs","file_system.rs","global_bindings.rs","lib.rs","line_strip_builder.rs","mesh.rs","point_cloud_builder.rs","size.rs","view_builder.rs","wgpu_buffer_types.rs"]],\
"re_sdk":["",[],["clap.rs","demo_util.rs","global.rs","lib.rs","msg_sender.rs","session.rs"]],\
"re_sdk_comms":["",[],["buffered_client.rs","lib.rs","server.rs","tcp_client.rs"]],\
"re_smart_channel":["",[],["lib.rs"]],\
"re_string_interner":["",[],["lib.rs"]],\
"re_tensor_ops":["",[],["dimension_mapping.rs","lib.rs"]],\
"re_tuid":["",[],["lib.rs"]],\
"re_ui":["",[],["command.rs","command_palette.rs","design_tokens.rs","icons.rs","lib.rs","static_image_cache.rs","toggle_switch.rs"]],\
"re_viewer":["",[["misc",[["caches",[],["mesh_cache.rs","mod.rs","tensor_image_cache.rs"]]],["app_options.rs","clipboard.rs","color_map.rs","item.rs","mesh_loader.rs","mod.rs","profiler.rs","selection_state.rs","space_info.rs","time_control.rs","time_control_ui.rs","transform_cache.rs","viewer_context.rs"]],["ui",[["data_ui",[],["annotation_context.rs","component.rs","component_path.rs","component_ui_registry.rs","data.rs","entity_path.rs","image.rs","instance_path.rs","log_msg.rs","mod.rs","msg_id.rs"]],["time_panel",[],["ball_scatterer.rs","mod.rs","paint_ticks.rs","time_axis.rs","time_ranges_ui.rs","time_selection_ui.rs"]],["view_bar_chart",[],["mod.rs","scene.rs","ui.rs"]],["view_spatial",[["scene",[["scene_part",[],["arrows3d.rs","boxes2d.rs","boxes3d.rs","cameras.rs","images.rs","lines2d.rs","lines3d.rs","meshes.rs","mod.rs","points2d.rs","points3d.rs"]]],["mod.rs","picking.rs","primitives.rs"]]],["eye.rs","mod.rs","space_camera_3d.rs","ui.rs","ui_2d.rs","ui_3d.rs","ui_renderer_bridge.rs"]],["view_tensor",[],["mod.rs","scene.rs","tensor_dimension_mapper.rs","ui.rs"]],["view_text",[],["mod.rs","scene.rs","ui.rs"]],["view_time_series",[],["mod.rs","scene.rs","ui.rs"]]],["annotations.rs","auto_layout.rs","blueprint.rs","data_blueprint.rs","event_log_view.rs","memory_panel.rs","mod.rs","scene.rs","selection_history.rs","selection_history_ui.rs","selection_panel.rs","space_view.rs","space_view_entity_picker.rs","space_view_heuristics.rs","view_category.rs","viewport.rs"]]],["app.rs","app_icon.rs","env_vars.rs","lib.rs","math.rs","native.rs","remote_viewer_app.rs"]],\
"re_web_server":["",[],["lib.rs"]],\
"re_ws_comms":["",[],["client.rs","lib.rs","server.rs"]],\
"rerun":["",[],["lib.rs","run.rs"]],\
"rerun_bindings":["",[],["arrow.rs","lib.rs","python_bridge.rs"]],\
"run_wasm":["",[],["main.rs"]]\
}');
createSourceSidebar();
