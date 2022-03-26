// change navbar color on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// NAV MENU

const menu = document.querySelector(".nav-menu");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");

openMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  closeMenu.style.display = "inline-block";
  openMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
  closeMenu.style.display = "none";
  openMenu.style.display = "inline-block";
});

document.querySelectorAll(".menu-link").forEach((n) =>
  n.addEventListener("click", () => {
    menu.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "inline-block";
  })
);
