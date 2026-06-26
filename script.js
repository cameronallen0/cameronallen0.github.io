const images = [
  "images/alien.jpg",
  "images/zorp.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  index = (index + 1) % images.length;
  slide.style.opacity = 0;

  setTimeout(() => {
    slide.src = images[index];
    slide.style.opacity = 1;
  }, 300);
}, 3000);