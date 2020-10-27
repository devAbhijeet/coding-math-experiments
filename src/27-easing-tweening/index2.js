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
let easing = true;

let easeTo = (target, object, ease) => {
  const dx = target.x - object.x,
    dy = target.y - object.y;

  object.x += dx * ease;
  object.y += dy * ease;

  if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
    object.x = target.x;
    object.y = target.y;
    return false;
  }
  return true;
};

const render = () => {
  context.clearRect(0, 0, width, height);
  context.beginPath();

  context.arc(object.x, object.y, 10, 0, Math.PI * 2, false);
  context.fillStyle = "#fff";
  context.fill();
  easing = easeTo(target, object, ease);
  if (easing) {
    requestAnimationFrame(render);
  }
};

requestAnimationFrame(render);

document.addEventListener("mousemove", (e) => {
  target.x = e.clientX;
  target.y = e.clientY;
  if (!easing) {
    easing = true;
    render();
  }
});
