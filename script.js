document.addEventListener("DOMContentLoaded", () => {

  const slide = document.getElementById("slide");

  if (!slide) return;

  const images = [
    "images/alien.jpg",
    "images/zorp.jpg"
  ];

  let index = 0;

  function changeSlide() {
    slide.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % images.length;
      slide.src = images[index];
      slide.style.opacity = 1;
    }, 800);
  }

  setInterval(changeSlide, 3000);

});