export const linearTween = (t, b, c, d) => (c * t) / d + b;

export const easeInQuad = (t, b, c, d) => c * (t /= d) * t + b;

export const easeOutQuad = (t, b, c, d) => -c * (t /= d) * (t - 2) + b;

export const easeInOutQuad = (t, b, c, d) => {
  const cond = (t /= d / 2) < 1;
  if (cond) {
    return (c / 2) * t * t + b;
  }
  return (-c / 2) * (--t * (t - 2) - 1) + b;
};
