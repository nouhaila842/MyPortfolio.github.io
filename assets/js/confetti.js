document.addEventListener("DOMContentLoaded", () => {
    const copyEmailButton = document.getElementById("copy-email-btn");

    // Charger le son
    //const sound = new Audio("images/success.mp3"); // Remplacez par le chemin de votre fichier audio

    copyEmailButton.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche l'action par défaut du lien

        const email = "nouhaila@outloof.fr";

        // Jouer le son
        //sound.currentTime = 0; // Remet au début si le bouton est cliqué plusieurs fois
        //sound.play();

        // Copiez l'email dans le presse-papiers
        navigator.clipboard.writeText(email).then(() => {
            console.log("Email copié avec succès !");
            
            // Crée un canvas temporaire pour l'effet
            const canvas = document.createElement("canvas");
            document.body.appendChild(canvas);
            canvas.style.position = "fixed";
            canvas.style.top = 0;
            canvas.style.left = 0;
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.style.pointerEvents = "none";
            const ctx = canvas.getContext("2d");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Génération des étoiles
            const stars = [];
            for (let i = 0; i < 250; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 3 + 1,
                    opacity: Math.random(),
                    speed: Math.random() * 1 + 0.5
                });
            }

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                stars.forEach((star) => {
                    star.y += star.speed;
                    if (star.y > canvas.height) {
                        star.y = -10; // Remet l'étoile en haut de l'écran
                        star.x = Math.random() * canvas.width;
                    }
                    ctx.globalAlpha = star.opacity;
                    ctx.fillStyle = "#FFD700"; // Couleur dorée
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                    ctx.fill();
                });

                requestAnimationFrame(animate);
            };

            animate();

            // Supprime le canvas après 3 secondes
            setTimeout(() => {
                document.body.removeChild(canvas);
            }, 3000);
        });
    });
});
