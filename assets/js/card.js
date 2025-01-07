document.addEventListener("DOMContentLoaded", function () {
    const logoItems = document.querySelectorAll("#five .logo-item");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scale(1)";
            entry.target.style.opacity = "2";
            observer.unobserve(entry.target); // Stop observing once animation is done
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 20% of the section is visible
      }
    );
  
    // Set initial styles and observe items
    logoItems.forEach((item) => {
      item.style.transform = "scale(0.5)";
      item.style.opacity = "0";
      observer.observe(item);
    });
  });
  