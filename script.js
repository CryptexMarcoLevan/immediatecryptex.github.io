document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector("[data-navbar]", "[navbar-link active]", "data-nav-link");

  // Remove top margin and padding from the navbar
  navbar.style.marginTop = "0";
  navbar.style.paddingTop = "0";
});
