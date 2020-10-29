import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

let object = {
  x: 0,
  y: Math.random() * height
};

let target = {
  x: width,
  y: Math.random() * height
};

let ease = 0.1;
let angle = 0;
let angleSpeed = 0.1;

const render = () => {
  context.clearRect(0, 0, width, height);
  context.beginPath();

  context.arc(object.x, object.y, 10, 0, Math.PI * 2, false);
  context.fillStyle = "#fff";
  context.fill();

  const dx = target.x - object.x,
    dy = target.y - object.y;

  object.x += angle * ease;
  object.y += Math.sin(angle) * (dy * ease);
  angle+=angleSpeed

  requestAnimationFrame(render);
};

requestAnimationFrame(render);

document.addEventListener("mousemove", (e) => {
  target.x = e.clientX;
  target.y = e.clientY;
});
