document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".slideshow").forEach(slideshow => {

        const images = slideshow.dataset.images
            ?.split(",")
            .map(img => img.trim())
            .filter(Boolean);

        if (!images || images.length === 0) return;

        let current = 0;

        const img = document.createElement("img");
        img.src = images[current];

        slideshow.appendChild(img);

        function transitionSlide() {

            // start CRT effect
            slideshow.classList.add("crt-transition");

            // swap image at distortion peak
            setTimeout(() => {

                current = (current + 1) % images.length;
                img.src = images[current];

                // force repaint (prevents “no change” bug)
                img.style.opacity = "0.99";
                requestAnimationFrame(() => {
                    img.style.opacity = "1";
                });

            }, 650);

            // end CRT effect
            setTimeout(() => {

                slideshow.classList.remove("crt-transition");

            }, 1400);

        }

        setInterval(transitionSlide, 5000);

    });

});