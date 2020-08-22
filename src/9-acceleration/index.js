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

Difference between speed and velocity and acceleration
speed in just one component of velocity other component is direction and heading
speed says this object is moving so fast
velocity says this object is moving so fast and in that direction
speed = d/dt, change in distance over time
velocity = (d/dt), change in speed overtime
acceleration = ((d/dt)/dt), change in velocity overtime

if positon vector is at 0, 0
if velocity vector = 1 that means next position will be 2, 3, 4... so on
however since acceleration is change in velocity overtime
if acceleration vector is 1 that mean now velocity vectory wiil be 1, 2, 3, and 4 for each frame,
resulting in postion vector to be 0, 1, 3, 6, 10, 15... so on 

The method of adding acceleration to velocity and velocity to postion is know as,
euler method.
*/

import "./styles.css";
import particle from "./particle";

const pie = Math.PI;

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

// let p = particle.create(0, height, 10, -pie / 2, 0.1, 0.1);

let particles = Array.from({ length: 1000 }, (v, i) =>
  particle.create(
    width / 2,
    height / 3,
    Math.random() * 5 + 2,
    Math.random() * pie * 2,
    0,
    0.1
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
