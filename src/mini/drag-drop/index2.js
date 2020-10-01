import "./styles.css";
import { isCirclePointCollide } from "./utils";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight),
  handle0 = {
    x: 100,
    y: 100,
    radius: 15
  },
  handle1 = {
    x: 400,
    y: 400,
    radius: 15
  },
  handle2 = {
    x: 700,
    y: 100,
    radius: 15
  },
  handle3 = {
    x: 1000,
    y: 500,
    radius: 15
  },
  handles = [handle0, handle1, handle2, handle3],
  offset = {};

let isDragging = false;
let dragHandle = null;

const render = () => {
  context.clearRect(0, 0, width, height);

  context.beginPath();
  context.moveTo(handle0.x, handle0.y);
  context.bezierCurveTo(
    handle1.x,
    handle1.y,
    handle2.x,
    handle2.y,
    handle3.x,
    handle3.y
  );
  context.strokeStyle = "#fff";
  context.stroke();

  context.fillStyle = "#fff";
  for (let i = 0; i < handles.length; i++) {
    const handle = handles[i];
    if (isDragging && dragHandle === handle) {
      context.shadowColor = "red";
      context.shadowOffsetX = 4;
      context.shadowOffsetY = 4;
      context.shadowBlur = 8;
    }
    context.beginPath();
    context.arc(handle.x, handle.y, handle.radius, 0, Math.PI * 2, false);
    context.fillStyle = "#fff";
    context.fill();

    context.shadowColor = null;
    context.shadowOffsetX = null;
    context.shadowOffsetY = null;
    context.shadowBlur = null;
  }
};

const handleMouseMove = (e) => {
  dragHandle.x = e.clientX - offset.x;
  dragHandle.y = e.clientY - offset.y;
  render();
};

const handleMouseUp = () => {
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
  isDragging = false;
  render();
};

document.addEventListener("mousedown", (e) => {
  for (let i = 0; i < handles.length; i++) {
    console.log("i ", handles[i]);
    const handle = handles[i];
    const hasCollided = isCirclePointCollide(e.clientX, e.clientY, handle);
    if (hasCollided) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      dragHandle = handle;
      offset.x = e.clientX - handle.x;
      offset.y = e.clientY - handle.y;
      render();
    }
  }
});

window.requestAnimationFrame(render);
