import vector from "./vector";

let particle = {
  position: null,
  velocity: null,
  create(x, y, magnitude, angle) {
    let obj = Object.create(this);
    obj.position = vector.create(x, y);
    obj.velocity = vector.create(0, 0);
    obj.velocity.setLength(magnitude);
    obj.velocity.setAngle(angle);
    return obj;
  },
  update() {
    this.position.addTo(this.velocity);
  }
};

export default particle;
