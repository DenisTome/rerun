use egui::{lerp, NumExt as _, Rect};
use glam::Affine3A;
use macaw::{vec3, IsoTransform, Mat4, Quat, Vec3};

pub const DEFAULT_FOV_Y: f32 = 55.0_f32 * std::f32::consts::TAU / 360.0;

/// We use X=right, Y=up, Z=back.
#[derive(Clone, Copy, Debug, serde::Deserialize, serde::Serialize)]
pub struct Camera {
    pub world_from_view: IsoTransform,
    pub fov_y: f32,
}

impl Camera {
    pub fn from_camera_data(cam: &re_log_types::Camera) -> Camera {
        let fov_y = if let (Some(intrinsis), Some([_w, h])) = (cam.intrinsics, cam.resolution) {
            2.0 * (0.5 * h / intrinsis[1][1]).atan()
        } else {
            DEFAULT_FOV_Y
        };

        Self {
            world_from_view: crate::misc::world_from_view_from_cam(cam),
            fov_y,
        }
    }

    #[allow(clippy::unused_self)]
    pub fn near(&self) -> f32 {
        0.01 // TODO(emilk)
    }

    /// Screen coordinates are in points.
    pub fn screen_from_world(&self, rect: &Rect) -> Mat4 {
        let aspect_ratio = rect.width() / rect.height();
        Mat4::from_translation(vec3(rect.center().x, rect.center().y, 0.0))
            * Mat4::from_scale(0.5 * vec3(rect.width(), -rect.height(), 1.0))
            * Mat4::perspective_infinite_rh(self.fov_y, aspect_ratio, self.near())
            * self.world_from_view.inverse()
    }

    pub fn pos(&self) -> glam::Vec3 {
        self.world_from_view.translation()
    }

    pub fn forward(&self) -> glam::Vec3 {
        self.world_from_view.rotation() * -Vec3::Z
    }

    pub fn lerp(&self, other: &Self, t: f32) -> Self {
        let translation = self
            .world_from_view
            .translation()
            .lerp(other.world_from_view.translation(), t);
        let rotation = self
            .world_from_view
            .rotation()
            .slerp(other.world_from_view.rotation(), t);
        let fov_y = egui::lerp(self.fov_y..=other.fov_y, t);
        Camera {
            world_from_view: IsoTransform::from_rotation_translation(rotation, translation),
            fov_y,
        }
    }
}

// ----------------------------------------------------------------------------

#[derive(Clone, Copy, Debug, serde::Deserialize, serde::Serialize)]
pub struct OrbitCamera {
    pub center: Vec3,
    pub radius: f32,
    pub world_from_view_rot: Quat,
    pub fov_y: f32,
    /// Zero = no up (3dof rotation)
    pub up: Vec3,

    /// For controlling the camera with WSAD in a smooth way.
    pub velocity: Vec3,
}

impl OrbitCamera {
    const MAX_PITCH: f32 = 0.999 * 0.25 * std::f32::consts::TAU;

    pub fn position(&self) -> Vec3 {
        self.center + self.world_from_view_rot * vec3(0.0, 0.0, self.radius)
    }

    pub fn to_camera(self) -> Camera {
        Camera {
            world_from_view: IsoTransform::from_rotation_translation(
                self.world_from_view_rot,
                self.position(),
            ),
            fov_y: self.fov_y,
        }
    }

    /// Create an [`OrbitCamera`] from a [`Camera`].
    pub fn copy_from_camera(&mut self, camera: &Camera) {
        // The hard part is finding a good center. Let's try to keep the same, and see how that goes:
        let distance = camera.forward().dot(self.center - camera.pos());
        self.radius = distance.at_least(self.radius / 5.0);
        self.center = camera.pos() + self.radius * camera.forward();
        self.world_from_view_rot = camera.world_from_view.rotation();
        self.fov_y = camera.fov_y;
        self.velocity = Vec3::ZERO;
    }

    pub fn lerp(&self, other: &Self, t: f32) -> Self {
        Self {
            center: self.center.lerp(other.center, t),
            radius: lerp(self.radius..=other.radius, t),
            world_from_view_rot: self.world_from_view_rot.slerp(other.world_from_view_rot, t),
            fov_y: egui::lerp(self.fov_y..=other.fov_y, t),
            up: self.up.lerp(other.up, t).normalize_or_zero(),
            velocity: self.velocity.lerp(other.velocity, t),
        }
    }

    /// Direction we are looking at
    fn fwd(&self) -> Vec3 {
        self.world_from_view_rot * -Vec3::Z
    }

    /// Only valid if we have an up vector.
    ///
    /// `[-tau/4, +tau/4]`
    fn pitch(&self) -> Option<f32> {
        if self.up == Vec3::ZERO {
            None
        } else {
            Some(self.fwd().dot(self.up).clamp(-1.0, 1.0).asin())
        }
    }

    fn set_fwd(&mut self, fwd: Vec3) {
        if let Some(pitch) = self.pitch() {
            let pitch = pitch.clamp(-Self::MAX_PITCH, Self::MAX_PITCH);

            let fwd = project_onto(fwd, self.up).normalize(); // Remove pitch
            let right = fwd.cross(self.up).normalize();
            let fwd = Quat::from_axis_angle(right, pitch) * fwd; // Tilt up/down
            let fwd = fwd.normalize(); // Prevent drift

            let world_from_view_rot =
                Quat::from_affine3(&Affine3A::look_at_rh(Vec3::ZERO, fwd, self.up).inverse());

            if world_from_view_rot.is_finite() {
                self.world_from_view_rot = world_from_view_rot;
            }
        } else {
            self.world_from_view_rot = Quat::from_rotation_arc(-Vec3::Z, fwd);
        }
    }

    #[allow(unused)]
    pub fn set_up(&mut self, up: Vec3) {
        self.up = up.normalize_or_zero();

        if self.up != Vec3::ZERO {
            self.set_fwd(self.fwd()); // this will clamp the rotation
        }
    }

    /// Returns `true` if any change
    pub fn interact(&mut self, response: &egui::Response) -> bool {
        let mut did_interact = false;

        if response.dragged_by(egui::PointerButton::Primary) {
            self.rotate(response.drag_delta());
            did_interact = true;
        } else if response.dragged_by(egui::PointerButton::Secondary) {
            self.translate(response.drag_delta());
            did_interact = true;
        } else if response.dragged_by(egui::PointerButton::Middle) {
            if let Some(pointer_pos) = response.ctx.pointer_latest_pos() {
                self.roll(&response.rect, pointer_pos, response.drag_delta());
                did_interact = true;
            }
        }

        if response.hovered() {
            self.keyboard_navigation(&response.ctx);
            let input = response.ctx.input();

            let factor = input.zoom_delta() * (input.scroll_delta.y / 200.0).exp();
            if factor != 1.0 {
                self.radius /= factor;
                did_interact = true;
            }
        }

        did_interact
    }

    /// Listen to WSAD and QE to move camera
    fn keyboard_navigation(&mut self, egui_ctx: &egui::Context) {
        let input = egui_ctx.input();
        let dt = input.stable_dt.at_most(0.1);

        // X=right, Y=up, Z=back
        let mut local_movement = Vec3::ZERO;
        local_movement.z -= input.key_down(egui::Key::W) as i32 as f32;
        local_movement.z += input.key_down(egui::Key::S) as i32 as f32;
        local_movement.x -= input.key_down(egui::Key::A) as i32 as f32;
        local_movement.x += input.key_down(egui::Key::D) as i32 as f32;
        local_movement.y -= input.key_down(egui::Key::Q) as i32 as f32;
        local_movement.y += input.key_down(egui::Key::E) as i32 as f32;
        local_movement = local_movement.normalize_or_zero();

        let speed = self.radius
            * (if input.modifiers.shift { 10.0 } else { 1.0 })
            * (if input.modifiers.ctrl { 0.1 } else { 1.0 });
        let world_movement = self.world_from_view_rot * (speed * local_movement);

        self.velocity = egui::lerp(
            self.velocity..=world_movement,
            egui::emath::exponential_smooth_factor(0.90, 0.2, dt),
        );
        self.center += self.velocity * dt;

        drop(input); // avoid deadlock on request_repaint
        if local_movement != Vec3::ZERO || self.velocity.length() > 0.01 * speed {
            egui_ctx.request_repaint();
        }
    }

    /// Rotate based on a certain number of pixel delta.
    pub fn rotate(&mut self, delta: egui::Vec2) {
        let sensitivity = 0.004; // radians-per-point  TODO(emilk): take fov_y and canvas size into account
        let delta = sensitivity * delta;

        if self.up == Vec3::ZERO {
            // 3-dof rotation
            let rot_delta = Quat::from_rotation_y(-delta.x) * Quat::from_rotation_x(-delta.y);
            self.world_from_view_rot *= rot_delta;
        } else {
            // 2-dof rotation
            let fwd = Quat::from_axis_angle(self.up, -delta.x) * self.fwd();
            let fwd = fwd.normalize(); // Prevent drift

            let pitch = self.pitch().unwrap() - delta.y;
            let pitch = pitch.clamp(-Self::MAX_PITCH, Self::MAX_PITCH);

            let fwd = project_onto(fwd, self.up).normalize(); // Remove pitch
            let right = fwd.cross(self.up).normalize();
            let fwd = Quat::from_axis_angle(right, pitch) * fwd; // Tilt up/down
            let fwd = fwd.normalize(); // Prevent drift

            self.world_from_view_rot =
                Quat::from_affine3(&Affine3A::look_at_rh(Vec3::ZERO, fwd, self.up).inverse());
        }
    }

    /// Rotate around forward axis
    fn roll(&mut self, rect: &egui::Rect, pointer_pos: egui::Pos2, delta: egui::Vec2) {
        // steering-wheel model
        let rel = pointer_pos - rect.center();
        let delta_angle = delta.rot90().dot(rel) / rel.length_sq();
        let rot_delta = Quat::from_rotation_z(delta_angle);
        self.world_from_view_rot *= rot_delta;

        self.up = Vec3::ZERO; // forget about this until user resets camera
    }

    /// Translate based on a certain number of pixel delta.
    fn translate(&mut self, delta: egui::Vec2) {
        let delta = delta * self.radius * 0.001; // TODO(emilk): take fov and screen size into account?

        let up = self.world_from_view_rot * Vec3::Y;
        let right = self.world_from_view_rot * -Vec3::X; // TODO(emilk): why do we need a negation here? O.o

        let translate = delta.x * right + delta.y * up;

        self.center += translate;
    }
}

/// e.g. up is `[0,0,1]`, we return things like `[x,y,0]`
fn project_onto(v: Vec3, up: Vec3) -> Vec3 {
    v - up * v.dot(up)
}
