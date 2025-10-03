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

  document.addEventListener("click", function(event) {
    const target = event.target;
  
    // Only respond to clicks on .anim-target elements
    if (!target.classList.contains("anim-target")) return;
  
    // If already exiting, do nothing
    if (target.classList.contains("exit")) return;
  
    // If already active, trigger exit animation
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      target.classList.add("exit");
  
      // Optional: Remove the element after animation ends
      target.addEventListener("animationend", () => {
        target.remove(); // or hide it: target.style.display = "none";
      }, { once: true });
  
    } else {
      // Make this element active and remove active from others
      document.querySelectorAll(".anim-target.active").forEach(function(el) {
        el.classList.remove("active");
      });
  
      target.classList.add("active");
    }
  });
