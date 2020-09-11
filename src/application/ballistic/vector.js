let vector = {
  _x: 1,
  _y: 0,
  create(x, y) {
    let obj = Object.create(this);
    obj.setX(x);
    obj.setY(y);
    return obj;
  },
  setX(x) {
    this._x = x;
  },
  getX() {
    return this._x;
  },
  setY(y) {
    this._y = y;
  },
  getY() {
    return this._y;
  },
  setAngle(angle) {
    let length = this.getLength();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  },
  getAngle() {
    return Math.atan2(this._y, this._x);
  },
  setLength(length) {
    let angle = this.getAngle();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  },
  getLength() {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  },
  add(v2) {
    let x = this._x + v2.getX();
    let y = this._y + v2.getY();
    return vector.create(x, y);
  },
  subtract(v2) {
    let x = this._x - v2.getX();
    let y = this._y - v2.getY();
    return vector.create(x, y);
  },
  multiply(val) {
    let x = this._x * val;
    let y = this._y * val;
    return vector.create(x, y);
  },
  divide(val) {
    let x = this._x / val;
    let y = this._y / val;
    return vector.create(x, y);
  },
  addTo(v2) {
    this._x += v2.getX();
    this._y += v2.getY();
  },
  subtractFrom(v2) {
    this._x -= v2.getX();
    this._y -= v2.getY();
  },
  multiplyBy(val) {
    this._x *= val;
    this._y *= val;
  },
  divideBy(val) {
    this._x /= val;
    this._y /= val;
  }
};

export default vector;
