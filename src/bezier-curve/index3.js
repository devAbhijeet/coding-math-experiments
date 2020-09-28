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
};

const p2 = {
  x: generateRadomInRange(0, width),
  y: generateRadomInRange(0, height)
};

const p3 = {
  x: generateRadomInRange(0, width),
  y: generateRadomInRange(0, height)
};

const pFinal = {};
let direction = 0.01;
let t = 0;

const render = () => {
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#fff";
  context.strokeStyle = "#fff";

  context.beginPath();
  context.moveTo(p0.x, p0.y);
  context.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  context.stroke();

  cubicBezier(p0, p1, p2, p3, t, pFinal);
  context.beginPath();
  context.arc(pFinal.x, pFinal.y, 10, 0, Math.PI * 2, false);
  context.fill();

  t += direction;

  if (t > 1 || t < 0) {
    direction = -direction;
  }

  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
