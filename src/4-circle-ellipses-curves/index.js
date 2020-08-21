/*                      /|
                      /  |
                    /    |
           radius /      | y
                /_ _ _ a |
                    x

sin(A) = y/radius
cos(A) = x/radius
tan(A) = y/x

Multiplying both sides by radius we get
radius*sin(A) = radius*y/radius = y
radius*cos(A) = radius*x/radius
x = radius*cos(A)
y = radius*sin(A)
*/
import "./styles.css";

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

let centerX = width * 0.5,
  centerY = height * 0.5,
  radius = 200,
  angle = 0,
  angleSpeed = 0.09,
  ellipseXRadiusVertical = 100,
  ellipseYRadiusVertical = 300,
  ellipseAngleVertical = 0,
  ellipseAngleSpeedVertical = 0.09,
  ellipseXRadiusHorizontal = 300,
  ellipseYRadiusHorizontal = 100,
  ellipseAngleHorizontal = 0,
  ellipseAngleSpeedHorizontal = 0.09,
  lissajousCurveXRadius = 200,
  lissajousCurveYRadius = 400,
  lissajousCurveXAngle = 0,
  lissajousCurveYAngle = 0,
  lissajousCurveXAngleSpeed = 0.1,
  lissajousCurveYAngleSpeed = 0.131;

let draw = () => {
  let x = centerX + Math.cos(angle) * radius;
  let y = centerY + Math.sin(angle) * radius;

  let ellipseXVertical =
    centerX + Math.cos(ellipseAngleVertical) * ellipseXRadiusVertical;
  let ellipseYVertical =
    centerY + Math.sin(ellipseAngleVertical) * ellipseYRadiusVertical;

  let ellipseXHorizontal =
    centerX + Math.cos(ellipseAngleHorizontal) * ellipseXRadiusHorizontal;
  let ellipseYHorizontal =
    centerY + Math.sin(ellipseAngleHorizontal) * ellipseYRadiusHorizontal;

  let lissajousCurveX =
    centerX + Math.cos(lissajousCurveXAngle) * lissajousCurveXRadius;
  let lissajousCurveY =
    centerY + Math.sin(lissajousCurveYAngle) * lissajousCurveYRadius;

  context.clearRect(0, 0, width, height);
  context.beginPath();
  context.arc(x, y, 10, 0, Math.PI * 2, false);
  context.fillStyle = "white";
  context.fill();

  context.beginPath();
  context.arc(ellipseXVertical, ellipseYVertical, 10, 0, Math.PI * 2, false);
  context.fillStyle = "white";
  context.fill();

  context.beginPath();
  context.arc(
    ellipseXHorizontal,
    ellipseYHorizontal,
    10,
    0,
    Math.PI * 2,
    false
  );
  context.fillStyle = "white";
  context.fill();

  context.beginPath();
  context.arc(lissajousCurveX, lissajousCurveY, 10, 0, Math.PI * 2, false);
  context.fillStyle = "white";
  context.fill();

  angle += angleSpeed;
  ellipseAngleVertical += ellipseAngleSpeedVertical;
  ellipseAngleHorizontal += ellipseAngleSpeedHorizontal;
  lissajousCurveXAngle += lissajousCurveXAngleSpeed;
  lissajousCurveYAngle += lissajousCurveYAngleSpeed;
  window.requestAnimationFrame(draw);
};

window.requestAnimationFrame(draw);
