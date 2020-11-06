/**
 *
 * Verlet integration is used for ragdoll pysics.
 * We've using a form of numerical integration up untill now.
 *
 * When a ball is thrown up in the air, given the speed and time,
 * we can know where the ball will be at a given time t.
 *
 * Integration takes object current position and tries to prokect where,
 * on that curve the object will be after a given time.
 *
 * Type of numerical integration
 *
 * 1) Euler method (Fast but not accurate)
 *    In this case we take objects current velocity and add it to current posotiion
 * and add gravity to current velocity.
 *
 * To get more accurate path we need another integration
 * 2) Runga Kutta integrations (Accurate than Euler)
 *
 * 3) Verlet integration (When having lot of interacting object this is preferrd)
 * It is made up of moany individual points. This points have physics such
 * as gravity, bouncing and friction. They interact with the help of sticks.
 * Sticks constraint the movement of the points.
 * By creating points and sticks we can create objects that behave realestically.
 *
 */

import "./styles.css";

const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

context.fillStyle = "#fff";

const points = [
  {
    x: 100,
    y: 100,
    oldx: 95,
    oldy: 95
  }
];

const bounce = 0.9;
const gravity = 0.5;
const friction = 0.99;

const updatePoints = () => {
  points.forEach((p) => {
    const vx = (p.x - p.oldx) * friction;
    const vy = (p.y - p.oldy) * friction;
    p.oldx = p.x;
    p.oldy = p.y;
    p.x += vx;
    p.y += vy;
    p.y += gravity;

    if (p.x > width) {
      p.x = width;
      p.oldx = p.x + vx * bounce;
    }
    if (p.x < 0) {
      p.x = 0;
      p.oldx = p.x + vx * bounce;
    }

    if (p.y > height) {
      p.y = height;
      p.oldy = p.y + vy * bounce;
    }
    if (p.y < 0) {
      p.y = 0;
      p.oldy = p.y + vy * bounce;
    }
  });
};

const renderPoints = () => {
  context.clearRect(0, 0, width, height);
  points.forEach((p) => {
    context.beginPath();
    context.arc(p.x, p.y, 5, 0, Math.PI * 2, false);
    context.fill();
  });
};

const render = () => {
  updatePoints();
  renderPoints();
  requestAnimationFrame(render);
};

requestAnimationFrame(render);
