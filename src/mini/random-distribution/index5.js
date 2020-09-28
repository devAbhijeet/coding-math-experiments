import "./styles.css";
import { generateRadomInRangePristine } from "./utils";
import particle2 from "../../optimisation/particle2";
let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

let requestId = null;
const centerX = width / 2;
const centerY = height / 2;
const circleMaxRadius = 200;
const circleMaxAngle = Math.PI * 2;

const numParticles = 10000;
const particles = [];

for (let i = 0; i < numParticles; i++) {
  // const radius = generateRadomInRangePristine(0, circleMaxRadius);
  const radius = Math.sqrt(Math.random()) * circleMaxRadius;
  const angle = generateRadomInRangePristine(0, circleMaxAngle);

  const x = centerX + Math.cos(angle) * radius;
  const y = centerY + Math.sin(angle) * radius;
  const particle = particle2.create(x, y, 0, 0);
  particle.setSpeed(5);
  particle.setHeading(generateRadomInRangePristine(0, Math.PI * 2));
  particles.push(particle);
}

const explode = () => {
  if (requestId) {
    window.cancelAnimationFrame(requestId);
  }
  context.clearRect(0, 0, width, height);

  for (let i = 0; i < numParticles; i++) {
    const particle = particles[i];
    particle.update();
    context.beginPath();
    context.arc(particle.x, particle.y, 1, 0, Math.PI * 2, false);
    context.fillStyle = "red";
    context.fill();
  }

  window.requestAnimationFrame(explode);
};

const render = () => {
  context.clearRect(0, 0, width, height);
  for (let i = 0; i < numParticles; i += 1) {
    const particle = particles[i];
    // const radius = generateRadomInRangePristine(0, circleMaxRadius);
    const radius = Math.sqrt(Math.random()) * circleMaxRadius;
    const angle = generateRadomInRangePristine(0, circleMaxAngle);
    particle.x = centerX + Math.cos(angle) * radius;
    particle.y = centerY + Math.sin(angle) * radius;

    context.beginPath();
    context.arc(particle.x, particle.y, 1, 0, Math.PI * 2, false);
    context.fillStyle = "yellow";
    context.fill();
  }
  requestId = window.requestAnimationFrame(render);
};

requestId = window.requestAnimationFrame(render);
setTimeout(explode, 5000);
