import vector from "./vector";

let particle = {
  position: null,
  velocity: null,
  create(x, y, magnitude, angle, accX, accY) {
    let obj = Object.create(this);
    obj.position = vector.create(x, y);
    obj.velocity = vector.create(0, 0);
    obj.acceleration = vector.create(accX, accY);
    obj.gravity = vector.create(0, accY);
    obj.velocity.setLength(magnitude);
    obj.velocity.setAngle(angle);

    return obj;
  },
  update() {
    // this.accelerate();
    this.gravitate();
    this.move();
  },
  move() {
    this.position.addTo(this.velocity);
  },
  gravitate() {
    this.velocity.addTo(this.gravity);
  },
  accelerate() {
    this.velocity.addTo(this.acceleration);
  }
};

export default particle;
