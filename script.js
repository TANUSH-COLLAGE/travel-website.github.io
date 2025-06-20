// script.js

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Mobile nav toggle (optional if responsive)
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
  navToggle.addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("active");
  });
}

// Basic animation on scroll using Intersection Observer
const items = document.querySelectorAll(".destination-item");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

items.forEach(item => observer.observe(item));

const bookBtn = document.querySelector('.hero-button');
if (bookBtn) {
  bookBtn.addEventListener("click", () => {
    alert("Redirecting to appointment booking...");
  });
}

