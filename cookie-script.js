// audio de clique de cookie
const clickSound = new Audio('assets/sounds_effects/romain_crounch.mp3');

// Défile vers le haut au chargement de la page
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// Script implémentant le compteur de clics
let counter = 0;

// Sélectionne le bouton et le compteur dans le code HTML
const cookie = document.getElementById("cookie");
const counterDisplay = document.getElementById("counterDisplay");

// Cache le bouton au début
scrollButton.style.display = "none";

// Fonction pour incrémenter le compteur
function incrementCounter() {
  counter += 2;
  updateCounterDisplay()

  if (counter >= 0 && scrollButton.style.display === "none") {
    scrollButton.style.display = "block";
  }
  
}

function updateCounterDisplay() {
  counterDisplay.textContent = `${counter} ${counter === 1 ? 'Cookie' : 'Cookies'}`;
}

// empêche de drag les images
document.querySelectorAll('*').forEach(element => {
  element.setAttribute('draggable', 'false');
});

// désactive toute sortes de façons de zoomer
window.addEventListener('wheel', function(event) {
  if (event.ctrlKey) {
      event.preventDefault();
  }
}, { passive: false });

// applique un effet de réduction sur le cookie quand on le clique
document.querySelector('.cookie-img').addEventListener('mousedown', () => {
  document.querySelector('.cookie-img').style.transform = 'scale(0.9)';
});

document.querySelector('.cookie-img').addEventListener('mouseup', () => {
  document.querySelector('.cookie-img').style.transform = 'scale(1)';
});

function playClickSound(){
  clickSound.currentTime = 0; // Réinitialise le son au début
  clickSound.volume = 0.15;
  clickSound.play();
}

// Appelle la fonction dès qu'un clic est effectué
cookie.addEventListener("click", () => {
  playClickSound(); // Joue le son au clic
  incrementCounter(); // Incrémente le compteur
});




// Sélectionne la première boulangère
const baker1 = document.querySelector('.baker1');

// Fonction pour démarrer le gain passif de cookies (débloquage de la première boulangère)
function startPassiveIncome() {
    if (!passiveIncomeActive) { // Empêche de lancer plusieurs intervalles
        passiveIncomeActive = true;
        setInterval(() => {
            incrementCounter()
        }, 1000); // Ajoute 1 cookie toutes les secondes
    }
}
