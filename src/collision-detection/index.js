import "./styles.css";
import {
  isCircleCircleCollide,
  isCirclePointCollide,
  isRectRectCollide,
  isRectPointCollide
} from "./utils";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const c1 = {
  x: Math.random() * width,
  y: Math.random() * height,
  radius: 10 + Math.random() * 50
};

const c2 = {
  x: Math.random() * width,
  y: Math.random() * height,
  radius: 10 + Math.random() * 50
};

const c3 = {
  x: Math.random() * width,
  y: Math.random() * height,
  radius: 10 + Math.random() * 50
};

const rect1 = {
  x: 200,
  y: 200,
  height: 100,
  width: 200
};

const rect2 = {
  x: 50,
  y: 500,
  height: 100,
  width: 200
};

document.body.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  context.clearRect(0, 0, width, height);
  context.beginPath();

  // Circle Circle Collide
  // c2.x = x;
  // c2.y = y;
  // const isCircleCircleCollideVar = isCircleCircleCollide(c1, c2);
  // context.fillStyle = isCircleCircleCollideVar ? "red" : "white";

  // Circle point Collide
  // const isCirclePointCollideVar = isCirclePointCollide(x, y, c3);
  // context.fillStyle = isCirclePointCollideVar ? "blue" : "white";

  //Rect point collide
  // const isRectPointCollideVar = isRectPointCollide(x, y, rect1);
  // context.fillStyle = isRectPointCollideVar ? "blue" : "white";

  //Rect rect collide
  rect2.x = x;
  rect2.y = y;
  const isRectRectCollideVar = isRectRectCollide(rect1, rect2);
  context.fillStyle = isRectRectCollideVar ? "blue" : "crimson";

  // Circle Circle Collide
  // context.arc(c1.x, c1.y, c1.radius, 0, Math.PI * 2, false);
  // context.fill();

  // context.beginPath();
  // context.arc(c2.x, c2.y, c2.radius, 0, Math.PI * 2, false);
  // context.fill();

  // Circle point Collide
  // context.beginPath();
  // context.arc(c3.x, c3.y, c3.radius, 0, Math.PI * 2, false);
  // context.fill();

  // Rect point collide
  context.beginPath();
  context.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);

  //Rect rect collide
  context.beginPath();
  context.fillRect(rect2.x, rect2.y, rect2.width, rect2.height);
});
