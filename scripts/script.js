window.addEventListener("DOMContentLoaded", () => {
  const navs = document.querySelectorAll("nav li");

  navs.forEach(li => {
    li.addEventListener("click", () => {
      navs.forEach(el => el.classList.remove("nav-active"));

      li.classList.add("nav-active");
    });

    const cards = document.querySelectorAll(".card1");

    cards.forEach(card => {
      const lis = card.querySelectorAll("ul li");
      const button = card.querySelector("button");
      const svgs = card.querySelectorAll("svg, svg *");

      card.addEventListener("mouseenter", () => {
        // Animate list items
        lis.forEach(li => {
          li.style.transition = "color 0.3s ease";
          li.style.color = "#ffffff";
        });

        // Animate button
        if (button) {
          button.style.transition = "all 0.3s ease";
          button.style.backgroundColor = "#ffffff";
          button.style.color = "#01BA77";
          button.style.borderColor = "#01BA77";
        }
      });

      card.addEventListener("mouseleave", () => {
        // Reset list items
        lis.forEach(li => {
          li.style.color = "#334155";
        });

        // Reset button
        if (button) {
          button.style.backgroundColor = "#01BA77";
          button.style.color = "#ffffff";
          button.style.borderColor = "#01BA77";
        }
      });
    });
  });

  const activeLinks = document.querySelectorAll("#quick-links div a");
  activeLinks.forEach(activeLink => {
    activeLink.addEventListener("click", e => {
      activeLinks.forEach(li => {
        li.classList.remove("footer-active");
      });
      e.target.classList.add("footer-active");
    });
  });

  const divs = document.querySelectorAll(".border-divs div");

  divs.forEach(li => {
    li.addEventListener("click", () => {
      divs.forEach(el => el.classList.remove("border-b"));

      li.classList.add("border-b");
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  // Nav active toggle
  const navs = document.querySelectorAll("nav li");
  navs.forEach(li => {
    li.addEventListener("click", () => {
      navs.forEach(el => el.classList.remove("nav-active"));
      li.classList.add("nav-active");
    });
  });

  // Mobile menu
  const toggler = document.querySelector(".mobile-toggler");
  const menu = document.querySelector(".mobile-menu");
  const backdrop = document.querySelector(".menu-backdrop");
  const closeBtn = document.querySelector(".mobile-menu .close-btn");

  function openMenu() {
    menu.classList.add("active");
    backdrop.classList.add("active");
    menu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("active");
    backdrop.classList.remove("active");
    menu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    toggler.focus();
  }

  if (toggler && menu && backdrop && closeBtn) {
    toggler.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    backdrop.addEventListener("click", closeMenu);
  }
});

//carousel js

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const indicators = document.querySelectorAll(".carousel-indicators button");

let currentIndex = 0;
const totalSlides = slides.length;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  indicators.forEach((btn, idx) => {
    btn.classList.toggle("active", idx === currentIndex);
  });
}

indicators.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    currentIndex = idx;
    updateCarousel();
  });
});

// Auto-slide every 5 seconds
// setInterval(() => {
//   currentIndex = (currentIndex + 1) % totalSlides;
//   updateCarousel();
// }, 5000);

window.addEventListener("resize", updateCarousel);
updateCarousel();
