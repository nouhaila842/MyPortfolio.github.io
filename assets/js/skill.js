/*document.addEventListener("DOMContentLoaded", () => {
    const featureItems = document.querySelectorAll(".feature-icons li");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const items = Array.from(featureItems);
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("visible");
                    }, index * 200); // 200ms entre chaque élément
                });
                observer.disconnect(); // Arrête l'observation après l'apparition
            }
        });
    }, { threshold: 0.2 });

    observer.observe(featureItems[0]); // Observer le premier élément pour déclencher la séquence
});*/

document.addEventListener("DOMContentLoaded", () => {
    const featureItems = document.querySelectorAll(".feature-icons li");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const items = Array.from(featureItems);
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("visible");
                    }, index * 200); // 200ms entre chaque élément pour l'effet séquentiel
                });
                observer.disconnect(); // Arrête l'observation une fois déclenchée
            }
        });
    }, { threshold: 0.2 });

    observer.observe(featureItems[0]); // Observer le premier élément
});