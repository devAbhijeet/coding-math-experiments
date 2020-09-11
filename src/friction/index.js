/**
 *
 * There are different types of friction.
 * Dry, Lubricated, skin, internal, fluid
 *
 *
 * Dry friction occurs when 2 surfaces are in contaact
 * Skin frcitons occurs when object moves through a liquid or some
 * other medium like atmosphere. Alos it is a part of DRAG.
 *
 * friction changes the speed of an object. But speed is a component
 * of velocit. Therefore, friciton changes velocity.
 *
 * But we know that change is velocity vector is nothing but acceleration.
 * Frciton depends on surface area, materail, medium, shape, weight, slope,
 * temperature, turbulence
 *
 *
 * ______________________________> (Velocity Vector)
 *                       <_______ (Friction Vector)
 * ______________________> (Resultant vector)
 *
 */

import "./styles.css";
import particle from "./particle";

const pie = Math.PI;

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);
const p = particle.create(
  width / 2,
  height / 2,
  10,
  -Math.random() * pie * 2,
  0.1,
  0
);
p.radius = 10;

const render = () => {
  if (p.velocity.getLength() > p.fricton.getLength()) {
    p.update();
  } else {
    p.velocity.setLength(0);
  }

  context.clearRect(0, 0, width, height);
  context.beginPath();
  context.arc(
    p.position.getX(),
    p.position.getY(),
    p.radius,
    0,
    Math.PI * 2,
    false
  );
  context.fillStyle = "#fff";
  context.fill();

  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
