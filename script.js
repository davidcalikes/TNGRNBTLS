const clickSound = new Audio("assets/audio/smash.mp3");

document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Set anim-target-1 as active on load
  const firstTarget = document.querySelector(".anim-target-1");
  if (firstTarget) firstTarget.classList.add("active");
});

document.addEventListener("click", function(event) {
  const activeEl = document.querySelector(".anim-target.active");

  // Only trigger if the active element itself was clicked
  if (activeEl && event.target === activeEl) {
    // 🔊 Play sound
    clickSound.currentTime = 0; // rewind to start so it can replay quickly
    clickSound.play();

    // Add animation
    activeEl.classList.add("recycle");

    // When animation finishes, move to next element
    activeEl.addEventListener("animationend", function handler() {
      activeEl.classList.remove("active", "recycle");
      activeEl.removeEventListener("animationend", handler);

      // 2️⃣ Find next target
      const currentIndex = parseInt(
        [...activeEl.classList]
          .find(cls => cls.startsWith("anim-target-"))
          .replace("anim-target-", "")
      );

      const nextEl = document.querySelector(`.anim-target-${currentIndex + 1}`);

      // 3️⃣ Make next element active
      if (nextEl) {
        nextEl.classList.add("active");
      } else {
        console.log("Reached the last target");
      }
    });
  }
});
