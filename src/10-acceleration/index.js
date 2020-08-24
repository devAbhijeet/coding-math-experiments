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
const factor = 0.1;

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

let ship = particle.create(width * 0.5, height * 0.5, 0, 0, 0, 0),
  angle = 0;

let render = () => {
  context.clearRect(0, 0, width, height);
  context.beginPath();

  ship.update();

  const shipX = ship.position.getX();
  const shipY = ship.position.getY();

  context.save();
  context.translate(shipX, shipY);
  context.rotate(angle);

  context.moveTo(80, 0);
  context.lineTo(-80, 0);
  context.moveTo(-80, 0);
  context.lineTo(-50, 35);
  context.moveTo(80, 0);
  context.lineTo(50, 35);
  context.lineTo(-50, 35);
  context.moveTo(0, -35);
  context.lineTo(30, -1);
  context.moveTo(-30, -1);
  context.lineTo(0, -35);
  context.strokeStyle = "white";
  context.stroke();

  context.restore();
  // context.arc(shipX, shipY, 10, 0, pie * 2, false);

  ship.position.setX(shipX > width ? 0 : shipX < 0 ? width : shipX);
  ship.position.setY(shipY > height ? 0 : shipY < 0 ? height : shipY);

  // context.fillStyle = "white";
  // context.fill();
  window.requestAnimationFrame(render);
};

let handleKeyEvent = (e) => {
  if (e) {
    const { type, keyCode } = e;
    const isKeyDown = type === "keydown" ? true : false;
    switch (keyCode) {
      case 38:
        ship.acceleration.setY(isKeyDown ? -factor : 0);
        break;
      case 40:
        ship.acceleration.setY(isKeyDown ? factor : 0);
        break;
      case 39:
        ship.acceleration.setX(isKeyDown ? factor : 0);
        break;
      case 37:
        ship.acceleration.setX(isKeyDown ? -factor : 0);
        break;
      default:
      //
    }
  }
};

document.body.addEventListener("keydown", handleKeyEvent);
document.body.addEventListener("keyup", handleKeyEvent);

window.requestAnimationFrame(render);
