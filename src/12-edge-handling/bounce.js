/**
 *
 * When a particle movind with a cetain frames per second at a particular angle
 * hits any edge, The x or y coordinate is considered with respect to the center of the particle.
 * Eg:- If the x coordinate of the center of the particle is greater than width it means it has hit
 * the right boundary. But because x of the center is considered the particle appears from left edge,
 * while the right boundary is half visible on the right edge befire exiting.
 *
 * In order to fix this the radius of particle + x of cordinate of center of particle should be consider
 *
 * When making a particle bounce of the edges, if the particle hits the x edges set the velocity x to,
 * whatever it was time -1
 *
 * When making a particle bounce of the edges, if the particle hits the y edges set the velocity y to,
 * whatever it was time -1
 */

import "./styles.css";
import particle from "./particle";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const PI = Math.PI;

let p = particle.create(width / 2, height / 2, 10, Math.random() * PI * 2, 0.4);
p.radius = 40;
p.bounceFactor = -0.9;

const render = () => {
  context.clearRect(0, 0, width, height);

  p.update();
  const pX = p.position.getX(),
    pY = p.position.getY(),
    velocityX = p.velocity.getX(),
    velocityY = p.velocity.getY();

  context.beginPath();
  context.arc(pX, pY, p.radius, 0, PI * 2, false);
  context.fillStyle = "white";
  context.fill();

  if (pX + p.radius > width) {
    p.position.setX(width - p.radius);
    p.velocity.setX(velocityX * p.bounceFactor);
  }
  if (pX - p.radius < 0) {
    p.position.setX(p.radius);
    p.velocity.setX(velocityX * p.bounceFactor);
  }

  if (pY + p.radius > height) {
    p.position.setY(height - p.radius);
    p.velocity.setY(velocityY * p.bounceFactor);
  }
  if (pY - p.radius < 0) {
    p.position.setY(p.radius);
    p.velocity.setY(velocityY * p.bounceFactor);
  }

  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
