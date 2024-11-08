// pour gérer l'apparition/ disparition du lait 

// Sélectionne l'image du haut où les verres de lait apparaîtront
const hallImage = document.getElementById('hall');
const clickSoundMilk = new Audio('assets/sounds_effects/romain_slurp_ahh.mp3');

function playClickSoundMilk(){
    clickSoundMilk.currentTime = 0; // Réinitialise le son au début
    clickSoundMilk.play();
    clickSoundMilk.volume = 0.25;
  }

// Fonction pour ajouter un verre de lait à une position aléatoire
function spawnMilk() {
    const milk = document.createElement('img');
    milk.src = 'assets/milk.png'; // Chemin de l'image de lait
    milk.classList.add('milk');
    milk.draggable = false; // Empêche le drag

    // Position aléatoire dans les dimensions de l'image du haut
    const maxX = hallImage.offsetWidth - 50; // Assure que l'image ne déborde pas
    const maxY = hallImage.offsetHeight - 50;
    milk.style.left = `${Math.random() * maxX}px`;
    milk.style.top = `${Math.random() * maxY}px`;

    // Ajouter un événement pour gagner des cookies au clic
    milk.addEventListener('click', () => {
        counter += 20;
        playClickSoundMilk()
        updateCounterDisplay();
        milk.remove(); // Supprime le verre de lait immédiatement au clic
    });

    // Ajouter le verre de lait à l'image du haut
    hallImage.parentElement.appendChild(milk);

    // Supprime le verre de lait après 0.5 seconde, que le joueur l'ait cliqué ou non
    setTimeout(() => {
        milk.remove();
    }, 1000);
}

// Définir un intervalle pour générer un verre de lait toutes les 10 secondes
setInterval(spawnMilk, 1000);