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
Gravity vector has a length and angle

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

let draw = (color, x, y, radius) => {
  context.beginPath();
  context.fillStyle = color;
  context.arc(x, y, radius, 0, PI * 2, false);
  context.fill();
};

let render = () => {
  context.clearRect(0, 0, width, height);
  mercury.update(sun);
  venus.update(sun);
  earth.update(sun);
  mars.update(sun);
  jupiter.update(sun);
  saturn.update(sun);
  uranus.update(sun);
  neptune.update(sun);

  draw("#ffff00", sun.position.getX(), sun.position.getY(), 40); //Sun
  draw("gray", mercury.position.getX(), mercury.position.getY(), 5); //Mercury
  draw("#FFF3B8", venus.position.getX(), venus.position.getY(), 5); //Venus
  draw("#0000ff", earth.position.getX(), earth.position.getY(), 7); //Earth
  draw("#A52B2A", mars.position.getX(), mars.position.getY(), 4); //Mars
  draw("#FF9D46", jupiter.position.getX(), jupiter.position.getY(), 16); //Jupiter
  draw("#FBD777", saturn.position.getX(), saturn.position.getY(), 12); //Saturn
  draw("#AFEDEE", uranus.position.getX(), uranus.position.getY(), 9); //Uranus
  draw("#8ACFF0", neptune.position.getX(), neptune.position.getY(), 9); //Neptune

  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
