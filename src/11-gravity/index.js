/*

Gravity is the force felt by us as the inhabitant of this planet. Gravity vector acts on each object pulling the object,
towards the center of the earth.

gravoty = G.M/Math.square(r)
G =  gravotational construct
M = Mass of the object or the planet
R = distance between to object

The above formula can also be written as gravoty = M/Math.square(r), since G is neglegible.

A planet has a position vector and mass, It also has a velocity vecotor.
The planet is pulled towards the center of the earth by the gravity vecotor that's added to the velocity veecotor.
Gravity vector has a length and angles

To find angle of the gravity vectory we need to know to calculate dx and dy between,
planet and sun, using arc tangent, we can calculate the angle between two obects.

To find the magnitude i.e, length using the above formulae we know that,
*/

import "./styles.css";
import particle from "./particle";

const PI = Math.PI;

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const centerX = width * 0.5,
  centerY = height * 0.5;

let sun = particle.create(centerX, centerY, 0, 0, 0, 0),
  mercury = particle.create(centerX + 100, centerY, 14, -PI / 2, 0, 0),
  venus = particle.create(centerX + 110, centerY, 14, -PI / 2, 0, 0),
  earth = particle.create(centerX + 210, centerY, 10, -PI / 2, 0, 0),
  mars = particle.create(centerX + 225, centerY, 10, -PI / 2, 0, 0),
  jupiter = particle.create(centerX + 280, centerY - 10, 9, -PI / 2, 0, 0),
  saturn = particle.create(centerX + 320, centerY - 10, 9, -PI / 2, 0, 0),
  uranus = particle.create(centerX + 380, centerY - 10, 8, -PI / 2, 0, 0),
  neptune = particle.create(centerX + 400, centerY - 10, 8, -PI / 2, 0, 0);

sun.mass = 21000;
mercury.mass = 1.5;
venus.mass = 2.6;
earth.mass = 3;
mars.mass = 1.9;
jupiter.mass = 44;
saturn.mass = 36;
uranus.mass = 16;
neptune.mass = 14.5;

let drawSolarSystem = (color, x, y, radius) => {
  context.beginPath();
  context.fillStyle = color;
  context.arc(x, y, radius, 0, PI * 2, false);
  context.fill();
};

let particleX = (object) => object.position.getX();
let particleY = (object) => object.position.getY();

let drawStars = () => {
  for (let index = 0; index < 1500; index++) {
    let x = Math.random() * width;
    let y = Math.random() * height;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y + 1);
    context.strokeStyle = "white";
    context.stroke();
  }
};

let render = () => {
  context.clearRect(0, 0, width, height);
  drawStars();
  mercury.update(sun);
  venus.update(sun);
  earth.update(sun);
  mars.update(sun);
  jupiter.update(sun);
  saturn.update(sun);
  uranus.update(sun);
  neptune.update(sun);

  drawSolarSystem("#ffff00", particleX(sun), particleY(sun), 40); //Sun
  drawSolarSystem("gray", particleX(mercury), particleY(mercury), 5); //Mercury
  drawSolarSystem("#FFF3B8", particleX(venus), particleY(venus), 5); //Venus
  drawSolarSystem("#0000ff", particleX(earth), particleY(earth), 7); //Earth
  drawSolarSystem("#A52B2A", particleX(mars), particleY(mars), 4); //Mars
  drawSolarSystem("#FF9D46", particleX(jupiter), particleY(jupiter), 16); //Jupiter
  drawSolarSystem("#FBD777", particleX(saturn), particleY(saturn), 12); //Saturn
  drawSolarSystem("#AFEDEE", particleX(uranus), particleY(uranus), 9); //Uranus
  drawSolarSystem("#8ACFF0", particleX(neptune), particleY(neptune), 9); //Neptune

  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
