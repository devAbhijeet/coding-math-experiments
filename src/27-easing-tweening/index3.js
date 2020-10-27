import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

let target = {
  x: width,
  y: Math.random() * height
};

let ease = 0.1;
let points = Array.from({ length: 10 }, (p) => ({
  x: 0,
  y: 0
}));

console.log("points ", points);

const render = () => {
  context.clearRect(0, 0, width, height);

  let leader = {
    x: target.x,
    y: target.y
  };

  points.forEach((p) => {
    p.x += (leader.x - p.x) * ease;
    p.y += (leader.y - p.y) * ease;

    context.beginPath();
    context.arc(p.x, p.y, 10, 0, Math.PI * 2, false);
    context.fillStyle = "#fff";
    context.fill();

    leader.x = p.x;
    leader.y = p.y;
  });
  requestAnimationFrame(render);
};

requestAnimationFrame(render);

document.addEventListener("mousemove", (e) => {
  target.x = e.clientX;
  target.y = e.clientY;
});
