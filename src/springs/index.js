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
 * Distance = distace spring is stretched
 *
 */

import "./styles.css";
import vector from "./vector";
import particle from "./particle";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const k = 0.1;
const springPoint = vector.create(width / 2, height / 2);
const weight = particle.create(
  Math.random() * width,
  Math.random() * height,
  50,
  Math.random() * Math.PI * 2
);
weight.radius = 20;
weight.friction = 0.7;

const render = () => {
  context.clearRect(0, 0, width, height);
  const distace = springPoint.subtract(weight.position);
  const springForce = distace.multiply(k);
  weight.velocity.addTo(springForce);
  weight.update();

  context.beginPath();
  context.arc(springPoint.getX(), springPoint.getY(), 5, 0, Math.PI * 2, false);
  context.fillStyle = "#190B47";
  context.fill();

  context.beginPath();
  context.arc(
    weight.position.getX(),
    weight.position.getY(),
    weight.radius,
    0,
    Math.PI * 2,
    false
  );
  context.fillStyle = "crimson";
  context.fill();

  context.beginPath();
  context.moveTo(weight.position.getX(), weight.position.getY());
  context.lineTo(springPoint.getX(), springPoint.getY());
  context.strokeStyle = "#948AB5";
  context.stroke();

  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);

document.addEventListener("mousemove", (e) => {
  springPoint.setX(e.clientX);
  springPoint.setY(e.clientY);
});
