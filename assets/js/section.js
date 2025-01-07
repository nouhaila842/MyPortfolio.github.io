document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner toutes les sections avec la classe 'section'
    const sections = document.querySelectorAll(".section");
  
    // Configuration de l'observateur
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Arrête d'observer une fois animé
          }
        });
      },
      {
        threshold: 0.1, // Déclenche lorsque 10% de la section est visible
      }
    );
  
    // Observer chaque section sauf #one
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  