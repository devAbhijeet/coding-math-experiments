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
 *
 */

import "./styles.css";
import particle from "./particle";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const PI = Math.PI;

let p = particle.create(width / 2, height / 2, 3, Math.random() * PI * 2, 0);

const render = () => {
  context.clearRect(0, 0, width, height);

  p.update();
  const pX = p.position.getX();
  const pY = p.position.getY();

  context.beginPath();
  context.arc(pX, pY, p.radius, 0, PI * 2, false);
  context.fillStyle = "white";
  context.fill();

  p.position.setX(
    pX - p.radius > width
      ? -p.radius
      : pX + p.radius < 0
      ? width + p.radius
      : pX
  );
  p.position.setY(
    pY - p.radius > height
      ? -p.radius
      : pY + p.radius < 0
      ? height + p.radius
      : pY
  );
  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
