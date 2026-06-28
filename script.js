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

/* ===========================
   MOBILE NAVBAR
=========================== */

const navbar = document.querySelector(".navbar");

if (navbar) {

    let scrollTimer;

    function handleMobileScroll() {

        // Only run on mobile
        if (window.innerWidth > 768) return;

        // Hide immediately
        navbar.classList.add("nav-hidden");

        // Reset timer every time the user scrolls
        clearTimeout(scrollTimer);

        // Show again after scrolling stops
        scrollTimer = setTimeout(() => {
            navbar.classList.remove("nav-hidden");
        }, 700);

    }

    window.addEventListener("scroll", handleMobileScroll);

}