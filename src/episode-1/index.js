import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

context.fillStyle = "grey";
context.fillRect(0, 0, width, height * 0.5);

context.fillStyle = "lightblue";
context.fillRect(0, height * 0.5, width, height * 0.3);

context.fillStyle = "#5C4033";
context.fillRect(0, height * 0.8, width, height * 0.2);

context.fillStyle = "#dbbd7a";
context.arc(width - 200, 100, 50, 0, 2 * Math.PI);
context.fill();

for (let index = 0; index < 1000; index++) {
  let x = Math.random() * width;
  let y = Math.random() * height;
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(
    x + Math.floor(Math.random() * 1) + 4,
    y + Math.floor(Math.random() * 1) + 10
  );
  context.strokeStyle = "darkgrey";
  context.stroke();
}

for (let index = 0; index < 1500; index++) {
  let x = Math.random() * width;
  let y = Math.random() * (height / 2);
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x, y + 1);
  context.strokeStyle = "white";
  context.stroke();
}
