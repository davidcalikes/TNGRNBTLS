document.addEventListener("click", function(event) {
    // Check if the clicked element should be animated (e.g., has class 'anim-target')
    if (event.target.matches(".anim-target")) {
      // Remove active class from all other targets
      document.querySelectorAll(".anim-target.active").forEach(function(el) {
        el.classList.remove("active");
      });
  
      // Add active class to clicked element
      event.target.classList.add("active");
    }
  });
