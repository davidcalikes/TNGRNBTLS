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
  
    if (!target.classList.contains("anim-target")) return;
  
    if (target.classList.contains("exit")) return;
  
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      target.classList.add("exit");
  
      target.addEventListener("animationend", () => {
        target.remove(); // Or: target.style.display = "none";
      }, { once: true });
  
    } else {
      document.querySelectorAll(".anim-target.active").forEach(el => {
        el.classList.remove("active");
      });
  
      target.classList.add("active");
    }
  });
