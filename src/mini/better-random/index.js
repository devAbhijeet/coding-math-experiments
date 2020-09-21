/**
 * Better Random
 *
 * Math.radom() returns a number between 0 and 1
 *
 *    0.34343
 * 0___________________________________________1
 * 0 is inclusive and 1 is exclusive
 * To get a number between 0 and 100 just multiply it by 100
 *    0.34343 * 100 = 34
 * 0___________________________________________1
 *
 * No get a number between min=25 and max=100 we do
 *
 *      min=25                              max=100
 * 0___________________________________________100
 * 25 + Math.radom() * 75 i.e, min + Math.random() * (max-min)
 *
 *
 * Now the above function returns 0.444 or 0.544
 * if it is greater than 0.5 it will be rounded to 1 if it is lower than 0.5 it will be rounded to 0
 *  Math.round(min + Math.random() * (max-min))
 *
 *  if Math.round is used...below are the probability
 *   25% for 0                75% for 1                25% for 2
 * 0____________0.499_____________________________1.5________________2
 *
 * by adding flooring and adding one Math.floor(min + Math.random() * (max-min +1))
 * we get a even distibution
 *      0-.999 give 0, 1 to 1.99 give 1
 * 0_____________________1______________________2
 *
 */

import "./styles.css";

const generateRadomInRange = (min, max) =>
  Math.round(min + Math.random() * (max - min));

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const draw = () => {
  context.clearRect(0, 0, width, height);

  for (let index = 0; index < 1000; index++) {
    context.beginPath();
    context.arc(
      generateRadomInRange(0, 0.33 * width),
      generateRadomInRange(0, height),
      generateRadomInRange(5, 10),
      0,
      Math.PI * 2,
      false
    );
    context.fillStyle = "red";
    context.fill();

    context.beginPath();
    context.arc(
      generateRadomInRange(width * 0.33, 0.66 * width),
      generateRadomInRange(0, height),
      generateRadomInRange(5, 10),
      0,
      Math.PI * 2,
      false
    );
    context.fillStyle = "green";
    context.fill();

    context.beginPath();
    context.arc(
      generateRadomInRange(0.66 * width, width),
      generateRadomInRange(0, height),
      generateRadomInRange(5, 10),
      0,
      Math.PI * 2,
      false
    );
    context.fillStyle = "blue";
    context.fill();
  }
};

draw();
