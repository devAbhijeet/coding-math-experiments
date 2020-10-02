import "./styles.css";
import img0 from "./postcard0.jpg";
import img1 from "./postcard1.jpg";
import img2 from "./postcard2.jpg";
import img3 from "./postcard3.jpg";
import img4 from "./postcard4.jpg";
import img5 from "./postcard5.jpg";
import img6 from "./postcard6.jpg";

const imgMap = {
  0: img0,
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6
};

let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

const generateRadomInRange = (min, max) =>
  Math.round(min + Math.random() * (max - min));

const fl = 300;
const cards = [];
const numCards = 21;

for (let i = 0; i < numCards; i++) {
  const card = {
    x: generateRadomInRange(-1000, 1000),
    y: generateRadomInRange(-1000, 1000),
    z: generateRadomInRange(0, 5000),
    img: document.createElement("img")
  };
  card.img.src = imgMap[i % 7];
  cards.push(card);
}

context.translate(width / 2, height / 2);

const render = () => {
  cards.sort((a, b) => b.z - a.z);
  context.clearRect(-width / 2, -height / 2, width, height);
  for (let i = 0; i < numCards; i++) {
    const card = cards[i];
    const cardX = card.x;
    const cardY = card.y;
    const perspective = fl / (fl + card.z);
    context.save();
    context.scale(perspective, perspective);
    context.translate(cardX, cardY);

    context.translate(-card.img.width / 2, -card.img.height / 2);
    context.drawImage(card.img, 0, 0);
    context.restore();
    card.z -= 5;
    if (card.z < 0) {
      card.z = 5000;
    }
  }
  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);
