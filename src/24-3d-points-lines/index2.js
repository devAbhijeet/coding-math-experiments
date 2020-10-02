import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const fl = 300;
const points = [];
const numPoints = 200;
const centerZ = 2000;
const radius = 1000;

let baseAngleSpeed = 0.01;
let baseAngle = 0;

for (let i = 0; i < numPoints; i++) {
  const point = {
    angle: 0.2 * i,
    y: 2000 - (4000 / numPoints) * i + Math.random() * 500
  };
  point.x = Math.cos(point.angle + baseAngle) * radius;
  point.z = centerZ + Math.sin(point.angle + baseAngle) * radius;
  points.push(point);
}

context.translate(width / 2, height / 2);

const render = () => {
  baseAngle += baseAngleSpeed;
  context.clearRect(-width / 2, -height / 2, width, height);
  context.beginPath();
  for (let i = 0; i < numPoints; i++) {
    const point = points[i];
    const perspective = fl / (fl + point.z);
    context.save();
    context.scale(perspective, perspective);
    context.translate(point.x, point.y);

    if (i === 0) {
      context.moveTo(0, 0);
    } else {
      context.lineTo(0, 0);
    }
    context.restore();
    point.x = Math.cos(point.angle + baseAngle) * radius;
    point.z = centerZ + Math.sin(point.angle + baseAngle) * radius;
  }
  context.strokeStyle = "#fff";
  context.stroke();
  window.requestAnimationFrame(render);
};

document.addEventListener("mousemove", (e) => {
  baseAngleSpeed = (e.clientX - width / 2) * 0.00005;
  // let yPos = (e.clientY - height / 2) * 2;
});

window.requestAnimationFrame(render);
