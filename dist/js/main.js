const hamburger = document.querySelector(".humberger-menu");
const hamburgerIcon = document.querySelector(".humberger-menu img");
const menu = document.querySelector(".nav__menu");

hamburgerIcon.addEventListener("click", mobileMenu);

function mobileMenu() {
  menu.classList.toggle("show");
}
