document.addEventListener("DOMContentLoaded", () => {

  /* =========================
      BOOT + TYPING SYSTEM
  ========================== */

  const container = document.querySelector(".typing-area");
  const elements = container.querySelectorAll("h1, h2, p, a");

  const typingSpeed = 15;
  const bootDelay = 1200;

  let index = 0;

  // store original text + clear screen
  elements.forEach(el => {
    el.dataset.text = el.textContent;
    el.textContent = "";
  });

  function typeElement(el, text, callback) {
    let i = 0;
    el.textContent = "";

    function typeChar() {
      if (i < text.length) {
        el.textContent += text[i];
        i++;
        setTimeout(typeChar, typingSpeed);
      } else {
        callback?.();
      }
    }

    typeChar();
  }

  function nextTyping() {
    if (index >= elements.length) return;

    const el = elements[index];
    const text = el.dataset.text;

    typeElement(el, text, () => {
      index++;
      nextTyping();
    });
  }

  setTimeout(() => {
    nextTyping();
  }, bootDelay);


  /* =========================
      SLIDESHOW SYSTEM
  ========================== */

  const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg"
  ];

  const slide = document.getElementById("slide");

  if (slide) {
    let imgIndex = 0;

    // ensure smooth fade support
    slide.style.opacity = 1;
    slide.style.transition = "opacity 0.8s ease-in-out";

    function changeSlide() {
      // fade out
      slide.style.opacity = 0;

      setTimeout(() => {
        imgIndex = (imgIndex + 1) % images.length;
        slide.src = images[imgIndex];

        // fade in
        slide.style.opacity = 1;
      }, 800);
    }

    setInterval(changeSlide, 3000);
  }

});