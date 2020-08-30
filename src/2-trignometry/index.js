/*                      /|
                      /  |
                    /    |
      Hypotenous  /      | opposite
                /_ _ _ a |
                 adjacent
*/

/*sin(A) = opposite/hypotenous, sin(0) = 0, sin(90) = 1
cos(A) = adjacent/hypotenous, cos(0) = 1, cos(90) = 0
tan(A) = opposite/adjacent
radian = 57.3 deg
pie = 180deg or 3.14
2pie = 360 deg or 6.28
deg = radians * 180 / pie
radians = deg * pie / 180
*/

// for (let angle = 0; angle < 2 * Math.PI; angle += 0.1) {
//   let x = angle * 200,
//     y = Math.sin(angle) * 200;
//   context.fillRect(x, y, 5, 5);
// }

import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight),
  angle = 0,
  angleSpeed = 0.01,
  angleMax = Math.PI * 2;

context.translate(0, height * 0.5);
context.scale(1, -1);

let clearCanvas = () => {
  canvas.width = width;
  canvas.height = height;
  context.translate(0, height * 0.5);
  context.scale(1, -1);
};

let generateSinCosWave = () => {
  let x = angle * 200,
    sinY = Math.sin(angle) * 200,
    cosY = Math.cos(angle) * 200;
  clearCanvas();
  context.arc(x, sinY, 3, 0, angleMax, false);
  context.arc(x, cosY, 3, 0, angleMax, false);
  context.fillStyle = "white";
  context.fill();
  angle = angle >= angleMax ? 0 : angle + angleSpeed;
  window.requestAnimationFrame(generateSinCosWave);
};

window.requestAnimationFrame(generateSinCosWave);
