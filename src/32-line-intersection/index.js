/**
 * Line = An infinite Line headed in both direction.
 * Line segment = Line passing through 2 points.
 * Ray = Line headed in a particular direction.
 *
 * A line is represented by an quation y = mx + b
 * where m is the slope and b is the y intercept
 * y is the poin at which line crosses the y axis
 * m slope is the ratio of rate of change of y to rate of change of x coordinate
 * m = y2-y1/x2-x1 => this gives us value of m
 * substitiue this in the above formula with y and x for a set of point we get b
 *
 * Another formula is ax+by = c
 * A = y2-y1
 * B = x1-x2
 * Substite this values in above formula
 *
 * To find the the point where the 2 lines intersect
 * Assume we have p0, p1 and p2, p3
 * 1) a1x+b1y = c1 (p0, p1)
 * 2) a2x+b2y = c2 (p1, p2)
 *
 * Multiply 1 with b2 and 2 with b1
 * After multiplying subtract 1 and 2 we get
 * x = b2c1 - b1c2/a1b2 - a2b1
 *
 * Multiply 1 with a2 and 2 with a1
 * After multiplying subtract 1 and 2 we get
 * y = a1c2 - a2c1/a1b2 - a2b1
 *
 */

import "./styles.css";

const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const p0 = {
  x: 100,
  y: 100
};
const p1 = {
  x: 500,
  y: 500
};
const p2 = {
  x: 600,
  y: 50
};
const p3 = {
  x: 80,
  y: 600
};

const lineIntersect = (p0, p1, p2, p3) => {
  const A1 = p1.y - p0.y;
  const B1 = p0.x - p1.x;
  const C1 = A1 * p0.x + B1 * p0.y;

  const A2 = p3.y - p2.y;
  const B2 = p2.x - p3.x;
  const C2 = A2 * p2.x + B2 * p2.y;

  const denominator = A1 * B2 - A2 * B1;

  return {
    x: (B2 * C1 - B1 * C2) / denominator,
    y: (A1 * C2 - A2 * C1) / denominator
  };
};

context.strokeStyle = "#fff";

context.beginPath();
context.moveTo(p0.x, p0.y);
context.lineTo(p1.x, p1.y);
context.moveTo(p2.x, p2.y);
context.lineTo(p3.x, p3.y);
context.stroke();

const intersect = lineIntersect(p0, p1, p2, p3);

context.beginPath();
context.arc(intersect.x, intersect.y, 20, 0, Math.PI * 2, false);
context.stroke();
