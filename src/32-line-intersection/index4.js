/**
 * Line intersectin can be used to determine collision detection
 * between complex objects sucha as stars.
 *
 */

import "./styles.css";
import { star0, star1 } from "./stars";

const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

context.strokeStyle = "#fff";
context.fillStyle = "#fff";

const updateStars = (star) => {
  star.points.forEach((point, i) => {
    point.x = star.x + star.offset[i].x;
    point.y = star.y + star.offset[i].y;
  });
};

const drawStars = (star) => {
  context.beginPath();
  const starPoints = star.points.slice(1);
  context.moveTo(star.points[0].x, star.points[0].y);
  starPoints.forEach((point, index) => {
    context.lineTo(point.x, point.y);
  });
  context.closePath();
  context.stroke();
};

const segmentIntersect = (p0, p1, p2, p3) => {
  const A1 = p1.y - p0.y;
  const B1 = p0.x - p1.x;
  const C1 = A1 * p0.x + B1 * p0.y;

  const A2 = p3.y - p2.y;
  const B2 = p2.x - p3.x;
  const C2 = A2 * p2.x + B2 * p2.y;

  const denominator = A1 * B2 - A2 * B1;

  if (denominator === 0) {
    return null;
  }
  const intersectX = (B2 * C1 - B1 * C2) / denominator;
  const intersectY = (A1 * C2 - A2 * C1) / denominator;
  const rx0 = (intersectX - p0.x) / (p1.x - p0.x);
  const ry0 = (intersectY - p0.y) / (p1.y - p0.y);
  const rx1 = (intersectX - p2.x) / (p3.x - p2.x);
  const ry1 = (intersectY - p2.y) / (p3.y - p2.y);
  if (
    ((rx0 >= 0 && rx0 <= 1) || (ry0 >= 0 && ry0 <= 1)) &&
    ((rx1 >= 0 && rx1 <= 1) || (ry1 >= 0 && ry1 <= 1))
  ) {
    return {
      x: intersectX,
      y: intersectY
    };
  } else {
    return null;
  }
};

const checkStarCollision = (starA, starB) => {
  for (let i = 0; i < starA.points.length; i++) {
    const p0 = starA.points[i],
      p1 = starA.points[(i + 1) % starA.points.length];

    for (let j = 0; j < starB.points.length; j++) {
      const p2 = starB.points[j],
        p3 = starB.points[(j + 1) % starB.points.length];

      if (segmentIntersect(p0, p1, p2, p3)) {
        return true;
      }
    }
  }
  return false;
};

document.addEventListener("mousemove", (e) => {
  context.clearRect(0, 0, width, height); //Uncomment to see the magic
  star0.x = e.clientX;
  star0.y = e.clientY;
  updateStars(star0);
  updateStars(star1);

  if (checkStarCollision(star0, star1)) {
    context.strokeStyle = "red";
  } else {
    context.strokeStyle = "white";
  }

  drawStars(star0);
  drawStars(star1);
});
