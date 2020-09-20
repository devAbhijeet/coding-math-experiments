import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

let centerX = width * 0.5,
  centerY = height * 0.5,
  angle = 0,
  radius = 200,
  numOfObj = 200,
  slice = (Math.PI * 2) / numOfObj;

for (let index = 0; index < numOfObj; index++) {
  angle = index * slice;
  let x = centerX + Math.cos(angle) * radius;
  let y = centerY + Math.sin(angle) * radius;
  context.beginPath();
  context.arc(x, y, 1, 0, Math.PI * 2, false);
  context.fillStyle = "white";
  context.fill();
}
