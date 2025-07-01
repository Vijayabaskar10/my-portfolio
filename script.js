document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const scrollUp = document.getElementById("scroll-up");
  const scrollDown = document.getElementById("scroll-down");
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById("navbar");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    themeToggle.classList.toggle("rotate");
  });

  scrollUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  scrollDown.addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });

  new Typed(".typing", {
    strings: ["Java Enthusiast", "Frontend Developer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true,
  });
});
