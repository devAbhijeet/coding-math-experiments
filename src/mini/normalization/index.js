/**
 *
 * Normalization is taking a range of values and converting them,
 * in a range of 0 to 1.
 * Eg:- if lets say we have min as 0 and max as 33, and want to find out,
 * where does 23 falls in that range such that the value can be spread
 * over a range of 0 to 1
 *
 * 0_________________23____________33
 * 0                               1
 * so 23/33 = 0.69696969697
 * but if we reduce the min on the scale from 0 to 5 such that now are
 * range starts from 5 to 33, where does 23 falls in the new range
 * 0___5_____________23____________33
 * 0                                1
 * answer is 23-5/33-5, i.e, 18/28 =  0.64285714285
 *
 * to summarise normalization = (value - min)/(max - min)
 *
 * logs()
 * console.log("min and  max ", min, max);
 * console.log("Normalized value for ", value, " is  ", normalized);
 * console.log("heigth is ", height);
 * console.log("-height * normalized ", -height * normalized);
 * console.log("height * normalized ", height * normalized);
 * console.log("height - height * normalized ", height - height * normalized);
 * console.log("width / datum.length ", width / datum.length);
 * console.log("width / datum.length *  i ", (width / datum.length) * i);
 */

import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const datum = [];
const maxDatumSize = 30;
const normalize = (value, min, max) => (value - min) / (max - min);

const generateRangeValue = () => {
  let rangeVal = Math.floor(Math.random() * 100) + 1;
  while (datum.indexOf(rangeVal) > -1) {
    rangeVal = Math.floor(Math.random() * 100) + 1;
  }
  return rangeVal;
};

const populateDatum = () => {
  const data = generateRangeValue();
  if (datum.length > maxDatumSize) {
    datum.shift();
    datum.push(data);
  } else {
    datum.push(data);
  }
};

let drawGraph = () => {
  const min = Math.min.apply(null, datum);
  const max = Math.max.apply(null, datum);
  context.beginPath();
  for (let i = 0; i < datum.length; i++) {
    const value = datum[i],
      normalized = normalize(value, min, max),
      x = (width / datum.length - 1) * i,
      y = height - height * normalized;

    if (i === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
    // context.beginPath();
    context.fillStyle = "transparent";
    context.arc(x, y, 3, 0, Math.PI * 2, false);
    context.fill();
    //logs()
  }
  context.strokeStyle = "white";
  context.stroke();
};

let clearCanvas = () => {
  context.clearRect(0, 0, width, height);
};

let draw = () => {
  populateDatum();
  clearCanvas();
  drawGraph();
  setTimeout(draw, 1000);
};

setTimeout(draw, 1000);
