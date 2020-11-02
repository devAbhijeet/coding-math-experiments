/**
 * A quadratci equation is a equation with highest power as 2.
 * ax(2) + bx(1) + c.x(0) = ax(2) + bx + c
 *
 * variable c shifts parabola on y axis
 * variable b shifts on x axis
 *
 */

import "./styles.css";
import { linearTween } from "./utils";

const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);
