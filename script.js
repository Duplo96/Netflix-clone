const cards = [
  { image: "./assets/imgs/movies/1.png" },
  { image: "./assets/imgs/movies/2.png" },
  { image: "./assets/imgs/movies/3.png" },
  { image: "./assets/imgs/movies/4.png" },
  { image: "./assets/imgs/movies/5.png" },
  { image: "./assets/imgs/movies/6.png" },
  { image: "./assets/imgs/movies/7.png" },
  { image: "./assets/imgs/movies/8.png" },
  { image: "./assets/imgs/movies/9.png" },
  { image: "./assets/imgs/movies/10.png" },
  { image: "./assets/imgs/movies/11.png" },
  { image: "./assets/imgs/movies/12.png" },
  { image: "./assets/imgs/movies/13.png" },
  { image: "./assets/imgs/movies/14.png" },
  { image: "./assets/imgs/movies/15.png" },
  { image: "./assets/imgs/movies/16.png" },
  { image: "./assets/imgs/movies/17.png" },
  { image: "./assets/imgs/movies/18.png" },
];

// SCRIPT CAROSELLO

// SCRIPT DIV

function fadeInElement(element) {
  element.style.opacity = "1";
  element.style.transform = "translateX(0)";
}

function fadeOutElement(element) {
  element.style.opacity = "0";
  element.style.transform = "translateX(-50px)";
}

function checkScroll() {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    // torna info sull'elemento
    const rect = carousel.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top >= 0 && rect.top <= windowHeight) {
      fadeInElement(carousel);
    } else {
      fadeOutElement(carousel);
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);
window.addEventListener("load", checkScroll);

// SCRIPT NAVBAR
const nav = document.querySelector("#nav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    nav.classList.add("navbar-scrolled");
  } else if (window.scrollY < 100) {
    nav.classList.remove("navbar-scrolled");
  }
});
