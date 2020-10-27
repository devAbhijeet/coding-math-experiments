import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const fl = 300;
const points = [];
let needsUpdate = true;

context.translate(width / 2, height / 2);

points[0] = { x: -500, y: -500, z: 1000 };
points[1] = { x: 500, y: -500, z: 1000 };
points[2] = { x: 500, y: -500, z: 500 };
points[3] = { x: -500, y: -500, z: 500 };
points[4] = { x: -500, y: 500, z: 1000 };
points[5] = { x: 500, y: 500, z: 1000 };
points[6] = { x: 500, y: 500, z: 500 };
points[7] = { x: -500, y: 500, z: 500 };

const project = () => {
  points.forEach((p) => {
    const scale = fl / (fl + p.z);
    p.sx = p.x * scale;
    p.sy = p.y * scale;
  });
};

const drawLine = (...args) => {
  let p = points[args[0]];
  context.moveTo(p.sx, p.sy);

  for (let i = 1; i < args.length; i++) {
    p = points[args[i]];
    context.lineTo(p.sx, p.sy);
  }
};

const translateModel = (x, y, z) => {
  points.forEach((p) => {
    p.x += x;
    p.y += y;
    p.z += z;
  });
  needsUpdate = true;
};

const render = () => {
  if (needsUpdate) {
    context.clearRect(-width / 2, -height / 2, width, height);
    project();
    context.beginPath();
    drawLine(0, 1, 2, 3, 0);
    drawLine(4, 5, 6, 7, 4);
    drawLine(0, 4);
    drawLine(1, 5);
    drawLine(2, 6);
    drawLine(3, 7);
    context.strokeStyle = "#fff";
    context.stroke();
    needsUpdate = false;
  }
  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);

document.addEventListener("keydown", (e) => {
  switch (e.which) {
    case 37: // left
      translateModel(-20, 0, 0);
      break;
    case 39: // right
      translateModel(20, 0, 0);
      break;
    case 38: // up
      if (e.shiftKey) {
        translateModel(0, 0, 20);
      } else {
        translateModel(0, -20, 0);
      }
      break;
    case 40: // down
      if (e.shiftKey) {
        translateModel(0, 0, -20);
      } else {
        translateModel(0, 20, 0);
      }
      break;
    default:
    //
  }
});
