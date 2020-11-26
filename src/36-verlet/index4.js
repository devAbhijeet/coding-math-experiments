/**
 * 1) Pinning
 *
 */

import "./styles.css";

const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

let angle = 0;
let speed = 0.1;

context.fillStyle = "#fff";
context.strokeStyle = "#fff";

const engine = {
  baseX: 450,
  baseY: 100,
  range: 100,
  angle: 0,
  speed: 0.05,
  x: 550,
  y: 100,
  pinned: true
};

const points = [
  {
    x: 100,
    y: 100,
    oldx: 100 + Math.random() * 50 - 25,
    oldy: 100 + Math.random() * 50 - 25
  },
  {
    x: 200,
    y: 100,
    oldx: 200,
    oldy: 100
  },
  {
    x: 200,
    y: 200,
    oldx: 200,
    oldy: 200
  },
  {
    x: 100,
    y: 200,
    oldx: 100,
    oldy: 200
  },
  {
    x: 400,
    y: 100,
    oldx: 400,
    oldy: 100
  },
  {
    x: 250,
    y: 100,
    oldx: 250,
    oldy: 100
  }
];

const distance = (p0, p1) => {
  const dx = p1.x - p0.x;
  const dy = p1.y - p0.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const sticks = [
  {
    p0: points[0],
    p1: points[1],
    length: distance(points[0], points[1])
  },
  {
    p0: points[1],
    p1: points[2],
    length: distance(points[1], points[2])
  },
  {
    p0: points[2],
    p1: points[3],
    length: distance(points[2], points[3])
  },
  {
    p0: points[3],
    p1: points[0],
    length: distance(points[3], points[0])
  },
  {
    p0: points[0],
    p1: points[2],
    length: distance(points[0], points[2]),
    hidden: true
  },
  {
    p0: engine,
    p1: points[4],
    length: distance(engine, points[4])
  },
  {
    p0: points[4],
    p1: points[5],
    length: distance(points[4], points[5])
  },
  {
    p0: points[5],
    p1: points[0],
    length: distance(points[5], points[0])
  }
];

const bounce = 0.9;
const gravity = 0.5;
const friction = 0.99;

const updatePoints = () => {
  points.forEach((p) => {
    if (!p.pinned) {
      const vx = (p.x - p.oldx) * friction;
      const vy = (p.y - p.oldy) * friction;
      p.oldx = p.x;
      p.oldy = p.y;
      p.x += vx;
      p.y += vy;
      p.y += gravity;
    }
  });
};

const constraintPoints = () => {
  points.forEach((p) => {
    if (!p.pinned) {
      const vx = (p.x - p.oldx) * friction;
      const vy = (p.y - p.oldy) * friction;
      if (p.x > width) {
        p.x = width;
        p.oldx = p.x + vx * bounce;
      }
      if (p.x < 0) {
        p.x = 0;
        p.oldx = p.x + vx * bounce;
      }

      if (p.y > height) {
        p.y = height;
        p.oldy = p.y + vy * bounce;
      }
      if (p.y < 0) {
        p.y = 0;
        p.oldy = p.y + vy * bounce;
      }
    }
  });
};

const renderPoints = () => {
  context.clearRect(0, 0, width, height);
};

const updateSticks = () => {
  sticks.forEach((s) => {
    const dx = s.p1.x - s.p0.x;
    const dy = s.p1.y - s.p0.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const difference = s.length - distance;
    const percentage = difference / distance / 2;
    const offsetX = dx * percentage;
    const offsetY = dy * percentage;
    if (!s.p0.pinned) {
      s.p0.x -= offsetX;
      s.p0.y -= offsetY;
    }
    if (!s.p1.pinned) {
      s.p1.x += offsetX;
      s.p1.y += offsetY;
    }
  });
};

const renderSticks = () => {
  context.beginPath();
  sticks.forEach((s) => {
    if (!s.hidden) {
      context.moveTo(s.p0.x, s.p0.y);
      context.lineTo(s.p1.x, s.p1.y);
    }
  });
  context.stroke();
};

const updateEngine = () => {
  engine.x = engine.baseX + Math.cos(engine.angle) * engine.range;
  engine.y = engine.baseY + Math.sin(engine.angle) * engine.range;
  engine.angle += engine.speed;
};

const renderEngine = () => {
  context.beginPath();
  // context.rect(engine.baseX - engine.range, engine.baseY - 5, engine.range * 2, 10);
  context.arc(engine.baseX, engine.baseY, engine.range, 0, Math.PI * 2);
  context.stroke();
  context.beginPath();
  context.arc(engine.x, engine.y, 5, 0, Math.PI * 2);
  context.fill();
};

const render = () => {
  updateEngine();
  updatePoints();
  for (let index = 0; index < 5; index++) {
    updateSticks();
    constraintPoints();
  }
  renderPoints();
  renderSticks();
  renderEngine();
  requestAnimationFrame(render);
};

requestAnimationFrame(render);
