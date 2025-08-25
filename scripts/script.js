window.addEventListener("DOMContentLoaded", () => {
  const navs = document.querySelectorAll("nav li");

  navs.forEach((li) => {
    li.addEventListener("click", () => {
      navs.forEach((el) => el.classList.remove("nav-active"));

      li.classList.add("nav-active");
    });
  });
});



window.addEventListener("DOMContentLoaded", () => {
  // Nav active toggle
  const navs = document.querySelectorAll("nav li");
  navs.forEach((li) => {
    li.addEventListener("click", () => {
      navs.forEach((el) => el.classList.remove("nav-active"));
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
