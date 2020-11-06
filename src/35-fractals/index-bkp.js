/**
 *
 * Fractals are shape or pattern. It can point, line, curve, cricle
 * This are simple shapes
 *
 * There are compund shape like house, smiley face. Thease are composed of
 * sub shapes.
 *
 * In sierpinski triangle we have p0, p1, p2
 * we calculate
 * pA = p0 and p1
 * pB = p1 and p2
 * pC = p2 and p0
 *
 */

import "./styles.css";

const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const p0 = {
  x: 0,
  y: 0
};

const p1 = {
  x: 0,
  y: 0
};

const p2 = {
  x: 0,
  y: 0
};

context.fillStyle = "#fff";
context.strokeStyle = "#fff";
context.translate(width / 2, height / 2);

const drawTriangle = (p0, p1, p2) => {
  context.beginPath();
  context.moveTo(p0.x, p0.y);
  context.lineTo(p1.x, p1.y);
  context.lineTo(p2.x, p2.y);
  context.lineTo(p0.x, p0.y);
  context.fill();
};

const render = () => {
  // context.clearRect(0, 0, width, height);
  p0.y -= 1;
  p1.x += 1;
  p1.y += 1;
  p2.x -= 1;
  p2.y += 1;
  drawTriangle(p0, p1, p2);
  if (
    p0.y <= -321 &&
    p1.x >= 278 &&
    p1.y > 160 &&
    p2.x <= -278 &&
    p2.y >= 160
  ) {
    console.log("Done");
  } else {
    requestAnimationFrame(render);
  }
};

requestAnimationFrame(render);
