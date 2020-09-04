/**
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

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

let minX = 50,
  maxX = width - 50,
  minY = 100,
  maxY = height - 100,
  minAlpha = 0,
  maxAlpha = 1,
  minRadius = 10,
  maxRadius = 400,
  normalizedVal = 0,
  minColorScale = 0,
  maxColorScale = 255;

const lerp = (norm, min, max) => (max - min) * norm + min;

const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) =>
  "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

const render = () => {
  const x = lerp(normalizedVal, minX, maxX);
  const y = lerp(normalizedVal, minY, maxY);
  const alpha = lerp(normalizedVal, maxAlpha, minAlpha);
  const radius = lerp(normalizedVal, minRadius, maxRadius);
  const color = Math.floor(lerp(normalizedVal, maxColorScale, minColorScale));

  context.clearRect(0, 0, width, height);

  context.beginPath();
  context.globalAlpha = alpha;
  context.arc(width / 2, height / 2, radius, 0, Math.PI * 2, false);
  context.fillStyle = rgbToHex(x, y, color);
  context.fill();

  normalizedVal += 0.005;
  normalizedVal = normalizedVal > 1 ? 0 : normalizedVal;

  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
