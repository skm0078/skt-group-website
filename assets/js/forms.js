/**
 * FORMS.JS - Form validation and handling
 * Works with Netlify Forms for contact form submissions
 */

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (!contactForm) return; // Exit if no contact form on page

  // Form submission handler
  contactForm.addEventListener("submit", function (e) {
    // Netlify handles the actual submission
    // We just add validation and UX feedback

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';

    // Netlify will handle the actual submission
    // On success, Netlify redirects or shows success page
    // On error, it shows error page

    // Re-enable button after a delay (failsafe)
    setTimeout(() => {
      if (submitBtn.disabled) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }, 10000); // 10 seconds
  });

  // Real-time validation
  const inputs = contactForm.querySelectorAll("input, textarea");

  inputs.forEach((input) => {
    // Validate on blur
    input.addEventListener("blur", function () {
      validateField(this);
    });

    // Clear error on input
    input.addEventListener("input", function () {
      if (this.classList.contains("border-red-500")) {
        this.classList.remove("border-red-500");
        this.classList.add("border-gray-300");

        const errorMsg = this.parentElement.querySelector(".error-message");
        if (errorMsg) {
          errorMsg.remove();
        }
      }
    });
  });

  // Validate individual field
  function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = "";

    // Required field check
    if (field.hasAttribute("required") && value === "") {
      isValid = false;
      errorMessage = "This field is required";
    }

    // Email validation
    if (fieldName === "email" && value !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = "Please enter a valid email address";
      }
    }

    // Phone validation (optional but if provided, should be valid)
    if (fieldName === "phone" && value !== "") {
      const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
      if (!phoneRegex.test(value)) {
        isValid = false;
        errorMessage = "Please enter a valid phone number";
      }
    }

    // Show/hide error
    if (!isValid) {
      showError(field, errorMessage);
    } else {
      clearError(field);
    }

    return isValid;
  }

  // Show error message
  function showError(field, message) {
    field.classList.remove("border-gray-300");
    field.classList.add("border-red-500");

    // Remove existing error message
    const existingError = field.parentElement.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    // Add new error message
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message text-red-500 text-sm mt-1";
    errorDiv.textContent = message;
    field.parentElement.appendChild(errorDiv);
  }

  // Clear error message
  function clearError(field) {
    field.classList.remove("border-red-500");
    field.classList.add("border-gray-300");

    const errorMsg = field.parentElement.querySelector(".error-message");
    if (errorMsg) {
      errorMsg.remove();
    }
  }

  // Validate entire form before submission
  contactForm.addEventListener("submit", function (e) {
    let isFormValid = true;

    inputs.forEach((input) => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      e.preventDefault();

      // Scroll to first error
      const firstError = contactForm.querySelector(".border-red-500");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        firstError.focus();
      }
    }
  });
});
