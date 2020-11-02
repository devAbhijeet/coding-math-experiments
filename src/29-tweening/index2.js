/**
 * Type of tweening
 *
 * Linear Tweening (Similar to lerp function in util) where
 * (max-min) is the c
 * norm is t/d
 * min is b
 *
 * (max - min) * norm + min == c*t/d+b
 *
 */

import "./styles.css";
import { linearTween } from "./utils";

const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const ball = {
  x: 100,
  y: 100,
  alpha: 1
};

const tween = (object, props, duration, easingFunc, onProgress, onComplete) => {
  const starts = {};
  const changes = {};
  const startTime = new Date();

  for (let prop in props) {
    starts[prop] = object[prop];
    changes[prop] = props[prop] - starts[prop];
  }

  const update = () => {
    let time = new Date() - startTime;
    if (time < duration) {
      for (let prop in props) {
        object[prop] = easingFunc(time, starts[prop], changes[prop], duration);
      }
      onProgress();
      requestAnimationFrame(update);
    } else {
      time = duration;
      for (let prop in props) {
        object[prop] = easingFunc(time, starts[prop], changes[prop], duration);
      }
      onComplete();
    }
  };
  update();
};

const tweenBack = () => {
  tween(
    ball,
    { x: 100, y: 100, alpha: 1 },
    1000,
    linearTween,
    render,
    tweenAgain
  );
};

const tweenAgain = () => {
  tween(
    ball,
    { x: 700, y: 700, alpha: 0 },
    1000,
    linearTween,
    render,
    tweenBack
  );
};

const render = () => {
  context.clearRect(0, 0, width, height);
  context.globalAlpha = ball.alpha;
  context.beginPath();
  context.arc(ball.x, ball.y, 20, 0, Math.PI * 2, false);
  context.fillStyle = "#fff";
  context.fill();
};

tween(ball, { x: 700, y: 700, alpha: 0 }, 1000, linearTween, render, tweenBack);
