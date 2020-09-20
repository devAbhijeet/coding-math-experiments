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
import { rectIntersect } from "./utils";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const rect0 = {
  x: 200,
  y: 200,
  width: -200,
  height: -100
};
const rect1 = {
  x: 0,
  y: 0,
  width: -100,
  height: -200
};

document.body.addEventListener("mousemove", (e) => {
  rect1.x = e.clientX - 50;
  rect1.y = e.clientY - 100;

  context.clearRect(0, 0, width, height);
  if (rectIntersect(rect0, rect1)) {
    context.fillStyle = "#ff6666";
  } else {
    context.fillStyle = "#999999";
  }
  context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
  context.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);
});
