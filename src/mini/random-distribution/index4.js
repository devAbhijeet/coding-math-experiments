import "./styles.css";
import { generateRadomInRange } from "./utils";
let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const centerX = width / 2;
const centerY = height / 2;

const numParticles = 1000;

const render = () => {
  for (let i = 0; i < numParticles; i++) {
    const x = generateRadomInRange(centerX - 100, centerX + 100);
    const y = generateRadomInRange(centerY - 100, centerY + 100);

    context.beginPath();
    context.arc(x, y, 1, 0, Math.PI * 2, false);
    context.fillStyle = "#fff";
    context.fill();
  }
};

window.requestAnimationFrame(render);
