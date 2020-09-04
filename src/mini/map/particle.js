let particle = {
  x: null,
  y: null,
  color: null,
  create(x, y, color) {
    let obj = Object.create(this);
    obj.x = x;
    obj.y = y;
    obj.color = color;
    return obj;
  },
  update(color) {
    this.color = color;
  }
};

export default particle;
