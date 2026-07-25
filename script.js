document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       MOBILE MENU
    =========================== */

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        menuButton.textContent =
            navLinks.classList.contains("open")
                ? "[ MENU ▴ ]"
                : "[ MENU ▾ ]";

    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");
            menuButton.textContent = "[ MENU ▾ ]";

        });

    });

}

    /* ===========================
       SLIDESHOW
    =========================== */

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

            // Start CRT transition
            slideshow.classList.add("crt-transition");

            // Swap image during the distortion
            setTimeout(() => {

                current = (current + 1) % images.length;

                img.src = images[current];

            }, 650);

            // End transition
            setTimeout(() => {

                slideshow.classList.remove("crt-transition");

            }, 1400);

        }

        // Change image every 5 seconds
        setInterval(transitionSlide, 5000);

    });

});