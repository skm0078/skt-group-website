/**
 * MENU.JS - Navigation functionality
 * Handles mobile menu toggle and dropdown menus
 */

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      const isOpen = mobileMenu.classList.contains("hidden");

      if (isOpen) {
        mobileMenu.classList.remove("hidden");
        mobileMenuIcon.classList.remove("fa-bars");
        mobileMenuIcon.classList.add("fa-times");
      } else {
        mobileMenu.classList.add("hidden");
        mobileMenuIcon.classList.remove("fa-times");
        mobileMenuIcon.classList.add("fa-bars");
      }
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      const isClickInsideMenu = mobileMenu.contains(event.target);
      const isClickOnButton = mobileMenuBtn.contains(event.target);

      if (!isClickInsideMenu && !isClickOnButton) {
        mobileMenu.classList.add("hidden");
        mobileMenuIcon.classList.remove("fa-times");
        mobileMenuIcon.classList.add("fa-bars");
      }
    }
  });

  // Desktop dropdown menus
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach((toggle) => {
    const dropdown = toggle.nextElementSibling;

    // Show dropdown on hover (desktop)
    toggle.parentElement.addEventListener("mouseenter", function () {
      if (window.innerWidth >= 768) {
        dropdown.classList.remove("hidden");
      }
    });

    toggle.parentElement.addEventListener("mouseleave", function () {
      if (window.innerWidth >= 768) {
        dropdown.classList.add("hidden");
      }
    });

    // Toggle dropdown on click (mobile)
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth < 768) {
        e.preventDefault();
        dropdown.classList.toggle("hidden");
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Ignore # only links
      if (href === "#" || href === "#!") {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();

        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
          mobileMenuIcon.classList.remove("fa-times");
          mobileMenuIcon.classList.add("fa-bars");
        }

        // Smooth scroll to target
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Sticky header on scroll
  const header = document.querySelector("header");
  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add("shadow-lg");
    } else {
      header.classList.remove("shadow-lg");
    }

    lastScroll = currentScroll;
  });
});
