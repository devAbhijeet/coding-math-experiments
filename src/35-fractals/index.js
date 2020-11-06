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
  y: -321
};

const p1 = {
  x: 278,
  y: 160
};

const p2 = {
  x: -278,
  y: 160
};

context.fillStyle = "#fff";
context.strokeStyle = "#fff";
context.translate(width / 2, height / 2);

const drawTraingle = (p0, p1, p2) => {
  context.beginPath();
  context.moveTo(p0.x, p0.y);
  context.lineTo(p1.x, p1.y);
  context.lineTo(p2.x, p2.y);
  context.lineTo(p0.x, p0.y);
  context.stroke();
};

const sierpinski = (p0, p1, p2, limit) => {
  if (limit > 0) {
    const pA = {
      x: (p0.x + p1.x) / 2,
      y: (p0.y + p1.y) / 2
    };
    const pB = {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2
    };
    const pC = {
      x: (p2.x + p0.x) / 2,
      y: (p2.y + p0.y) / 2
    };
    sierpinski(p0, pA, pC, limit - 1);
    sierpinski(pA, p1, pB, limit - 1);
    sierpinski(pC, pB, p2, limit - 1);
  } else {
    drawTraingle(p0, p1, p2);
  }
};

sierpinski(p0, p1, p2, 5);
