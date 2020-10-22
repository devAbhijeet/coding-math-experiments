/**
 * Collision detection is process of identifying whether or not 2 objects collide each other.
 * There are 2 ways to find this
 * 1) Mathematical
 * 2) Graphical
 * For now we will only detect collision for object of below 3 sizes
 * Cirlce, Rectangle and a point.
 * We will cover collison for circle - circle, cirlce - point, reactangle - rectangle, rectangle - point
 *
 *
 */

import "./styles.css";
import { isCirclePointCollide } from "./utils";

const PI = Math.PI;

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const circle1 = {
  x: Math.random() * width,
  y: Math.random() * height,
  radius: 50 + Math.random() * 100
};

document.body.addEventListener("mousemove", (e) => {
  if (isCirclePointCollide(e.clientX, e.clientY, circle1)) {
    context.fillStyle = "red";
  } else {
    context.fillStyle = "blue";
  }

  context.clearRect(0, 0, width, height);
  context.beginPath();
  context.arc(circle1.x, circle1.y, circle1.radius, 0, PI * 2, false);
  context.fill();
});
