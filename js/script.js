document.addEventListener("DOMContentLoaded", () => {
  // Typing animation
  const nameElement = document.getElementById("typing-name");
  const nameText = "I'm Lucia Raciti.";
  let index = 0;

  function type() {
    if (index < nameText.length) {
      nameElement.textContent += nameText.charAt(index);
      index++;
      setTimeout(type, 120);
    }
  }
  type();

  // Fade-in on scroll
  const fadeElements = document.querySelectorAll(".fade-in");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    fadeElements.forEach((el) => observer.observe(el));
  } else {
    fadeElements.forEach((el) => el.classList.add("visible"));
  }

  // Navbar shadow on scroll
  const navbar = document.getElementById("navbar");
  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const toggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");

  function setMenu(open) {
    navList.classList.toggle("open", open);
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", () => setMenu(!navList.classList.contains("open")));
  navList.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
});
