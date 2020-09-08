import "./styles.css";
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
};

window.requestAnimationFrame(draw);

document.body.addEventListener("mousedown", (e) => {
  document.body.addEventListener("mousemove", handleMouseMove);
  document.body.addEventListener("mouseup", handleMouseUp);
  aimGun(e.clientX, e.clientY);
});

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
