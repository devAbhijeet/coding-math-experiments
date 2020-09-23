/**
 *
 * Math.floor
 * if the number is between 1 and 1.99 it will be rounded to 1 and not 2
 *
 * Math.ceil
 * if the number is between 1 and 1.99 it will be rounded to 2 and not 1
 *
 * Math.round
 * if the number is between 1 and 1.4999 it will be rounded to 1 and not 2
 * if the number is between 1.5 and 1.9999 it will be rounded to 2 and not 1
 *
 * Les take a value of pie and round it up a certain decimal places
 * pie = 3.14159265358979323846264338327950288419716939937510
 * to round the above value upto 3 decimal places,
 * 1) multiply it with Math.pow(10, 3) = 3141.59265358979323846264338327950288419716939937510
 * 2) Round the resultant value from step 1 = 3142.9265358979323846264338327950288419716939937510
 * 3) Take the value from step 2 and divide it by Math.pow(10, 3) = 3.1429265358979323846264338327950288419716939937510
 */

import "./styles.css";
import { roundNearest } from "./utils";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const gridSize = 40;

const drawGrid = () => {
  context.beginPath();

  for (let x = 0; x <= width; x += gridSize) {
    context.moveTo(x, 0);
    context.lineTo(x, height);
  }
  for (let y = 0; y <= height; y += gridSize) {
    context.moveTo(0, y);
    context.lineTo(width, y);
  }
  context.strokeStyle = "crimson";
  context.stroke();
};

drawGrid();

document.addEventListener("mousemove", (e) => {
  context.clearRect(0, 0, width, height);
  drawGrid();

  let x = roundNearest(e.clientX, gridSize);
  let y = roundNearest(e.clientY, gridSize);

  context.beginPath();
  context.arc(x, y, 10, 0, Math.Pi * 2, false);
  context.fillStyle = "#fff";
  context.fill();
});
