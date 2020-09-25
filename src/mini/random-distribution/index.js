/**
 * Lets say we generate a 2 radom numbers between 0 and 100
 * If we get both number on lower side the average will be lower
 * If we get both number on higher side the average will be higher
 *
 * But
 *
 * If we get 1st number on higher side and 2nd on lower,
 * the average is mid.
 * If we get 1st number on lower side and 2nd on higher,
 * the average is mid
 * If we get both number on mid range, the average is again mid.
 *
 * That mean's the probablity of getting a range as mid is higher than probability of
 * getting a range on lower or higher side since mid can resultant from 3 senarious above and the,
 * rest only from one senarios
 *
 * If this is plotted over a graph repetedly the resultant curve is a bell curve
 *
 * By averagin 2 numbers the result is not exactly close to bell instead it is close to a pyramid
 * to achieve bell curve we have to average more than 2 numbers
 */

import "./styles.css";
import { generateRadomInRange } from "./utils";
let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const bars = 250;
const items = Array.from({ length: bars }, (v, i) => 0);

const addItem = () => {
  const num1 = generateRadomInRange(0, bars);
  const num2 = generateRadomInRange(0, bars);
  const average = Math.floor((num1 + num2) / 2);
  items[average]++;
};

const draw = () => {
  const barWidth = width / items.length;
  items.forEach((item, index) => {
    const barHeight = item * -10;
    context.fillStyle = "crimson";
    context.fillRect(barWidth * index, height, barWidth, barHeight);
  });
};

const render = () => {
  addItem();
  draw();
  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
