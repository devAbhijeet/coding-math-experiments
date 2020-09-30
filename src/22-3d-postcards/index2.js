/**
 * 3D in fact mean 3 dimensions. In 2D we only deal with x and y coordinate.
 * In 3D we deal with x, y and z coordinate. The z axis stands for depth.
 *
 * The camera or human eyes determine 3D based on a simple perspective clue.
 * The clus is how far the object they are looking at is.
 *
 * The clues that gives us the perception of 3D are.
 * position, size, layers, aerial perspective.
 *
 * One of them is convergence, like a railway track.
 * when we look at railway track from a distance it seems to vanish into a single point.
 * Also known as vanishing point.
 *
 * Let say there's a camera or eye, and there's a image film or sensor or retina.
 * Then there's a lens or apereture. The lens is where the light comes in.
 *
 * Lets say there's some object tree. The ligt from the tree comes though the lens and makes
 * an impression on the image film or retina. The close the object the larger the image.
 *
 * the image is alos rotated.
 *
 * It seems that the size of the image is a function of distance. But its actually the funcitons
 * of distance of aperture to the image surface. That distance is known as focal length (fl).
 *
 * Consider the aperture is at position 0 at the z axis and the object is out
 * at posiiton z, the formuala for perspective is
 *
 * perspective = fl/(fl+z)
 *
 * Let's say fl is @ 300. and the object is @ z 300
 * perspective = 300(300+300) = 0.5
 *
 * Lets say the object in this case is square of 100px,
 * we have to scale this object with the above perspective to simualte it being @ that distance.
 *
 * If we move @ 600 at the z axis the new perspective will be.
 * perspective = 300(300+600) = 0.333
 *
 * SO essentially what we are doing is calvulating the perspective using the above formula.
 * And then scaling the target object that we are looking @ from our eyes or camera to sinulate it being there.
 *
 * So now we know how to scale it. How do we find where to position it.
 * An objet has x and y axis and the vanishing point is @ x and y @ 0.
 *
 * we will translate the canvas 0,0 from top left to center so that the vanishing point is
 * shifted to center.
 *
 * Let' say we have an object at 300, 400 x and y coordinate.
 * we know the perspective @ 0.5
 * we multiply the perspective with x and y value to get screen x and y.
 *
 *
 *
 */

import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const generateRadomInRange = (min, max) =>
  Math.round(min + Math.random() * (max - min));

const fl = 300;
const shapes = [];
const numShapes = 100;

for (let i = 0; i < numShapes; i++) {
  shapes[i] = {
    x: generateRadomInRange(-1000, 1000),
    y: generateRadomInRange(-1000, 1000),
    z: generateRadomInRange(0, 5000),
    //chars
    char: String.fromCharCode(generateRadomInRange(65, 91))
  };
}

context.translate(width / 2, height / 2);
//chars
context.font = "200px Arial";

const render = () => {
  context.clearRect(-width / 2, -height / 2, width, height);

  for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    const perspective = fl / (fl + shape.z);
    const scaleObjectX = shape.x * perspective;
    const scaleObjectY = shape.y * perspective;
    context.save();
    context.translate(scaleObjectX, scaleObjectY);
    context.scale(perspective, perspective);
    context.fillStyle = "#fff";

    //Square
    // context.fillRect(-100, -100, 200, 200);

    //Circle
    // context.beginPath();
    // context.arc(0, 0, 100, 0, Math.PI * 2, false);
    // context.fill();

    //Chars
    context.fillText(shape.char, -100, -100);

    context.restore();

    shape.z -= 5;
    if (shape.z < 0) {
      shape.z = 5000;
    }
  }

  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
