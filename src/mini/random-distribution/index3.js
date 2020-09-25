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
import { generateRadomInRange, randomDist } from "./utils";
let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const particles = 1;
const iterations = 5;

const draw = () => {
  for (let i = 0; i < particles; i++) {
    const x = randomDist(0, width, iterations);
    const y = randomDist(0, height, iterations);

    context.fillStyle = "#fff";
    context.fillRect(x, y, 1, 1);
  }
  window.requestAnimationFrame(draw);
};

window.requestAnimationFrame(draw);
