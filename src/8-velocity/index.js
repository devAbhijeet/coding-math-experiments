/*                      /|
                      /  |
                    /    |
      Hypotenous  /      | opposite
                /_ _ _ a |
                 adjacent

                   /
                 /
               /
             /
           /
Vector represents a magnitude and direction. it has a tail and head

For a Direction vector
direction = angle
magnitude = length

For a Velocity vector
direction = angle
magnitude = speed

x = mCos(a)
y = mSin(a)

Vector can be added, subtracted, multiplied.

Difference between speed and velocity
speed in just one component of velocity other component is direction and heading
speed says this object is moving so fast
velocity says this object is moving so fast and in that direction

speed = d/dt
*/

import "./styles.css";
// import vector from "./vector";
import particle from "./particle";

const pie = Math.PI;

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

// let position = vector.create(100, 100),
//   velocity = vector.create(0, 0);

// velocity.setLength(3); //3 pixels per frame
// velocity.setAngle(Math.PI / 6);

let particles = Array.from({ length: 1000 }, (v, i) =>
  particle.create(
    width * 0.5,
    height * 0.5,
    Math.random() * 4 + 1,
    Math.random() * pie * 2
  )
);

let render = () => {
  context.clearRect(0, 0, width, height);
  particles.forEach((p) => {
    p.update();
    context.beginPath();
    context.arc(p.position.getX(), p.position.getY(), 1, 0, Math.PI * 2, false);
    context.fillStyle = "white";
    context.fill();
  });
  window.requestAnimationFrame(render);
};
window.requestAnimationFrame(render);
