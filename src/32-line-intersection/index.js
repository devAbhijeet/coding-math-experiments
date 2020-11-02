/**
 * Line = An infinite Line headed in both direction.
 * Line segment = Line passing through 2 points.
 * Ray = Line headed in a particular direction.
 *
 * A line is represented by an quation y = mx + b
 * where m is the slope and b is the y intercept
 * y is the poin at which line crosses the y axis
 * slope is the ratio of rate of change of y to rate of change of x coordinate
 * m = y2-y1/x2-x1
 */

import "./styles.css";

const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);
