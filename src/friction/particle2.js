import vector from "./vector";

let particle = {
  position: null,
  velocity: null,
  fricton: 1,
  create(x, y, magnitude, angle, frictonMag, frictonAngle) {
    let obj = Object.create(this);
    obj.position = vector.create(x, y);
    obj.velocity = vector.create(0, 0);
    obj.velocity.setLength(magnitude);
    obj.velocity.setAngle(angle);
    return obj;
  },
  update() {
    this.frictate();
    this.move();
  },
  frictate() {
    this.velocity.multiplyBy(this.fricton);
  },
  move() {
    this.position.addTo(this.velocity);
  }
};

export default particle;
