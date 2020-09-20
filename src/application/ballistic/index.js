import "./styles.css";
import particle from "./particle";
import { clamp } from "../utils";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const gun = {
  x: 100,
  y: height,
  angle: -Math.PI / 4
};

const cannonBall = particle.create(gun.x, gun.y, 15, gun.angle, 0.2);
cannonBall.radius = 7;
let canShoot = true;

const draw = () => {
  context.clearRect(0, 0, width, height);

  context.beginPath();
  context.arc(gun.x, gun.y, 30, 0, Math.PI * 2, false);
  context.fillStyle = "#efefef";
  context.fill();

  context.save();
  context.translate(gun.x, gun.y);
  context.rotate(gun.angle);
  context.fillRect(0, -8, 60, 16);
  context.restore();

  context.beginPath();
  context.arc(
    cannonBall.position.getX(),
    cannonBall.position.getY(),
    cannonBall.radius,
    0,
    Math.PI * 2,
    false
  );
  context.fillStyle = "red";
  context.fill();
};

window.requestAnimationFrame(draw);

document.body.addEventListener("keyup", (e) => {
  const keyCode = +e.keyCode;
  switch (keyCode) {
    case 32:
      if (canShoot) {
        shoot();
      }
      break;
    default:
  }
});

document.body.addEventListener("mousedown", (e) => {
  document.body.addEventListener("mousemove", handleMouseMove);
  document.body.addEventListener("mouseup", handleMouseUp);
  aimGun(e.clientX, e.clientY);
});

const shoot = () => {
  cannonBall.position.setX(gun.x + Math.cos(gun.angle) * 60);
  cannonBall.position.setY(gun.y + Math.sin(gun.angle) * 60);
  cannonBall.velocity.setLength(15);
  cannonBall.velocity.setAngle(gun.angle);
  canShoot = false;
  update();
};

const update = () => {
  cannonBall.update();
  draw();

  if (cannonBall.position.getY() > height) {
    canShoot = true;
  } else {
    window.requestAnimationFrame(update);
  }
};

const aimGun = (x, y) => {
  gun.angle = clamp(Math.atan2(y - gun.y, x - gun.x), -Math.PI / 2, -0.3);
  draw();
};

const handleMouseUp = (e) => {
  document.body.removeEventListener("mousemove", handleMouseMove);
  document.body.removeEventListener("mouseup", handleMouseUp);
  aimGun(e.clientX, e.clientY);
};

const handleMouseMove = (e) => {
  aimGun(e.clientX, e.clientY);
};
