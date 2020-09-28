/**
 *
 * Consider p0 and p1. p0 is at some coordinate x and y and p1 is at some coordinate x y.
 * Let's say there's some value t = 0 for each increment in the value of t, we interpolated the
 * value of t between p0 and p1. We get a new value, let's consider this value as pA
 *
 * Now consider there's another point p2 from p1. For some value of t we interpolate a new value
 * between p1 and p2. Let's call this value as pB.
 *
 *
 * Now for each value of t we have p0, p1, p2, pA, pB. Now if we interpolate between pA and pB,
 * we get something which is similate to shape of curve. Lets call this point pFinal.
 *
 * What if we want to make the curve pass through the control point.
 * The trick is to make another control point just above the current control point.
 *
 * The x and y coardinate for new control point are calculated using the below formula
 *
 * cp.x = p1.x * 2 - (p0.x + p2.x) / 2;
 * cp.y = p1.y * 2 - (p0.y + p2.y) / 2;
 */

import "./styles.css";
import { multicurve, generateRadomInRange } from "./utils";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const numPoints = 15;
const points = [];

for (let i = 0; i < numPoints; i++) {
  const point = {
    x: generateRadomInRange(0, width),
    y: generateRadomInRange(0, height)
  };

  context.beginPath();
  context.arc(point.x, point.y, 5, 0, Math.PI * 2, false);
  context.fillStyle = "#fff";
  context.fill();

  points.push(point);
}

context.beginPath();
context.moveTo(points[0].x, points[0].y);

for (let i = 1; i < points.length; i++) {
  context.lineTo(points[i].x, points[i].y);
}

context.strokeStyle = "red";
context.stroke();

context.beginPath();
multicurve(points, context);
context.strokeStyle = "#fff";
context.stroke();
