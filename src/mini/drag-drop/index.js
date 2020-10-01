import "./styles.css";
import { isCirclePointCollide } from "./utils";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight),
  handle = {
    x: width / 2,
    y: height / 2,
    radius: 30
  },
  offset = {};

const render = () => {
  context.clearRect(0, 0, width, height);

  context.beginPath();
  context.arc(handle.x, handle.y, handle.radius, 0, Math.PI * 2, false);
  context.fillStyle = "#fff";
  context.fill();
};

const handleMouseMove = (e) => {
  handle.x = e.clientX - offset.x;
  handle.y = e.clientY - offset.y;
  render();
};

const handleMouseUp = () => {
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
};

document.addEventListener("mousedown", (e) => {
  const hasCollided = isCirclePointCollide(e.clientX, e.clientY, handle);
  if (hasCollided) {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    offset.x = e.clientX - handle.x;
    offset.y = e.clientY - handle.y;
  }
});

window.requestAnimationFrame(render);
