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
import { isRectPointCollide } from "./utils";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const rect = {
  x: 300,
  y: 200,
  width: 200,
  height: 100
};

document.body.addEventListener("mousemove", (e) => {
  context.clearRect(0, 0, width, height);
  if (isRectPointCollide(e.clientX, e.clientY, rect)) {
    context.fillStyle = "#ff6666";
  } else {
    context.fillStyle = "#999999";
  }
  context.fillRect(rect.x, rect.y, rect.width, rect.height);
});
