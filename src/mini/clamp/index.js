/**
 * CLAMP
 *
 * This function takes a range and a value.
 * It limits the value to ensure that value is withing the given range.
 *
 * For eg:- In a range of 0 to 100. If 0 represents the minimum marks a user can store,
 * and 100 reprents max a user can score. The value will always lie betwenn 0 and 100.
 * A user cannot score more than 100 or less than 0.
 *
 * If it's less than 0 return 0, if its greater than 100 return 100
 *
 */

import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

let rect = {
  x: width / 2 - 250,
  y: height / 2 - 200,
  width: 500,
  height: 400
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

document.body.addEventListener("mousemove", (e) => {
  const x = clamp(e.clientX, rect.x, rect.x + rect.width);
  const y = clamp(e.clientY, rect.y, rect.y + rect.height);

  context.clearRect(0, 0, width, height);
  context.fillStyle = "#cccccc";
  context.fillRect(rect.x - 10, rect.y - 10, rect.width + 20, rect.height + 20);

  context.fillStyle = "#444444";
  context.beginPath();
  context.arc(x, y, 10, 0, Math.PI * 2, false);
  context.fill();
});
