/**
 *
 * Verlet integration is used for ragdoll physics.
 * We've using a form of numerical integration up untill now.
 *
 * When a ball is thrown up in the air, given the speed and time,
 * we can know where the ball will be at a given time t.
 *
 * Integration takes object current position and tries to project where,
 * on that curve the object will be after a given time.
 *
 * Type of numerical integration
 *
 * 1) Euler method (Fast but not accurate)
 *    In this case we take objects current velocity and add it to current posotiion
 * and add gravity to current velocity.
 *
 * To get more accurate path we need another integration
 * 2) Runga Kutta integrations (Accurate than Euler)
 *
 * 3) Verlet integration (When having lot of interacting object this is preferrd)
 * It is made up of moany individual points. This points have physics such
 * as gravity, bouncing and friction. They interact with the help of sticks.
 * Sticks constraint the movement of the points.
 * By creating points and sticks we can create objects that behave realestically.
 *
 * In verlet we calculate particles new position based on current position - old position.
 *
 * A stick is an object that connect 2 points and has length
 * Points move according to graavity, friction, velocity, bouncing and other forces.
 * Stick constraints motions of 2 points so that thery are away from each other.
 *
 * Say stick is maid of point pA and PB and has length of 80, since the
 * point are moving it's highly unlikely that thyey will at exactly length of 80
 * after updating. Let's say after updating they are 100 px apart.
 *
 * Since stick enforces constraints it will move the left point 10px and right point 10px close
 * so as to move it to length of 80px.
 *
 */

import "./styles.css";
import img from "./me.jpg";

const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

context.fillStyle = "#fff";
context.strokeStyle = "#fff";

const points = [
  {
    x: 100,
    y: 100,
    oldx: 100 + Math.random() * 100 - 50,
    oldy: 100 + Math.random() * 100 - 50
  },
  {
    x: 420,
    y: 100,
    oldx: 420,
    oldy: 100
  },
  {
    x: 420,
    y: 340,
    oldx: 420,
    oldy: 340
  },
  {
    x: 100,
    y: 340,
    oldx: 100,
    oldy: 340
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
    length: distance(points[0], points[1]),
    color: "red",
    width: 5
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
  }
];

const loadImage = (img) => {
  const imgElem = document.createElement("img");
  imgElem.src = img;
  return imgElem;
};

const forms = [
  {
    path: [points[0], points[1], points[2], points[3]],
    color: "green"
  }
];

const images = [
  {
    path: [points[0], points[1], points[2], points[3]],
    img: loadImage(img)
  }
];

const bounce = 0.9;
const gravity = 0.5;
const friction = 0.99;

const updatePoints = () => {
  points.forEach((p) => {
    const vx = (p.x - p.oldx) * friction;
    const vy = (p.y - p.oldy) * friction;
    p.oldx = p.x;
    p.oldy = p.y;
    p.x += vx;
    p.y += vy;
    p.y += gravity;
  });
};

const constraintPoints = () => {
  points.forEach((p) => {
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
    s.p0.x -= offsetX;
    s.p0.y -= offsetY;
    s.p1.x += offsetX;
    s.p1.y += offsetY;
  });
};

const renderSticks = () => {
  sticks.forEach((s) => {
    if (!s.hidden) {
      context.beginPath();
      context.strokeStyle = s.color ? s.color : "white";
      context.lineWidth = s.width ? s.width : "1";
      context.moveTo(s.p0.x, s.p0.y);
      context.lineTo(s.p1.x, s.p1.y);
      context.stroke();
    }
  });
};

const renderForms = () => {
  for (let i = 0; i < forms.length; i++) {
    const f = forms[i];
    context.beginPath();
    context.fillStyle = f.color;
    context.moveTo(f.path[0].x, f.path[0].y);
    for (let j = 1; j < f.path.length; j++) {
      context.lineTo(f.path[j].x, f.path[j].y);
    }
  }
  context.fill();
};

const renderImages = () => {
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const height = distance(image.path[0], image.path[1]);
    const width = distance(image.path[0], image.path[3]);
    const dx = image.path[1].x - image.path[0].x;
    const dy = image.path[1].y - image.path[0].y;
    const angle = Math.atan2(dy, dx);

    context.save();
    context.translate(image.path[0].x, image.path[0].y);
    context.rotate(angle);
    context.drawImage(image.img, 0, 0, width, height);
    context.restore();
  }
};

const render = () => {
  updatePoints();
  updateSticks();
  constraintPoints();
  renderPoints();
  // renderSticks();
  // renderForms();
  renderImages();
  requestAnimationFrame(render);
};

requestAnimationFrame(render);
