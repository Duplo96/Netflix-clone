const nav = document.querySelectorAll(".navbar");
window.addEventListener("scroll", () => {
  if (window.scroll > 56) {
    nav.classList.add("navbar-scrolled");
  } else if (window.scrollY < 56) {
    nav.classList.remove("navbar-scrolled");
  }
});
console.log(window);
