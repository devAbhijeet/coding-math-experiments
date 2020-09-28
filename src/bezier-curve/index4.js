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
import { cubicBezier, generateRadomInRange } from "./utils";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const p0 = {
  x: generateRadomInRange(0, width),
  y: generateRadomInRange(0, height)
};

const p1 = {
  x: generateRadomInRange(0, width),
  y: generateRadomInRange(0, height)
}; //control point

const p2 = {
  x: generateRadomInRange(0, width),
  y: generateRadomInRange(0, height)
};

const cp = {};

cp.x = p1.x * 2 - (p0.x + p2.x) / 2;
cp.y = p1.y * 2 - (p0.y + p2.y) / 2;

const drawPoint = (point) => {
  context.beginPath();
  context.arc(point.x, point.y, 5, 0, Math.PI * 2, false);
  context.fillStyle = "#fff";
  context.fill();
};

const connectPoints = () => {
  context.beginPath();
  context.moveTo(p0.x, p0.y);
  // context.lineTo(p1.x, p1.y); //original control point
  context.lineTo(cp.x, cp.y);
  context.lineTo(p2.x, p2.y);
  context.strokeStyle = "red";
  context.stroke();
};

const connectQuadraticCurve = () => {
  context.beginPath();
  context.moveTo(p0.x, p0.y);
  context.quadraticCurveTo(cp.x, cp.y, p2.x, p2.y);
  context.strokeStyle = "#fff";
  context.stroke();
};

drawPoint(p0);
drawPoint(p1);
drawPoint(p2);
drawPoint(cp);

connectPoints();
connectQuadraticCurve();
