document.addEventListener("DOMContentLoaded", () => {
  const currentURL = window.location.href;
  const links = document.querySelectorAll("#menu a");
  const navbar = document.getElementsByClassName("navbar")[0];

  links.forEach((link) => {
    if (currentURL.includes(link.getAttribute("href"))) {
      link.classList.add("nav-active");
    }

    link.addEventListener("click", () => {
      links.forEach((link) => link.classList.remove("nav-active"));
      link.classList.add("nav-active");
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("glass-nav");
    } else {
      navbar.classList.remove("glass-nav");
    }
  });
});
