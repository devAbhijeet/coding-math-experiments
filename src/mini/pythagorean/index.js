/** 
 *                      /|
                      /  |
                    /    |
      Hypotenous  /      | opposite
                /_ _ _ a |
                 adjacent
 * sqr(opposite) + sqr(adjacent) = sqr(Hypotenous)
 * 
 * angle = Atan(dy, dx) ,i.e Atan(opposite, adjacent)
 * Hypotenous = opposite/sin(theta)
 * Hypotenous = opposite/cos(theta)
 * 
 * 
 */

import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight),
  centerX = width / 2,
  centerY = height / 2;

const distanceXY = (x0, y0, x1, y1) => {
  const dx = x1 - x0,
    dy = y1 - y0;
  return Math.sqrt(dx * dx + dy * dy);
};

document.body.addEventListener("mousemove", (e) => {
  const hypotenous = distanceXY(centerX, centerY, e.clientX, e.clientY);
  context.clearRect(0, 0, width, height);
  context.beginPath();
  context.arc(centerX, centerY, 100, 0, Math.PI * 360, false);
  context.fillStyle = hypotenous > 100 ? "#ff6666" : "#cccccc";
  context.fill();
});
