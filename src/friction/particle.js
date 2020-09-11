import vector from "./vector";

let particle = {
  position: null,
  velocity: null,
  fricton: null,
  create(x, y, magnitude, angle, frictonMag, frictonAngle) {
    let obj = Object.create(this);
    obj.position = vector.create(x, y);
    obj.velocity = vector.create(0, 0);
    obj.fricton = vector.create(0, 0);
    obj.velocity.setLength(magnitude);
    obj.velocity.setAngle(angle);
    obj.fricton.setLength(frictonMag);
    obj.fricton.setAngle(frictonAngle);
    return obj;
  },
  update() {
    this.frictate();
    this.move();
  },
  frictate() {
    this.fricton.setAngle(this.velocity.getAngle());
    this.velocity.subtractFrom(this.fricton);
  },
  move() {
    this.position.addTo(this.velocity);
  }
};

export default particle;
