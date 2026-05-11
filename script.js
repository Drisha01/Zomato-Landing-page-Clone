/* =========================
FILE: script.js
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(!header){
    return;
  }

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
const navBackdrop = document.querySelector(".nav-backdrop");

function setMobileNavOpen(isOpen){

  if(!navLinks || !menuBtn){
    return;
  }

  navLinks.classList.toggle("active", isOpen);
  document.body.classList.toggle("nav-open", isOpen);

  if(navBackdrop){
    navBackdrop.classList.toggle("active", isOpen);
    navBackdrop.setAttribute("aria-hidden", isOpen ? "false" : "true");
  }

  menuBtn.innerHTML = isOpen
    ? `<i class="ri-close-line"></i>`
    : `<i class="ri-menu-3-line"></i>`;

  menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");

}

if(menuBtn && navLinks){

  menuBtn.setAttribute("aria-label", "Open menu");
  menuBtn.setAttribute("aria-expanded", "false");

  menuBtn.addEventListener("click", () => {

    const willOpen = !navLinks.classList.contains("active");
    setMobileNavOpen(willOpen);
    menuBtn.setAttribute("aria-label", willOpen ? "Close menu" : "Open menu");

  });

  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      setMobileNavOpen(false);
      menuBtn.setAttribute("aria-label", "Open menu");

    });

  });

  window.addEventListener("resize", () => {

    if(window.innerWidth > 900 && navLinks.classList.contains("active")){
      setMobileNavOpen(false);
      menuBtn.setAttribute("aria-label", "Open menu");
    }

  });

  window.addEventListener("keydown", (e) => {

    if(e.key === "Escape" && navLinks.classList.contains("active")){
      setMobileNavOpen(false);
      menuBtn.setAttribute("aria-label", "Open menu");
    }

  });

  if(navBackdrop){

    navBackdrop.addEventListener("click", () => {

      setMobileNavOpen(false);
      menuBtn.setAttribute("aria-label", "Open menu");

    });

  }

}

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
