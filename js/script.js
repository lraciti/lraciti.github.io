// Typing Animation
document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.getElementById("typing-name");
  const nameText = "I'm Lucia Raciti.";
  let index = 0;

  function type() {
    if (index < nameText.length) {
      nameElement.textContent += nameText.charAt(index);
      index++;
      setTimeout(type, 150);
    }
  }
  type();

  // Fade-in Animation on Scroll
  const fadeElements = document.querySelectorAll(".fade-in");
  function checkVisibility() {
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
