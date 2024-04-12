'use strict';

/**
 * add event on element
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    elem.forEach(function(el) {
      el.addEventListener(type, callback);
    });
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

navbarLinks.forEach(function(link) {
  addEventOnElem(link, "click", closeNavbar);
});

/**
 * header active
 */
const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);

/**
 * toggle active on add to fav
 */
const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
}

addToFavBtns.forEach(function(btn) {
  addEventOnElem(btn, "click", toggleActive);
});

/**
 * scroll revreal effect
 */
const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  sections.forEach(function(section) {
    if (section.getBoundingClientRect().top < window.innerHeight / 1.5) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

/**
 * Login and Registration
 */
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');
const registerBtn = document.getElementById('registerBtn');

loginBtn.addEventListener('click', function() {
  loginForm.style.display = 'block';
  registerBtn.style.display = 'none';
});

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  // Example login logic - replace with actual implementation
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  if (username === 'admin' && password === 'admin') {
    alert('Login successful!');
  } else {
    alert('Login failed! Please check your username and password.');
    registerBtn.style.display = 'block';
  }
});

registerBtn.addEventListener('click', function() {
  // Redirect to registration page
  window.open("registration.html", "_blank");
});

// script.js
// Function to open the popup after 10 seconds
setTimeout(function() {
  document.getElementById('popup').style.display = 'block';
}, 10000);

// Function to close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
