/**
 * Normalization is taking a range of values and converting them,
 * in a range of 0 to 1.
 * Eg:- if lets say we have min as 0 and max as 33, and want to find out,
 * where does 23 falls in that range such that the value can be spread
 * over a range of 0 to 1
 *
 * 0_________________23____________33
 * 0                               1
 * so 23/33 = 0.69696969697
 * but if we reduce the min on the scale from 0 to 5 such that now are
 * range starts from 5 to 33, where does 23 falls in the new range
 * 0___5_____________23____________33
 * 0                                1
 * answer is 23-5/33-5, i.e, 18/28 =  0.64285714285
 *
 * to summarise normalization = (value - min)/(max - min)
 *
 *
 * Linear Interpolation(LERP) is taking a normalized value and mapping it to a value in a given range,
 * Eg:- if lets say we have normalized value of 0.33 and we want to find out,
 * where does 0.33 falls in that range of 1 to 100
 *
 * 0_____________________________100
 *       0.33
 * so 0.33 * 100 = 33
 * but if we reduce the min on the scale from 0 to 5 such that now are
 * range starts from 5 to 100, where does 33 falls in the new range
 * 0___5_________________________100
 *          0.33
 * answer is (100-5) * 0.33 + 5, i.e, 95*0.33 + 5 =  36.35
 *
 * to summarise lerp = (max - min) * normalizedVal + min
 *
 * Map is taking a value returned by normaliozed function and providing that value to lerp function
 * The lerp function takes that value and generated a new value. This new value is mapped value.
 *
 * Lets say we we want to map the value on y axis starting from
 * |  0
 * |
 * |
 * |
 * |  y-axis
 * |
 * |
 * |
 * |  600
 * that changes based on user mouse move to value of the radius of a circle
 *
 * 300                                                      400
 * __________________________________________________________
 *
 * logs()
 * console.log("min and  max ", min, max);
 * console.log("Normalized value for ", value, " is  ", normalized);
 * console.log("heigth is ", height);
 * console.log("-height * normalized ", -height * normalized);
 * console.log("height * normalized ", height * normalized);
 * console.log("height - height * normalized ", height - height * normalized);
 * console.log("width / datum.length ", width / datum.length);
 * console.log("width / datum.length *  i ", (width / datum.length) * i);
 */

import "./styles.css";
import particle from "./particle";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const normalize = (value, min, max) => (value - min) / (max - min);
const lerp = (norm, min, max) => (max - min) * norm + min;
const map = (norm, sourceMin, sourceMax, destMin, destMax) =>
  lerp(normalize(norm, sourceMin, sourceMax), destMin, destMax);

let particles = [];

const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) =>
  "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

const render = () => {
  drawStars();
};

window.requestAnimationFrame(render);

document.body.addEventListener("mousemove", (e) => {
  // context.clearRect(0, 0, width, height);
  // drawCircle(e);
  twinkleStars(e);
});

const drawStars = () => {
  particles = Array.from({ length: 80 }, (v, i) =>
    particle.create(Math.random() * width, Math.random() * height, "#fff")
  );
  particles.forEach((p) => {
    context.beginPath();
    context.arc(p.x, p.y, 10, 0, Math.PI * 2, false);
    context.fillStyle = "white";
    context.fill();
  });
};

const twinkleStars = (e) => {
  const yAxis = e.clientY;
  const xAxis = e.clientX;
  particles.forEach((p) => {
    const colorY = Math.floor(map(Math.abs(yAxis - p.y), 0, height, 0, 250));
    const colorX = Math.floor(map(Math.abs(xAxis - p.y), 0, width, 0, 250));
    const radius = map(yAxis, 0, height, 20, 340);
    const color = rgbToHex(
      colorY,
      colorX,
      Math.floor(Math.random() * (255 - 0 + 1) + 0)
    );
    p.update(color);
    context.beginPath();
    context.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
    context.fillStyle = p.color;
    context.fill();
  });
};

// const drawCircle = (e) => {
//   const yAxis = e.clientY;
//   const radius = map(yAxis, 0, height, 20, 340);
//   context.beginPath();
//   context.arc(width / 2, height / 2, radius, 0, Math.PI * 2, false);
//   context.fillStyle = "#fff";
//   context.fill();
// };
