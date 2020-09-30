/**
 * A bitmap is a rectangular grid of values that are used to set colors on the rectangular
 * portion on the screen.
 *
 * The top of bitamp is 0,0 and the bottom is width-1, height-1
 * Every pixel is addresible by x and y coordinate.
 *
 * To detect collision in bitmap we take a empty transparent bitmap image and draw shape in it.
 * All the pixels in bitamp will have alpha channel value of 0 expect where the image is drawn.
 *
 *
 */
import "./styles.css";
import particle from "./particle";
const canvas = document.getElementById("canvas");
const target = document.getElementsByClassName("target")[0];
const context = canvas.getContext("2d");
const targetContext = target.getContext("2d");
target.width = window.innerWidth;
target.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const width = window.innerWidth;
const height = window.innerHeight;

canvas.classList.add("bitmap");
target.classList.add("bitmap");
target.classList.add("show");

const p = particle.create(100, height / 2, 0.1, 0);
targetContext.beginPath();
targetContext.arc(width / 2, height / 2, 200, 0, Math.PI * 2, false);
targetContext.fillStyle = "red";
targetContext.fill();

export const generateRadomInRange = (min, max) =>
  Math.round(min + Math.random() * (max - min));

const resetParticle = () => {
  p.x = 0;
  p.y = height / 2;
  p.setHeading(generateRadomInRange(-0.1, 0.1));
};

const render = () => {
  context.clearRect(0, 0, width, height);

  p.update();
  context.beginPath();
  context.arc(p.x, p.y, 4, 0, Math.PI * 2, false);
  context.fillStyle = "red";
  context.fill();

  const imageData = targetContext.getImageData(p.x, p.y, 1, 1);
  if (imageData.data[3] > 0) {
    targetContext.globalCompositeOperation = "destination-out";
    targetContext.beginPath();
    targetContext.arc(p.x, p.y, 20, 0, Math.PI * 2, false);
    targetContext.fill();
    resetParticle();
  } else if (p.x > width) {
    resetParticle();
  }

  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
