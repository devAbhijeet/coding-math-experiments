export const degreesToRads = (degrees) => (degrees / 180) * Math.PI;
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
export const normalize = (value, min, max) => (value - min) / (max - min);
export const lerp = (norm, min, max) => (max - min) * norm + min;
export const map = (norm, sourceMin, sourceMax, destMin, destMax) =>
  lerp(normalize(norm, sourceMin, sourceMax), destMin, destMax);

export const generateRadomInRange = (min, max) =>
  Math.round(min + Math.random() * (max - min));

export const radsToDegrees = (radians) => (radians * 180) / Math.PI;

/*Let's say we have grid size of 40 and we get a input value 113
How do we round the value 113 to a nearest value that is a multiple of 40
The nearest value that is multiple of 40 for 113 is 120
To calculate that divide 113/40, now round that value, multiply that rounded value by 40*/
export const roundNearest = (value, gridSize) => {
  return Math.round(value / gridSize) * gridSize;
};

export const roundToPlaces = (value, places) => {
  const mult = Math.pow(10, places);
  return Math.round(value * mult) / mult;
};

export const distance = (c1, c2) => {
  const dx = c1.x - c2.x;
  const dy = c1.y - c2.y;
  return Math.sqrt(dx * dx + dy * dy);
};
export const distanceXY = (x0, y0, x1, y1) => {
  const dx = x1 - x0,
    dy = y1 - y0;
  return Math.sqrt(dx * dx + dy * dy);
};
export const distanceTo = (x1, x2, y1, y2) => {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
};
export const inRange = (value, min, max) => value >= min && value <= max;
export const rangeIntersect = (rect1Min, rect1Max, rect2Min, rect2Max) => {
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

export const randomDist = (min, max, iterations) => {
  let total = 0;
  for (let i = 0; i < iterations; i++) {
    total += generateRadomInRange(min, max);
  }
  return total / iterations;
};

export const quadraticBezier = (p0, p1, p2, t, pFinal) => {
  pFinal = pFinal || {};
  pFinal.x = Math.pow(1 - t, 2) * p0.x + (1 - t) * 2 * t * p1.x + t * t * p2.x;
  pFinal.y = Math.pow(1 - t, 2) * p0.y + (1 - t) * 2 * t * p1.y + t * t * p2.y;
  return pFinal;
};

export const cubicBezier = (p0, p1, p2, p3, t, pFinal) => {
  pFinal = pFinal || {};
  pFinal.x =
    Math.pow(1 - t, 3) * p0.x +
    Math.pow(1 - t, 2) * 3 * t * p1.x +
    (1 - t) * 3 * t * t * p2.x +
    t * t * t * p3.x;
  pFinal.y =
    Math.pow(1 - t, 3) * p0.y +
    Math.pow(1 - t, 2) * 3 * t * p1.y +
    (1 - t) * 3 * t * t * p2.y +
    t * t * t * p3.y;
  return pFinal;
};
