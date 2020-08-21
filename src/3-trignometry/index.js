import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight),
  angle = 0,
  angleSpeed = 0.1;

let centerX = width * 0.5,
  centerY = height * 0.5,
  centerYOffset = height * 0.4,
  centerXOffset = width * 0.4,
  baseRadius = 10,
  radiusOffset = 10;

let draw = () => {
  let y = centerY + Math.sin(angle) * centerYOffset;
  let x = centerX + Math.cos(angle) * centerXOffset;
  let radiusOffsetXY = baseRadius + Math.sin(angle) * radiusOffset;
  //Math.sin(angle) * radiusOffset
  context.clearRect(0, 0, width, height);
  context.beginPath();
  context.fillStyle = "orange";
  context.arc(centerX, y, 20, 0, Math.PI * 2, false);
  context.fill();

  context.beginPath();
  context.fillStyle = "white";
  context.arc(centerX, centerY, radiusOffsetXY, 0, Math.PI * 2, false);
  context.fill();

  context.beginPath();
  context.fillStyle = "lightgreen";
  context.arc(x, centerY, 20, 0, Math.PI * 2, false);
  context.fill();

  angle += angleSpeed;
  window.requestAnimationFrame(draw);
};

window.requestAnimationFrame(draw);
