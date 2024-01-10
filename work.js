
document.addEventListener('DOMContentLoaded', function() {
  
    var project1 = document.getElementById('project1');
    if (project1) {
    project1.addEventListener('click', function() {
        var imageUrl = this.getAttribute('data-image-url');
        var videoUrl = this.getAttribute('data-video-url');
        openModalProject1(imageUrl, videoUrl, "Titre pour Project1", "Description pour Project1");
    });
}

var project2 = document.querySelector('.square[data-project="projet2"]');
if (project2) {
    project2.addEventListener('click', function() {
        var imageUrl = this.getAttribute('data-image-url');
        var gifUrl = this.getAttribute('data-gif-url');
        var videoUrl = "DialogueMiroir.mp4"; // Assure-toi que ce chemin est correct
        openModalProject2(gifUrl, videoUrl, imageUrl);
    });
}

var project3 = document.getElementById('project3');
if (project3) {
    project3.addEventListener('click', function() {
        var imageUrl = this.getAttribute('data-image-url');
        var videoUrl = this.getAttribute('data-video-url');
        openModalProject3(imageUrl, videoUrl, "Titre pour Project3", "Description pour Project3");
    });
}

var project4 = document.getElementById('project4');
if (project4) {
    project4.addEventListener('click', function() {
        var imageUrl = this.getAttribute('data-image-url');
        var imageUrl2 = this.getAttribute('data-image-url2'); 
        var videoUrl = this.getAttribute('data-video-url');
        openModalProject4(imageUrl, imageUrl2, videoUrl, "Titre pour Project4", "Description pour Project4");
    });
}

var project5 = document.getElementById('project5');
if (project5) {
    project5.addEventListener('click', function() {
        var imageUrl = this.getAttribute('data-image-url');
        var imageUrl2 = this.getAttribute('data-image-url2');
        var imageUrl3 = this.getAttribute('data-image-url3');
        var imageUrl4 = this.getAttribute('data-image-url4');
        var videoUrl = this.getAttribute('data-video-url');
        var videoUrl2 = this.getAttribute('data-video-url2');
        var videoUrl3 = this.getAttribute('data-video-url3');
        var title1 = this.getAttribute('data-title1');
        var title2 = this.getAttribute('data-title2');
        var title3 = this.getAttribute('data-title3');
        var description1 = this.getAttribute('data-description1');
        var description2 = this.getAttribute('data-description2');
        var description3 = this.getAttribute('data-description3');
        var imageUrl5 = this.getAttribute('data-image-url5');
        var videoUrl5 = this.getAttribute('data-video-url5');
        var title5 = this.getAttribute('data-title5');
        var description5 = this.getAttribute('data-description5');
        openModalProject5(imageUrl, imageUrl2, imageUrl3, imageUrl4, imageUrl5, videoUrl, videoUrl2, videoUrl3, videoUrl5, title1, title2, title3, title5, description1, description2, description3, description5);
    });
}


var project6 = document.getElementById('project6');
if (project6) {
    project6.addEventListener('click', function() {
        var gifUrl = this.getAttribute('data-gif-url');
        var gifUrl2 = this.getAttribute('data-gif-url2');
        var gifUrl3 = this.getAttribute('data-gif-url3');
        var videoUrl = this.getAttribute('data-video-url');
    
        // Ici, tu devras fournir les titres et descriptions pour les GIFs et la vidéo
        openModalProject6(gifUrl, gifUrl2, gifUrl3, videoUrl, "Vibrations", "Tests graphiques faits sur TouchDesigner", "ClipWeb", "Réalisation d'un clipWeb p5js sur la musique 'Sanctuary Guadian'");
    });
}


var project7 = document.getElementById('project7');
if (project7) {
    project7.addEventListener('click', function() {
        var videoUrl = this.getAttribute('data-video-url');
        var imageUrl = this.getAttribute('data-image-url');
        // Vous devez remplacer 'Titre pour Project7' et 'Description pour Project7' par vos propres titres et descriptions.
        openModalProject7(imageUrl, videoUrl, "Jardin d'Haniwa", "Un projet interactif représentant un jardin d'haniwa qui symbolise les souvenirs de mon enfance. Les haniwa sont de petites statuettes japonaises traditionnellement associées à la mort, servent ici de métaphore pour les souvenirs : des éléments précieux que l'on conserve en soi, mais qui appartiennent au passé et qu'on laisse s'échapper progressivement. Les effets sonores ont été spécialement modifiés pour inclure un écho, évoquant ainsi la nature lointaine et parfois floue des souvenirs. Il est possible d'activer tous les sons en même temps, créant un chaos sonore qui représente le mélange et la confusion des souvenirs, rappelant que nos souvenirs ne sont pas toujours nets ou précis.");
    });
}




function openModalProject1(imageUrl, videoUrl, titleText, descriptionText) {

    var modal = document.getElementById('modal');
    var modalContent = modal.querySelector('.modal-content');
    
    // Efface le contenu précédent
    modalContent.innerHTML = '';

    // Crée et ajoute le bouton de fermeture
    var closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    modalContent.appendChild(closeButton);

    // Crée et ajoute un titre en haut de la modale
    var titleElement = document.createElement('h2');
    titleElement.textContent = "Sculpt 3D"; // Remplace par le titre de ton projet
    titleElement.classList.add('modal-title');
    modalContent.appendChild(titleElement);
   


    // ... Code pour ajouter le GIF ...

    if (imageUrl) {
        var gifElement = document.createElement('img');
        gifElement.src = imageUrl;
        gifElement.alt = "Project image";
        gifElement.classList.add('modal-image');
        modalContent.appendChild(gifElement);
    }
    
    if (videoUrl) {
        var videoElement = document.createElement('video');
        videoElement.setAttribute('controls', '');
        var sourceMP4 = document.createElement('source');
        sourceMP4.src = videoUrl;
        sourceMP4.type = 'video/mp4';
        videoElement.appendChild(sourceMP4);
        videoElement.classList.add('modal-video');
        modalContent.appendChild(videoElement);

    
    }
    

    var imageUrl2 = "image00001.jpeg"; // Remplace par le chemin de la deuxième image
    var imageElement2 = document.createElement('img');
    imageElement2.src = imageUrl2;
    imageElement2.alt = "Deuxième image de Project1";
    imageElement2.classList.add('modal-media', 'project1-modal-image');
    modalContent.appendChild(imageElement2);

    // Ajoute la troisième image
    var imageUrl3 = "image00002.jpeg"; // Remplace par le chemin de la troisième image
    var imageElement3 = document.createElement('img');
    imageElement3.src = imageUrl3;
    imageElement3.alt = "Troisième image de Project1";
    imageElement3.classList.add('modal-media', 'project1-modal-image');
    modalContent.appendChild(imageElement3);

    // ... Code pour ajouter la vidéo ...

    var descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = "Buste 3D d'un visage démoniaque et concepts. Le projet a été sculpté dans ZBrush, texturé avec Substance Painter et présenté dans un environnement Blender"
    descriptionElement.classList.add('modal-description');
    descriptionElement.style.position = 'relative';
    descriptionElement.style.top = '10px'
    modalContent.appendChild(descriptionElement);
   
   

    // Affiche la modale
    modal.style.display = 'flex';

   
}


function openModalProject2(gifUrl, videoUrl) {
    var modal = document.getElementById('modal');
    var modalContent = modal.querySelector('.modal-content');
    
    // Efface le contenu précédent
    modalContent.innerHTML = '';

    // Crée et ajoute le bouton de fermeture
    var closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    modalContent.appendChild(closeButton);

    // Crée et ajoute un titre en haut de la modale
    var titleElement = document.createElement('h2');
    titleElement.textContent = "Miroir Magique Numérique"; // Remplace par le titre de ton projet
    titleElement.classList.add('modal-title');
    modalContent.appendChild(titleElement);

    // ... Code pour ajouter le GIF ...

    if (gifUrl) {
        var gifElement = document.createElement('img');
        gifElement.src = gifUrl;
        gifElement.alt = "Project GIF";
        gifElement.classList.add('modal-gif');
        modalContent.appendChild(gifElement);
    }

    // ... Code pour ajouter la vidéo ...

    if (videoUrl) {
        var videoElement = document.createElement('video');
        videoElement.setAttribute('controls', '');
        var sourceMP4 = document.createElement('source');
        sourceMP4.src = videoUrl;
        sourceMP4.type = 'video/mp4';
        videoElement.appendChild(sourceMP4);
        videoElement.classList.add('modal-video');
        modalContent.appendChild(videoElement);
    }

    var newImageUrl = "Miroir.jpg"; // Replace with your new image's URL
    var newImageElement = document.createElement('img');
    newImageElement.src = newImageUrl;
    newImageElement.classList.add('modal-image');
    modalContent.appendChild(newImageElement);


    var descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = "Cette installation artistique, intitulée 'Le Miroir Magique Numérique', est conçue pour évaluer l'apparence de l'observateur et de le réduire à son état de simple mortel, commun et sans importance.<br><br>" +
        "Le miroir affiche trois états distincts, représentés par les couleurs vert, rouge et bleu :<br>" +
        "<ul>" +
        "<li>Vert, qui symbolise un état de repos ;</li>" +
        "<li>Rouge, représentant un état de réflexion ;</li>" +
        "<li>Bleu, qui indique un état d'élocution.</li>" +
        "</ul>" +
        "Ce miroir, bordé de végétation desséchée, nous met face à la brièveté de notre existence et à l'inexorabilité de notre disparition, nous rappelant avec ironie que l'intelligence artificielle, par nature éternelle, nous nargue. Captive de la fugacité, elle symbolise ce que nous avons du mal à admettre en nous. Elle éclaire une réalité masquée par nos avancées technologiques, avec lesquelles nous nourrissons le désir vain de transcender notre finitude et d'effleurer l'immortalité.<br><br>" +
        "Il nous incite à prêter attention à notre image, nourrissant l'illusion que nous maîtrisons notre apparence. Cependant, en réalité, nous sommes simplement spectateurs de l'avancée inévitable du temps, témoins de notre inéluctable vieillissement.";
    descriptionElement.classList.add('modal-description');
    descriptionElement.style.position = 'relative';
descriptionElement.style.top = '40px'
    modalContent.appendChild(descriptionElement);


    // Affiche la modale
    modal.style.display = 'flex';
}

function openModalProject3(imageUrl, videoUrl, titleText, descriptionText) {

    var modal = document.getElementById('modal');
    var modalContent = modal.querySelector('.modal-content');
    
    // Efface le contenu précédent
    modalContent.innerHTML = '';

    // Crée et ajoute le bouton de fermeture
    var closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    modalContent.appendChild(closeButton);

    // Crée et ajoute un titre en haut de la modale
    var titleElement = document.createElement('h2');
    titleElement.textContent = "Ballet Triadique"; // Remplace par le titre de ton projet
    titleElement.classList.add('modal-title');
    modalContent.appendChild(titleElement);


    // ... Code pour ajouter le GIF ...

    if (imageUrl) {
        var gifElement = document.createElement('img');
        gifElement.src = imageUrl;
        gifElement.alt = "Project image";
        gifElement.classList.add('modal-image');
        modalContent.appendChild(gifElement);
    }
    
    if (videoUrl) {
        var videoElement = document.createElement('video');
        videoElement.setAttribute('controls', '');
        var sourceMP4 = document.createElement('source');
        sourceMP4.src = videoUrl;
        sourceMP4.type = 'video/mp4';
        videoElement.appendChild(sourceMP4);
        videoElement.classList.add('modal-video');
        modalContent.appendChild(videoElement);
    }
    
    var descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = "Utilisation de la motion capture pour animer un modèle 3D inspiré du ballet triadique sur maya"
    descriptionElement.classList.add('modal-description');
    descriptionElement.style.position = 'relative';
    descriptionElement.style.top = '10px'
    modalContent.appendChild(descriptionElement);
   
   

    modal.style.display = 'flex';
}


function openModalProject4(imageUrl, imageUrl2, videoUrl,  titleText, descriptionText) {
    var modal = document.getElementById('modal');
    var modalContent = modal.querySelector('.modal-content');
    
    modalContent.innerHTML = '';


    // Crée et ajoute le bouton de fermeture
    var closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    modalContent.appendChild(closeButton);

    // Crée et ajoute un titre en haut de la modale
    var titleElement = document.createElement('h2');
    titleElement.textContent = "L'habitat d'un zombie";
    titleElement.classList.add('modal-title');
    modalContent.appendChild(titleElement);

    // Ajoute la première image
    if (imageUrl) {
        var imageElement1 = document.createElement('img');
        imageElement1.src = imageUrl;
        imageElement1.alt = "";
        imageElement1.classList.add('modal-image');
        modalContent.appendChild(imageElement1);
    }

    // Ajoute la deuxième image
    if (imageUrl2) {
        var imageElement2 = document.createElement('img');
        imageElement2.src = imageUrl2;
        imageElement2.alt = "Deuxième image de Project4";
        imageElement2.classList.add('modal-image');
        modalContent.appendChild(imageElement2);
    }

    // Ajoute la vidéo
    if (videoUrl) {
        var videoElement = document.createElement('video');
        videoElement.setAttribute('controls', '');
        var sourceMP4 = document.createElement('source');
        sourceMP4.src = videoUrl;
        sourceMP4.type = 'video/mp4';
        videoElement.appendChild(sourceMP4);
        videoElement.classList.add('modal-video');
        modalContent.appendChild(videoElement);
    }

    var descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = "Scène 3D sur Blender représentant l'habitat d'un zombie, révélé lorsque la scène se termine dans un cimetière."
    descriptionElement.classList.add('modal-description');
    descriptionElement.style.position = 'relative';
    descriptionElement.style.top = '10px'
    modalContent.appendChild(descriptionElement);


    modal.style.display = 'flex';
}

function openModalProject5(imageUrl, imageUrl2, imageUrl3, imageUrl4, imageUrl5, videoUrl, videoUrl2, videoUrl3, videoUrl5, titleText1, titleText2, titleText3, titleText5, descriptionText1, descriptionText2, descriptionText3, descriptionText5) {
    // ... configuration du modal ...
    var modalContent = modal.querySelector('.modal-content');
    modalContent.innerHTML = '';

    // Ajoute le bouton de fermeture
    var closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', closeModal);
    modalContent.appendChild(closeButton);

    // Première rangée : Titre, Imageurl, Videourl, Description, ESPACE
    addProjectSection(modalContent, imageUrl, null, videoUrl, titleText1, descriptionText1,'title-spacing', 'desc-spacing');
    addTransparentSquare(modalContent);
    addProjectSection(modalContent, imageUrl2, imageUrl3, videoUrl2, titleText2, descriptionText2,'title-spacing', 'desc-spacing');
    addTransparentSquare(modalContent);
    addProjectSection(modalContent, imageUrl4, null, videoUrl3, titleText3, descriptionText3,'title-spacing', 'desc-spacing');
    addTransparentSquare(modalContent);
    addProjectSection(modalContent, imageUrl5, null, videoUrl5, titleText5, descriptionText5, 'title-spacing', 'desc-spacing');


    modal.style.display = 'flex';
}

if (videoUrl5) {
    var videoElement5 = document.createElement('video');
    videoElement5.setAttribute('controls', 'true');
    var sourceElement5 = document.createElement('source');
    sourceElement5.src = videoUrl5;
    sourceElement5.type = 'video/mp4';
    videoElement5.appendChild(sourceElement5);
    
    videoElement5.classList.add('modal-video', 'modal-brainvideo');
    modalContent.appendChild(videoElement5);
}



function addProjectSection(parentElement, imgSrc, imgSrc2, videoSrc, title, desc, descClass, titleClass,) {
    if (title) {
        var titleElement = document.createElement('h2');
        titleElement.textContent = title;
        titleElement.classList.add('modal-title', titleClass);
        parentElement.appendChild(titleElement);
        
        
        
    }

    if (imgSrc) {
        addImageElement(parentElement, imgSrc);
    }

    if (imgSrc2) {
        addImageElement(parentElement, imgSrc2);
    }

    if (videoSrc) {
        addVideoElement(parentElement, videoSrc);
    }

    if (desc) {
        var descElement = document.createElement('p');
        descElement.textContent = desc;
        descElement.classList.add('modal-description', descClass);
        parentElement.appendChild(descElement);
        descElement.style.marginTop = '30px'
    }
}

function addImageElement(parentElement, imgSrc) {
    if (imgSrc) {
        var imageElement = document.createElement('img');
        imageElement.src = imgSrc;
        imageElement.classList.add('modal-image',);
        parentElement.appendChild(imageElement);
        
    }
}

function addVideoElement(parentElement, videoSrc) {
    if (videoSrc) {
        var videoElement = document.createElement('video');
        videoElement.setAttribute('controls', 'true');
        var sourceElement = document.createElement('source');
        sourceElement.src = videoSrc;
        sourceElement.type = 'video/mp4';
        videoElement.appendChild(sourceElement);
        videoElement.classList.add('modal-video');
        parentElement.appendChild(videoElement);
    }
}


function addTransparentSquare(parentElement, height = '150px', width = '100%') {
    var square = document.createElement('div');
    square.style.height = height;
    square.style.width = width;
    square.style.backgroundColor = 'transparent'; // Rend le carré transparent
    square.style.clear = 'both'; // Assure que l'élément prend l'espace verticalement
    parentElement.appendChild(square);
}

function openModalProject6(gifUrl, gifUrl2, gifUrl3, videoUrl, gifTitleText, gifDescriptionText, videoTitleText, videoDescriptionText) {
    var modal = document.getElementById('modal');
    var modalContent = modal.querySelector('.modal-content');
  
    modalContent.innerHTML = '';

    var closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', closeModal);
    modalContent.appendChild(closeButton);

    // Section pour les GIFs
    var gifTitleElement = document.createElement('h2');
    gifTitleElement.textContent = gifTitleText;
    gifTitleElement.classList.add('modal-title', 'gif-title-spacing');
    modalContent.appendChild(gifTitleElement);

    [gifUrl, gifUrl2, gifUrl3].forEach((url, index) => {
        if (url) {
            var gifElement = document.createElement('img');
            gifElement.src = url;
            gifElement.classList.add('modal-gif', `gif-spacing-${index + 1}`);
            modalContent.appendChild(gifElement);
        }
    });

    var gifDescriptionElement = document.createElement('p');
    gifDescriptionElement.textContent = gifDescriptionText;
    gifDescriptionElement.classList.add('modal-description', 'gif-desc-spacing');
    modalContent.appendChild(gifDescriptionElement);

    // Section pour la vidéo
    var videoTitleElement = document.createElement('h2');
    videoTitleElement.textContent = videoTitleText;
    videoTitleElement.classList.add('modal-title', 'video-title-spacing');
    modalContent.appendChild(videoTitleElement);

    if (videoUrl) {
        var videoElement = document.createElement('video');
        videoElement.setAttribute('controls', '');
        var sourceMP4 = document.createElement('source');
        sourceMP4.src = videoUrl;
        sourceMP4.type = 'video/mp4';
        videoElement.appendChild(sourceMP4);
        videoElement.classList.add('modal-video', 'video-spacing');
        modalContent.appendChild(videoElement);
    }

    var videoDescriptionElement = document.createElement('p');
    videoDescriptionElement.textContent = videoDescriptionText;
    videoDescriptionElement.classList.add('modal-description', 'video-desc-spacing');
    modalContent.appendChild(videoDescriptionElement);
    

 

    // Création de la rangée pour les deux images
    var newImageRow = document.createElement('div');
newImageRow.classList.add('new-row-spacing'); // Ajoute cette classe dans ton CSS pour l'espacement

// Chemins vers tes images
var imageUrl1 = '1.png'; // Chemin de ta première image
var imageUrl2 = '2.png'; // Chemin de ta deuxième image

// Création et ajout des deux nouvelles images à la rangée
var imageElement1 = document.createElement('img');
imageElement1.src = imageUrl1;
imageElement1.classList.add('modal-image', 'half-width'); // 'half-width' est une classe pour ajuster la largeur des images
newImageRow.appendChild(imageElement1);

var imageElement2 = document.createElement('img');
imageElement2.src = imageUrl2;
imageElement2.classList.add('modal-image', 'half-width');
newImageRow.appendChild(imageElement2);

// Ajout de la rangée d'images au contenu modal
modalContent.appendChild(newImageRow);

// Ajout de la vidéo sous les images
var newVideoUrl = "Voyage au centre de l'anal.mp4"; // Chemin de ta nouvelle vidéo
var videoElement = document.createElement('video');
videoElement.setAttribute('controls', 'true');
var sourceElement = document.createElement('source');
sourceElement.src = newVideoUrl;
sourceElement.type = 'video/mp4';
videoElement.appendChild(sourceElement);
videoElement.classList.add('modal-video');
modalContent.appendChild(videoElement);

// Ajout du titre de la nouvelle rangée
var newRowTitleElement = document.createElement('h2');
newRowTitleElement.textContent = 'Pink'; // Titre de ta nouvelle section
newRowTitleElement.classList.add('modal-title','new-row-title');
modalContent.insertBefore(newRowTitleElement, newImageRow); // Insère le titre avant la rangée d'images

// Ajout de la description sous la vidéo
var newRowDescriptionElement = document.createElement('p');
newRowDescriptionElement.textContent = 'Tests graphiques en p5js'; // Description de ta nouvelle section
newRowDescriptionElement.classList.add('modal-description','new-row-description');
modalContent.appendChild(newRowDescriptionElement); // Ajoute la description après la vidéo

// Affichage du modal
modal.style.display = 'flex';

}

function openModalProject7(imageUrl, videoUrl, titleText, descriptionText) {
    var modal = document.getElementById('modal');
    var modalContent = modal.querySelector('.modal-content');

    // Efface le contenu précédent
    modalContent.innerHTML = '';

    // Crée et ajoute le bouton de fermeture
    var closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    modalContent.appendChild(closeButton);

    // Crée et ajoute un titre en haut de la modale
    var titleElement = document.createElement('h2');
    titleElement.textContent = titleText;
    titleElement.classList.add('modal-title');
    modalContent.appendChild(titleElement);

    // Ajoute l'image si elle est fournie
    if (imageUrl) {
        var imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = "";
        imageElement.classList.add('modal-image');
        modalContent.appendChild(imageElement);
    }

    // Ajoute la vidéo si elle est fournie
    if (videoUrl) {
        var videoElement = document.createElement('video');
        videoElement.setAttribute('controls', '');
        var sourceMP4 = document.createElement('source');
        sourceMP4.src = videoUrl;
        sourceMP4.type = 'video/mp4';
        videoElement.appendChild(sourceMP4);
        videoElement.classList.add('modal-video');
        modalContent.appendChild(videoElement);
    }

    // Ajoute la description
    var descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = descriptionText;
    descriptionElement.classList.add('modal-description');
    descriptionElement.style.position = 'relative';
    descriptionElement.style.top = '20px'
    modalContent.appendChild(descriptionElement);

    // Affiche la modale
    modal.style.display = 'flex';
}



function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
});





