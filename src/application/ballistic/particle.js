import vector from "./vector";

let particle = {
  position: null,
  velocity: null,
  gravity: null,
  radius: 1,
  create(x, y, magnitude, angle, gravity) {
    let obj = Object.create(this);
    obj.position = vector.create(x, y);
    obj.velocity = vector.create(0, 0);
    obj.gravity = vector.create(0, gravity);
    obj.velocity.setLength(magnitude);
    obj.velocity.setAngle(angle);
    return obj;
  },
  update() {
    this.gravitate();
    this.move();
  },
  move() {
    this.position.addTo(this.velocity);
  },
  gravitate() {
    this.velocity.addTo(this.gravity);
  }
};

export default particle;
