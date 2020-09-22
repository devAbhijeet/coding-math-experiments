/**
 *
 * According to hooke's low
 * as the extension so the force. The force require to compress or extend a spring a certain distance,
 * is proportional to that distance. The amount of force the spring will exert to return to it's rest
 * state is also proportional to that distance.
 *
 * With gravity the further you go the less force is exerted,
 * With spring the further you stretch the more force is exerted.
 *
 * F = K * Distance
 * F = force, acceleration vector
 * K = K is constant represents stiffness of the spring.
 * Distance = distance spring is stretched
 *
 */

import "./styles.css";
import { generateRadomInRange } from "./utils";
import particle from "./particle";

const k = 0.01;
const seperator = 200;

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const particleA = particle.create(
  generateRadomInRange(0, width),
  generateRadomInRange(0, height),
  generateRadomInRange(0, 50),
  generateRadomInRange(0, Math.PI * 2),
  0.5
);

const particleB = particle.create(
  generateRadomInRange(0, width),
  generateRadomInRange(0, height),
  generateRadomInRange(0, 50),
  generateRadomInRange(0, Math.PI * 2),
  0.5
);

const particleC = particle.create(
  generateRadomInRange(0, width),
  generateRadomInRange(0, height),
  generateRadomInRange(0, 50),
  generateRadomInRange(0, Math.PI * 2),
  0.5
);

particleA.radius = 20;
particleA.friction = 0.9;

particleB.radius = 20;
particleB.friction = 0.9;

particleC.radius = 20;
particleC.friction = 0.9;

const render = () => {
  context.clearRect(0, 0, width, height);
  spring(particleA, particleB, seperator);
  spring(particleB, particleC, seperator);
  spring(particleC, particleA, seperator);
  particleA.update();
  particleB.update();
  particleC.update();

  context.beginPath();
  context.arc(
    particleA.position.getX(),
    particleA.position.getY(),
    particleA.radius,
    0,
    Math.PI * 2,
    false
  );
  context.fillStyle = "crimson";
  context.fill();

  context.beginPath();
  context.arc(
    particleB.position.getX(),
    particleB.position.getY(),
    particleB.radius,
    0,
    Math.PI * 2,
    false
  );
  context.fillStyle = "navy";
  context.fill();

  context.beginPath();
  context.arc(
    particleC.position.getX(),
    particleC.position.getY(),
    particleC.radius,
    0,
    Math.PI * 2,
    false
  );
  context.fillStyle = "#190B47";
  context.fill();

  context.beginPath();
  context.moveTo(particleA.position.getX(), particleA.position.getY());
  context.lineTo(particleB.position.getX(), particleB.position.getY());
  context.lineTo(particleC.position.getX(), particleC.position.getY());
  context.lineTo(particleA.position.getX(), particleA.position.getY());
  context.strokeStyle = "#948AB5";
  context.stroke();

  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);

const spring = (pA, pB, seperator) => {
  const distance = pA.position.subtract(pB.position);
  distance.setLength(distance.getLength() - seperator);
  const springForceVector = distance.multiply(k);
  pB.velocity.addTo(springForceVector);
  pA.velocity.subtractFrom(springForceVector);
};

document.addEventListener("mousemove", (e) => {
  particleA.position.setX(e.clientX);
  particleA.position.setY(e.clientY);

  particleB.position.setX(e.clientX);
  particleB.position.setY(e.clientY);

  particleC.position.setX(e.clientX);
  particleC.position.setY(e.clientY);
});
