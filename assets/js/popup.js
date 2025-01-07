document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("image-popup");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.querySelector(".popup .close-btn");
  
    // Écouter les clics sur les images
    document.querySelectorAll(".popup-image").forEach((img) => {
      img.addEventListener("click", (e) => {
        e.preventDefault(); // Empêcher le comportement du lien
        const imageUrl = img.getAttribute("data-image");
        popupImg.src = imageUrl; // Mettre à jour la source de l'image
        popup.classList.remove("hidden"); // Afficher la popup
      });
    });
  
    // Écouter le clic sur le bouton de fermeture
    closeBtn.addEventListener("click", () => {
      popup.classList.add("hidden");
    });
  
    // Fermer la popup en cliquant en dehors de l'image
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.classList.add("hidden");
      }
    });
  });
  