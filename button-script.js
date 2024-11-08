// Fichier JavaScript contenant le script du bouton permttant de changer de scène sur le site (button-script.js)

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne les éléments bouton, hall et cuisine
    const scrollButton = document.getElementById("scrollButton");
    const hall = document.getElementById("hall");
    const kitchen = document.getElementById("kitchen");
  
    // Variable pour indiquer quelle est la prochaine scène vers laquelle il faut scroller
    let scrollToHall = false;
  
    // Fonction pour scroller vers la prochaine scène
    function scrollToSection() {
      // Vérifie vers quelle section il faut scroller...
      if (scrollToHall) {
        // Scroll vers la scène hall
        hall.scrollIntoView({ behavior: "smooth" });
        scrollButton.textContent = "Aller en cuisine";
      } else {
        // Scroll vers la scène kitchen
        kitchen.scrollIntoView({ behavior: "smooth" });
        scrollButton.textContent = "Aller au cookie";
      }
    
      // Change la prochaine section vers laquelle scroller
      scrollToHall = !scrollToHall;
    }
  
    // Ajoute un EventListener qui attend le click de l'utilisateur avant de scroller vers la prochaine scène
    scrollButton.addEventListener("click", scrollToSection);
  });