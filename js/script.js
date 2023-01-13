"use strict";

const logo = document.querySelector(".logo--text");

logo.addEventListener("click", () => {
  window.location.href = "/index.html";
});

const btnScrollTo = document.querySelector(".btn--scroll-to");
const btnHome = document.querySelector(".btn--home");
const polygon = document.querySelector(".hero--polygon-top");
const section1 = document.querySelector("#section--1");
const section0 = document.querySelector(".hero__section");
const usluga = document.querySelector(".usluga-opis--container");
const services = document.querySelector(".all-services");
if (btnScrollTo) {
  btnScrollTo.addEventListener("click", (e) => {
    const s1coords = section1.getBoundingClientRect();

    window.scrollTo({
      left: s1coords.left + window.scrollX,
      top: s1coords.top + window.scrollY,
      behavior: "smooth",
    });
  });
}
if (btnHome && section1) {
  btnHome.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  });
}
if (section1) {
  const initialCoords = section1.getBoundingClientRect();
  const header = document.querySelector(".header");

  window.addEventListener("scroll", (e) => {
    if (window.scrollY + 10 > initialCoords.top) {
      header.classList.add("sticky");
      section0.classList.add("section--sticky");
    } else {
      header.classList.remove("sticky");
      section0.classList.remove("section--sticky");
    }
  });

  window.addEventListener("click", (e) => {
    console.log(e.target);
  });
}

if (polygon) {
  const initialCoords = polygon.getBoundingClientRect();
  const header = document.querySelector(".header");

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > initialCoords.top) {
      header.classList.add("sticky");
      polygon.classList.add("section--sticky");
    } else {
      header.classList.remove("sticky");
      polygon.classList.remove("section--sticky");
    }
  });
}
// if (usluga) {
//   const initialCoords = usluga.getBoundingClientRect();
//   const header = document.querySelector(".header");

//   window.addEventListener("scroll", (e) => {
//     if (window.scrollY > initialCoords.top) {
//       header.classList.add("sticky");
//       usluga.classList.add("section--sticky");
//     } else {
//       header.classList.remove("sticky");
//       usluga.classList.remove("section--sticky");
//     }
//   });
// }
if (services) {
  const initialCoords = services.getBoundingClientRect();
  const header = document.querySelector(".header");

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > initialCoords.top) {
      header.classList.add("sticky");
      services.classList.add("section--sticky");
    } else {
      header.classList.remove("sticky");
      services.classList.remove("section--sticky");
    }
  });
}
//FAQ
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

//Kontakt
const contactBtn = document.querySelector(".btn--submit-contact");
if (contactBtn) console.log("JEST");

//Mobile nav
const btnNavEl = document.querySelector(".nav-mobile");
const header = document.querySelector(".header__navigation");

const menuOpen = document.querySelector(".nav-mobile__icon");
const menuClose = document.querySelector(".nav-mobile__close");

menuClose.style.display = "none";
menuOpen.style.display = "block";

btnNavEl.addEventListener("click", function () {
  header.classList.toggle("open--nav");
  if (menuOpen.style.display === "block") {
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    console.log("menuOpen block -> none");
  } else {
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
    console.log("menuClose block -> none");
  }
  console.log(menuClose.style.display);
  console.log(menuOpen.style.display);
  if (header.classList.contains("open--nav")) {
    header.addEventListener("wheel", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
    header.addEventListener("touchmove", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
  if (!header.classList.contains("open--nav")) {
    header.removeEventListener("wheel", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
    header.removeEventListener("touchmove", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
});
