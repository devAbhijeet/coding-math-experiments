import vector from "./vector";

let particle = {
  position: null,
  velocity: null,
  gravity: null,
  mass: 1,
  create(x, y, magnitude, angle, accX, accY) {
    let obj = Object.create(this);
    obj.position = vector.create(x, y);
    obj.velocity = vector.create(0, 0);
    obj.gravity = vector.create(accX, accY);
    obj.velocity.setLength(magnitude);
    obj.velocity.setAngle(angle);
    return obj;
  },
  update(sun) {
    this.gravitate(sun);
    this.move();
  },
  move() {
    this.position.addTo(this.velocity);
  },
  gravitate(sun) {
    let dist = this.distanceTo(sun);

    this.gravity = vector.create(0, 0);
    this.gravity.setLength(sun.mass / (dist * dist));
    this.gravity.setAngle(this.angleTo(sun));
    this.velocity.addTo(this.gravity);
  },
  angleTo(sun) {
    let dx = sun.position.getX() - this.position.getX(),
      dy = sun.position.getY() - this.position.getY();
    return Math.atan2(dy, dx);
  },
  distanceTo(sun) {
    let dx = sun.position.getX() - this.position.getX(),
      dy = sun.position.getY() - this.position.getY();
    return Math.sqrt(dx * dx + dy * dy);
  }
};

export default particle;
