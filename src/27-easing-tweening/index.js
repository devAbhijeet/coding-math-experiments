/**
 *
 * Easing is when an object moves from one position to the target position.
 * Consider there's an object at position x and we want to move @ posotion y.
 * To do that we calculate the distance between x and y and multiply that
 * distance with easing factor.
 *
 * x = (target.x - object.x) * easingFactor
 * y = (target.y - object.y) * easingFactor
 *
 * However, the above point highkights a paradox. Each time the distance is
 * reduced, the next distance that is calculated get shorter ans shorter,
 * i.e, dividing a distance by 2 then again by 2 then againg by 2 and so on
 *
 */
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

const render = () => {
  context.clearRect(0, 0, width, height);
  context.beginPath();

  context.arc(object.x, object.y, 10, 0, Math.PI * 2, false);
  context.fillStyle = "#fff";
  context.fill();

  const dx = target.x - object.x,
    dy = target.y - object.y;

  object.x += dx * ease;
  object.y += dy * ease;
  requestAnimationFrame(render);
};

requestAnimationFrame(render);

document.addEventListener("mousemove", (e) => {
  target.x = e.clientX;
  target.y = e.clientY;
});
