/* =========================
FILE: script.js
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    header.classList.add("active");
  }

  else{
    header.classList.remove("active");
  }

});

/* MOBILE MENU */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  if(navLinks.classList.contains("active")){
    menuBtn.innerHTML = `<i class="ri-close-line"></i>`;
  }

  else{
    menuBtn.innerHTML = `<i class="ri-menu-3-line"></i>`;
  }

});

/* SCROLL REVEAL EFFECT */

const cards = document.querySelectorAll(
  ".feature-card, .collection-card"
);

window.addEventListener("scroll", reveal);

function reveal(){

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

}

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = ".8s";

});

reveal();

/* ===============================
APPLE STYLE SMOOTH CURSOR
================================= */

const cursor = document.querySelector(".apple-cursor");
const outline = document.querySelector(".apple-cursor-outline");

/* Smooth Cursor Variables */

let mouseX = 0;
let mouseY = 0;

let outlineX = 0;
let outlineY = 0;

/* Mouse Position */

window.addEventListener("mousemove",(e)=>{

  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";

});

/* Smooth Follow Animation */

function animate(){

  outlineX += (mouseX - outlineX) * 0.12;
  outlineY += (mouseY - outlineY) * 0.12;

  outline.style.left = outlineX + "px";
  outline.style.top = outlineY + "px";

  requestAnimationFrame(animate);

}

animate();

/* Hover Elements */

const hoverElements = document.querySelectorAll(
  "a, button, .feature-card, .collection-card, .collection-overlay"
);

hoverElements.forEach((item)=>{

  item.addEventListener("mouseenter",()=>{

    cursor.classList.add("active");
    outline.classList.add("active");

  });

  item.addEventListener("mouseleave",()=>{

    cursor.classList.remove("active");
    outline.classList.remove("active");

  });

});

/* Click Effect */

window.addEventListener("mousedown",()=>{

  cursor.classList.add("click");

});

window.addEventListener("mouseup",()=>{

  cursor.classList.remove("click");

});
