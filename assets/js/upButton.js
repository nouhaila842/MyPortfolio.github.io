document.addEventListener("DOMContentLoaded", function () {
    const upButton = document.getElementById("upButton");
  
    // Afficher le bouton lorsqu'on défile vers le bas
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        upButton.style.display = "block";
      } else {
        upButton.style.display = "none";
      }
    });
  
    // Remonter en haut de la page lorsque le bouton est cliqué
    upButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  