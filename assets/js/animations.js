/**
 * ANIMATIONS.JS - Scroll-triggered animations
 * Uses Intersection Observer API for performance
 */

document.addEventListener("DOMContentLoaded", function () {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    // Skip animations if user prefers reduced motion
    return;
  }

  // Intersection Observer options
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  // Create observer
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation class
        entry.target.classList.add("animate-fade-up");
        entry.target.classList.remove("scroll-animate");

        // Stop observing this element
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with .scroll-animate class
  const animateElements = document.querySelectorAll(".scroll-animate");
  animateElements.forEach((element) => {
    observer.observe(element);
  });

  // Stagger animation for grid items
  const gridContainers = document.querySelectorAll("[data-animate-stagger]");

  gridContainers.forEach((container) => {
    const items = container.children;

    Array.from(items).forEach((item, index) => {
      item.classList.add("scroll-animate");

      // Add stagger delay based on index
      const delay = (index % 4) + 1; // 1-4 for grid of 4
      item.classList.add(`animate-delay-${delay}`);

      observer.observe(item);
    });
  });

  // Parallax effect for hero sections (subtle)
  const heroSections = document.querySelectorAll("[data-parallax]");

  if (heroSections.length > 0) {
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;

      heroSections.forEach((hero) => {
        const speed = hero.dataset.parallax || 0.5;
        const yPos = -(scrolled * speed);
        hero.style.transform = `translateY(${yPos}px)`;
      });
    });
  }
});
