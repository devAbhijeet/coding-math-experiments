/*                      /|
                      /  |
               100  /    |
      Hypotenous  /      | opposite
                /_ _ _ a |
                adjacent 50

cos(A) = adjacent/hypotenuse
cos(A) = 50/100 = 0.5
if we know the length, we can find the angle using below fromula
aCos(0.5) = 60deg


aSin = inverse sin = sin30deg = 0.5 = asin(0.5) = 30deg
aCos = inverse cos = sin60deg = 0.5 = asin(0.5) = 60deg
aTan = inverse tan
*/

import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

let arrowX = width * 0.5,
  arrowY = height * 0.5,
  dx = 0,
  dy = 0,
  angle = 0,
  radius = 200,
  circleAngle = 0,
  circleAngleSpeed = 0.01;

let draw = () => {
  // let x = arrowX + Math.cos(circleAngle) * radius;
  // let y = arrowY + Math.sin(circleAngle) * radius;
  context.clearRect(0, 0, width, height);

  context.save();
  context.translate(arrowX, arrowY);
  // context.translate(x, y);
  context.rotate(angle);

  context.beginPath();
  context.moveTo(20, 0);
  context.lineTo(-20, 0);
  context.moveTo(20, 0);
  context.lineTo(10, -10);
  context.moveTo(20, 0);
  context.lineTo(10, 10);
  context.strokeStyle = "#fff";
  context.stroke();
  context.restore();

  circleAngle += circleAngleSpeed;
  window.requestAnimationFrame(draw);
};

document.body.addEventListener("mousemove", (e) => {
  dx = e.clientX - arrowX;
  dy = e.clientY - arrowY;
  angle = Math.atan2(dy, dx);
  // angle = Math.atan(dy/ dx); //error prone
});

window.requestAnimationFrame(draw);
