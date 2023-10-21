"use strict";

const yearEl = document.querySelector(".year");

const btnNav = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

const currentYear = new Date().getFullYear();

// Set current year

yearEl.textContent = currentYear;

// Make mobile navigation work

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
