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

const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) =>
  "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

const particlesArray = Array.from({ length: 100 }, (v, i) => {
  let p = particle.create(
    width / 2,
    height,
    Math.random() * 8 + 15,
    -PI / 2 + Math.random(),
    0.1
  );
  p.radius = Math.random() * 1 + 10;
  p.bounceFactor = -0.9;
  return p;
});

const render = () => {
  context.clearRect(0, 0, width, height);

  particlesArray.forEach((p) => {
    p.update();
    const pX = p.position.getX();
    const pY = p.position.getY();
    const velocityX = p.velocity.getX();
    const velocityY = p.velocity.getY();

    const r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    const g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    const b = Math.floor(Math.random() * (255 - 0 + 1) + 0);

    context.beginPath();
    context.arc(pX, pY, p.radius, 0, PI * 2, false);
    context.fillStyle = rgbToHex(r, g, b);
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
  });

  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
