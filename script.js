const images = [
  "images/alien.jpg",
  "images/zorp.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

function changeImage() {
  // fade out
  slide.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];

    // fade in
    slide.style.opacity = 1;
  }, 800); // must match CSS transition time
}

setInterval(changeImage, 3000);