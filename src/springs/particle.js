import vector from "./vector";

const particle = {
  position: null,
  velocity: null,
  gravity: 0.5,
  radius: null,
  friction: 0.9,
  create: function (x, y, speed, direction, gravity) {
    const object = Object.create(this);
    object.position = vector.create(x, y);
    object.velocity = vector.create(0, 0);
    object.gravity = vector.create(0, gravity || 0);
    object.velocity.setLength(speed);
    object.velocity.setAngle(direction);
    return object;
  },
  update: function () {
    this.move();
  },
  move: function () {
    this.velocity.multiplyBy(this.friction);
    this.velocity.addTo(this.gravity);
    this.position.addTo(this.velocity);
  }
};

export default particle;
