document.addEventListener("DOMContentLoaded", () => {

  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach((box) => {

    const images = box.dataset.images?.split(",").map(s => s.trim());

    if (!images || images.length === 0) return;

    // create image element dynamically
    const img = document.createElement("img");
    img.src = images[0];
    box.appendChild(img);

    let index = 0;

    img.style.opacity = 1;
    img.style.transition = "opacity 0.8s ease-in-out";

    function nextSlide() {
      img.style.opacity = 0;

      setTimeout(() => {
        index = (index + 1) % images.length;
        img.src = images[index];
        img.style.opacity = 1;
      }, 800);
    }

    setInterval(nextSlide, 3000);
  });

});