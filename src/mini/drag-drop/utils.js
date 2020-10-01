const distance = (c1, c2) => {
  const dx = c1.x - c2.x;
  const dy = c1.y - c2.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const distanceTo = (x1, x2, y1, y2) => {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
};

const inRange = (value, min, max) => value >= min && value <= max;

const rangeIntersect = (rect1Min, rect1Max, rect2Min, rect2Max) => {
  return rect1Max >= rect2Min && rect1Min <= rect2Max;
};

export const isCircleCircleCollide = (c1, c2) => {
  return distance(c1, c2) <= c1.radius + c2.radius;
};

export const isCirclePointCollide = (x, y, c1) => {
  return distanceTo(x, c1.x, y, c1.y) <= c1.radius;
};

export const isRectPointCollide = (x, y, rect) => {
  return (
    inRange(x, rect.x, rect.x + rect.width) &&
    inRange(y, rect.y, rect.y + rect.height)
  );
};

export const isRectRectCollide = (rect1, rect2) => {
  return (
    rangeIntersect(
      rect1.x,
      rect1.x + rect1.width,
      rect2.x,
      rect2.x + rect2.width
    ) &&
    rangeIntersect(
      rect1.y,
      rect1.y + rect1.height,
      rect2.y,
      rect2.y + rect2.height
    )
  );
};
