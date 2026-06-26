document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".typing-area");
  if (!container) return;

  const elements = Array.from(container.querySelectorAll("h1, h2, p, a, .slideshow"));

  const typingSpeed = 15;
  const bootDelay = 1200;

  let index = 0;

  function typeText(el, text, done) {
    let i = 0;
    el.textContent = "";

    function step() {
      if (i < text.length) {
        el.textContent += text[i++];
        setTimeout(step, typingSpeed);
      } else {
        done?.();
      }
    }

    step();
  }

  function showSlideshow(el, done) {
    // reveal slideshow BEFORE typing continues
    el.classList.remove("hidden");

    const img = el.querySelector("img");

    const images = [
      "images/alien.jpg",
      "images/zorp.jpg"
    ];

    let i = 0;

    function startSlideshow() {
      setInterval(() => {
        img.style.opacity = 0;

        setTimeout(() => {
          i = (i + 1) % images.length;
          img.src = images[i];
          img.style.opacity = 1;
        }, 800);

      }, 3000);
    }

    startSlideshow();
    done?.();
  }

  function next() {
    if (index >= elements.length) return;

    const el = elements[index];

    // 🧠 SPECIAL CASE: slideshow block
    if (el.classList.contains("slideshow")) {
      showSlideshow(el, () => {
        index++;
        next();
      });
      return;
    }

    const text = el.dataset.text || el.textContent;

    typeText(el, text, () => {
      index++;
      next();
    });
  }

  // prepare
  elements.forEach(el => {
    if (!el.classList.contains("slideshow")) {
      el.dataset.text = el.textContent;
      el.textContent = "";
    }
  });

  setTimeout(next, bootDelay);

});