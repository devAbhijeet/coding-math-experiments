import "./styles.css";
import { generateRadomInRangePristine } from "./utils";
let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const centerX = width / 2;
const centerY = height / 2;
const circleMaxXRadius = 200;
const circleMaxYRadius = 100;
const circleMaxAngle = Math.PI * 2;

const numParticles = 1000;

for (let i = 0; i < numParticles; i += 1) {
  const radiusX = generateRadomInRangePristine(0, circleMaxXRadius);
  const radiusY = generateRadomInRangePristine(0, circleMaxYRadius);
  const angle = generateRadomInRangePristine(0, circleMaxAngle);

  const x = centerX + Math.cos(angle) * radiusX;
  const y = centerY + Math.sin(angle) * radiusY;

  context.beginPath();
  context.arc(x, y, 1, 0, Math.PI * 2, false);
  context.fillStyle = "#fff";
  context.fill();
}
