/**
 * Type of tweening
 *
 * Linear Tweening (Similar to lerp function in util) where
 * (max-min) is the c
 * norm is t/d
 * min is b
 *
 * (max - min) * norm + min == c*t/d+b
 *
 */

import "./styles.css";
import { linearTween } from "./utils";

const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const start = {
    x: 100,
    y: 100
  },
  target = {},
  change = {},
  duration = 1000;

let startTime = null;

const drawCirlce = (x, y) => {
  context.beginPath();
  context.arc(x, y, 20, 0, Math.PI * 2, false);
  context.fillStyle = "#fff";
  context.fill();
};

const render = () => {
  context.clearRect(0, 0, width, height);
  let timeElapsed = new Date() - startTime;
  if (timeElapsed < duration) {
    const x = linearTween(timeElapsed, start.x, change.x, duration);
    const y = linearTween(timeElapsed, start.y, change.y, duration);
    drawCirlce(x, y);
    requestAnimationFrame(render);
  } else {
    drawCirlce(target.x, target.y);
    start.x = target.x;
    start.y = target.y;
  }
};

document.addEventListener("click", (e) => {
  target.x = e.clientX;
  target.y = e.clientY;
  change.x = target.x - start.x;
  change.y = target.y - start.y;
  startTime = new Date();
  requestAnimationFrame(render);
});
