export const normalize = (value, min, max) => (value - min) / (max - min);
export const lerp = (norm, min, max) => (max - min) * norm + min;
export const map = (norm, sourceMin, sourceMax, destMin, destMax) =>
  lerp(normalize(norm, sourceMin, sourceMax), destMin, destMax);
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
export const generateRadomInRange = (min, max) =>
  min + Math.random() * (max - min);
