//Script implémentant les scripts des différentes boulangères

// Sélectionne toutes les boulangères
const bakers = document.querySelectorAll('.baker');
const ClickBuyBaker = new Audio ( 'assets/sounds_effects/caisse_enregistreuse.mp3');

// Objet pour stocker le coût de déblocage de chaque boulangère
const bakerPrices = {
    baker1: 50,  // Coût pour débloquer la première boulangère
    baker4: 200,  // Coût pour débloquer la quatrième boulangère
    baker5: 300   // Coût pour débloquer la cinquième boulangère
    // Ajoute ici les autres boulangères si besoin
};

function playBuyBaker(){
    ClickBuyBaker.currentTime = 0; // Réinitialise le son au début
    ClickBuyBaker.play();
}

// Objet de correspondance entre les boulangères et les fonctions de déblocage
const bakerActions = {
    baker1: startPassiveIncome,
    // Ajoute d'autres boulangères et leurs fonctions associées ici si nécessaire
    // baker4: functionForBaker4,
    // baker5: functionForBaker5,
};

// Variable pour éviter le lancement multiple de la fonction de gain passif
let passiveIncomeActive = false;

// Initialisation : applique l'état "locked" à toutes les boulangères
bakers.forEach(baker => {
    baker.classList.add('locked');
    baker.style.filter = 'grayscale(100%)'; // Effet gris pour indiquer verrouillage
    baker.style.cursor = 'not-allowed'; // Curseur pour indiquer l'état verrouillé
    baker.addEventListener('click', () => unlock(baker)); // Ajoute l'événement de clic
});

// Fonction pour débloquer une boulangère si le joueur a assez de cookies
function unlock(baker) { 
    const bakerId = baker.classList[1]; // Récupère l'ID de la boulangère, correspondant au deuxième élément dans la liste des classes de l'élément (par exemple, baker1)
    const unlockCost = bakerPrices[bakerId]; // Récupère le coût de déblocage
    var bakerTooltip = baker.children[1]; // Récupère le message correspondant à la boulangère

    if (counter >= unlockCost && baker.classList.contains('locked')) {
        // Modifie le texte pour enlever le prix de la boulangère
        const textToRemove = `( ${unlockCost} Cookies)`;
        bakerTooltip.textContent = bakerTooltip.textContent.substring(0, bakerTooltip.textContent.length - textToRemove.length);
        // Si le joueur a assez de cookies et que la boulangère est verrouillée
        counter -= unlockCost; // Déduit le coût de déblocage du compteur
        updateCounterDisplay(); // Met à jour l'affichage du compteur
        // Déverrouille visuellement la boulangère
        baker.classList.remove('locked');
        baker.style.filter = 'none'; // Retire l'effet gris
        baker.style.cursor = 'pointer'; // Change le curseur pour montrer qu'elle est active
        playBuyBaker();


        // Affiche un message ou effectue d'autres actions pour la boulangère débloquée
        // alert(`${bakerId} est débloquée !`);

         // Appelle la fonction spécifique si elle existe pour cette boulangère
         const action = bakerActions[bakerId];
         if (action) {
             action(); // Exécute la fonction spécifique pour cette boulangère
         }

    } else if (baker.classList.contains('locked')) {
        // Si la boulangère est toujours verrouillée et que le joueur n'a pas assez de cookies
        // alert("Pas assez de cookies pour débloquer cette boulangère !");
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const cookie = document.getElementById("cookie");
    const counterDisplay = document.getElementById("counterDisplay");
    const scrollButton = document.getElementById("scrollButton");

    //Fonction permettant de récupérer le nombre de cookies à partir du compteur
    function getCookieNumber() {
        return parseInt(counterDisplay.textContent, 10) || 0; // Returns 0 if textContent is not a number
    }
});


// message informatifs sur les bakers

const bakerInfo = document.getElementById('bakerInfo');

// Crée un objet contenant les informations des boulangères avec <br> pour les retours à la ligne
const bakerDetails = {
    baker1: 
        "Prix -> 30 cookies<br>Competence -> auto-cookies<br>Verres de lait -> 1s<br>Valeur cookie -> 2<br>apprence cookie -> amelioree",
    baker4: "Prix -> 500 cookies<br>Competence -> auto-cookies<br>Verres de lait -> 1s<br>Valeur cookie -> 9<br>apprence cookie -> amelioree",
    baker5: "Prix -> 3000 cookies<br>Competence -> auto-cookies<br>Verres de lait -> 1s<br>Valeur cookie -> 2<br>apprence cookie -> amelioree"
};

// Ajoute des événements de survol à chaque boulangère
/* bakers.forEach(baker => {
    const bakerId = baker.classList[1]; // Récupère l'identifiant de la boulangère (baker1, baker4, etc.)

    baker.addEventListener('mouseover', () => {
        // Affiche le texte correspondant à la boulangère avec des retours à la ligne
        bakerInfo.innerHTML = bakerDetails[bakerId]; // Utilise innerHTML pour interpréter les <br>
        bakerInfo.style.opacity = '1';
        bakerInfo.style.visibility = 'visible';
        bakerInfo.style.display = "flex";
    });

    baker.addEventListener('mouseout', () => {
        // Cache le texte lorsqu'on quitte la boulangère
        bakerInfo.style.opacity = '0';
        bakerInfo.style.visibility = 'hidden';
    });
});
*/