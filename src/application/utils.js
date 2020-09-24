export const normalize = (value, min, max) => (value - min) / (max - min);
export const lerp = (norm, min, max) => (max - min) * norm + min;
export const map = (norm, sourceMin, sourceMax, destMin, destMax) =>
  lerp(normalize(norm, sourceMin, sourceMax), destMin, destMax);
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
export const generateRadomInRange = (min, max) =>
  Math.round(min + Math.random() * (max - min));
const distance = (c1, c2) => {
  const dx = c1.x - c2.x;
  const dy = c1.y - c2.y;
  return Math.sqrt(dx * dx + dy * dy);
};
export const isCircleCircleCollide = (c1, c2) => {
  return distance(c1, c2) <= c1.radius + c2.radius;
};
