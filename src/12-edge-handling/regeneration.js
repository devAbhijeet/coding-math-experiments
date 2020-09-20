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

const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) =>
  "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

const particlesArray = Array.from({ length: 400 }, (v, i) => {
  let p = particle.create(
    width / 2,
    height,
    Math.random() * 8 + 15,
    -PI / 2 + (Math.random() * 0.2 - 0.1),
    0.3
  );
  p.radius = Math.random() * 5 + 5;
  return p;
});

const render = () => {
  context.clearRect(0, 0, width, height);

  particlesArray.forEach((p) => {
    p.update();
    const pX = p.position.getX(),
      pY = p.position.getY();
    const r = Math.floor(Math.random() * (255 - 0 + 1) + 0),
      g = Math.floor(Math.random() * (255 - 0 + 1) + 0),
      b = Math.floor(Math.random() * (255 - 0 + 1) + 0);

    context.beginPath();
    context.arc(pX, pY, p.radius, 0, PI * 2, false);
    context.fillStyle = rgbToHex(r, g, b);
    context.fill();

    if (pY - p.radius > height) {
      p.position.setX(width / 2);
      p.position.setY(height);
      // p.velocity.setY(p.velocity.getY() * -1);
      p.velocity.setLength(Math.random() * 8 + 15);
      p.velocity.setAngle(-PI / 2 + (Math.random() * 0.2 - 0.1));
    }
  });
  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
