
document.addEventListener("DOMContentLoaded", function() {

  const startX = 100; // À ajuster
  const startY = 100; // À ajuster
  const rectWidth = 500; // À ajuster
  const rectHeight = 500; // À ajuster

   function createRandomPlus() {
    const plusElement = document.createElement("div");
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
  
    // Vérifie si le "+" serait dans la zone de la grille
    if (posX < startX || posX > startX + rectWidth || posY < startY || posY > startY + rectHeight) {
      plusElement.innerHTML = "+";
      plusElement.style.position = "absolute";
      plusElement.style.left = posX + "px";
      plusElement.style.top = posY + "px";
      plusElement.style.fontSize = Math.random() * 40 + 20 + "px";
      plusElement.style.fontWeight = "bold";
      plusElement.style.zIndex = 9999;
      document.body.appendChild(plusElement);
  
      // Supprime le "+" après un certain temps
      setTimeout(() => {
        document.body.removeChild(plusElement);
      }, Math.random() * 5000);
    }
  }
  
  // Crée un "+" toutes les 500 millisecondes
  setInterval(createRandomPlus, 500);
  

  const firstNameContainer = document.querySelector('.first-name-container');
  const lastNameContainer = document.querySelector('.last-name-container');
  
  const firstName = firstNameContainer.querySelector('.first-name');
  const lastName = lastNameContainer.querySelector('.last-name');
  
  // Pour le prénom, on cible la dernière lettre
  const lastLetterOfFirstName = firstName.textContent.slice(-1);
  firstName.innerHTML = firstName.textContent.slice(0, -1) + `<span class="special">${lastLetterOfFirstName}</span>`;
  
  // Pour le nom, on cible la première lettre
  const firstLetterOfLastName = lastName.textContent[0];
  lastName.innerHTML = `<span class="special">${firstLetterOfLastName}</span>` + lastName.textContent.slice(1);



  const cubes = document.querySelectorAll(".cube");
  const scene = document.querySelector(".scene");
  const auras = document.querySelectorAll(".aura");
  

  
  let dx = [0.01, 0.02, 0.03];
  let dy = [0.01, 0.02, 0.03];

  function addAura() {
    auras.forEach(aura => aura.style.opacity = "1");
  
  }

  function removeAura() {
    auras.forEach(aura => aura.style.opacity = "0");
  }

  function animate() {
    cubes.forEach((cube, index) => {
      let rect = cube.getBoundingClientRect();
      if (rect.left < 0 || rect.right > window.innerWidth) {
        dx[index] = -dx[index];
      }
      if (rect.top < 0 || rect.bottom > window.innerHeight) {
        dy[index] = -dy[index];
      }
      cube.style.left = (parseFloat(cube.style.left || 0) + dx[index] * 100) + "px";
      cube.style.top = (parseFloat(cube.style.top || 0) + dy[index] * 100) + "px";
    });
    requestAnimationFrame(animate);
  }
  const links = document.querySelectorAll('.links a'); // Sélectionne tous les liens de navigation

  // Ajoute l'élément de transition au DOM
  const transitionBackground = document.createElement('div');
  transitionBackground.id = 'transition-background';
  document.body.appendChild(transitionBackground);
  
  // Applique les styles initiaux à l'élément de transition
  transitionBackground.style.position = 'fixed';
  transitionBackground.style.top = '0';
  transitionBackground.style.left = '0';
  transitionBackground.style.width = '100vw';
  transitionBackground.style.height = '100vh';
  transitionBackground.style.background = 'black';
  transitionBackground.style.zIndex = '9999';
  transitionBackground.style.opacity = '0';
  transitionBackground.style.transition = 'opacity 0.5s ease-in-out';
  transitionBackground.style.display = 'none';

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prévient le comportement par défaut du lien
      const goTo = this.getAttribute('href'); // Obtient le lien sur lequel on a cliqué
      
      // Affiche et démarre l'animation de l'élément de transition
      transitionBackground.style.display = 'block';
      setTimeout(() => {
        transitionBackground.style.opacity = '1';
      }, 10); // Délai pour s'assurer que display: block est appliqué

      setTimeout(() => {
        window.location.href = goTo; // Redirige après l'animation
      }, 500);
      
    });


  animate();
});

});
