/**
 * CAROUSEL.JS - Hero carousel for homepage
 * Auto-rotating carousel with manual controls
 */

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("hero-carousel");

  if (!carousel) return; // Exit if carousel doesn't exist on page

  const slides = carousel.querySelectorAll("[data-slide]");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const indicators = document.querySelectorAll("[data-slide-to]");

  let currentSlide = 0;
  let autoplayInterval;
  const autoplayDelay = 5000; // 5 seconds

  // Show specific slide
  function showSlide(index) {
    // Wrap around
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.add("hidden");
      slide.classList.remove("animate-fade-up");
    });

    // Show current slide with animation
    slides[currentSlide].classList.remove("hidden");
    setTimeout(() => {
      slides[currentSlide].classList.add("animate-fade-up");
    }, 10);

    // Update indicators
    if (indicators.length > 0) {
      indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
          indicator.classList.add("bg-white");
          indicator.classList.remove("bg-white/50");
        } else {
          indicator.classList.remove("bg-white");
          indicator.classList.add("bg-white/50");
        }
      });
    }
  }

  // Next slide
  function nextSlide() {
    showSlide(currentSlide + 1);
    resetAutoplay();
  }

  // Previous slide
  function prevSlide() {
    showSlide(currentSlide - 1);
    resetAutoplay();
  }

  // Start autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, autoplayDelay);
  }

  // Stop autoplay
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Reset autoplay
  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Event listeners
  if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
  }

  // Indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      showSlide(index);
      resetAutoplay();
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  });

  // Pause on hover
  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);

  // Pause when page is not visible
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  carousel.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50; // minimum distance for swipe

    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - next slide
      nextSlide();
    }

    if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - previous slide
      prevSlide();
    }
  }

  // Initialize
  showSlide(0);
  startAutoplay();
});
