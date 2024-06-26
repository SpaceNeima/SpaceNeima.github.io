let symbols = ["@", "#", "&", "%", "$", "!", "?", "*", "+", "-", "=", "<", ">", "^", "(", ")", "{", "}", "[", "]", "|", ";", ":", ",", ".", "~", "_"];
let emojis = ["٩(＾◡＾)", "(¬‿¬)", "(｡♥‿♥｡)", "( ͡° ͜ʖ ͡°)", "ʕ•ᴥ•ʔ", "ಠ_ಠ", "(づ｡◕‿‿◕｡)づ", "(ノಠ益ಠ)ノ彡┻━┻", "(;´༎ຶД༎ຶ`)", "(；⌣̀_⌣́)", "☆ｏ(＞＜；)○", "(￣ ￣|||)", "(；￣Д￣)", "(￣□￣」)", "(＃￣0￣)", "(＃￣ω￣)", "(￢_￢;)", "(＞ｍ＜)", "(」°ロ°)」", "(〃＞＿＜;〃)", "(＾＾＃)", "(︶︹︺)", "(￣ヘ￣)", "<(￣ ﹌ ￣)>", "(￣︿￣)", "(＞﹏＜)", "(--_--)", "凸(￣ヘ￣)", "ヾ( ￣O￣)ツ", "(⇀‸↼‶)", "o(>< )o", "(」＞＜)」", "(ᗒᗣᗕ)՞", "(눈_눈)", "┌∩┐(◣_◢)┌∩┐", "୧((#Φ益Φ#))୨", "▓▒░(°◡°)░▒▓", " (＠´ー`)ﾉﾞ"];
let gridSize = 20;
let cols, rows;
let rectWidth, rectHeight;
let showEmoji = false;
let currentEmoji = "";
let blobSize = 200;
let angle = 0;

let bitmap = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  textSize(20);
  textAlign(CENTER, CENTER);
  updateGridDimensions();
}

function draw() {
  background(255);
  let startX = (width - rectWidth) / 2 - 190; // Décalé de 2 cm (environ 60 pixels)
  let startY = (height - rectHeight) / 2 + 55;

  // Pour les écrans MDPI (1366x768), ajuster les positions
  if (windowWidth <= 1366) {
    startX = (width - rectWidth) / 3; // Recentrer horizontalement
    startY = (height - rectHeight) / 3 + 70; // Recentrer verticalement avec un léger décalage vers le bas
  }

  // Pour les écrans tactiles, ajuster encore plus les positions
  if (window.matchMedia("(pointer: coarse)").matches) {
    startY = (height - rectHeight) / 3.5 + 40; // Recentrer verticalement avec un léger décalage vers le haut
    rectWidth = floor(width * 0.4); // Rendre la grille plus carrée
    rectHeight = floor(height * 0.5); // Rendre la grille plus carrée
    cols = floor(rectWidth / gridSize);
    rows = floor(rectHeight / gridSize);
  }

  // Ajout du quadrillage sur toute la page
  stroke(200);
  for (let x = startX; x <= startX + rectWidth; x += gridSize) {
    line(x, startY, x, startY + rectHeight);
  }
  for (let y = startY; y <= startY + rectHeight; y += gridSize) {
    line(startX, y, startX + rectWidth, y);
  }

  if (mouseX > startX && mouseX < startX + rectWidth && mouseY > startY && mouseY < startY + rectHeight) {
    if (!showEmoji) {
      let emojiIndex = floor(random(emojis.length));
      currentEmoji = emojis[emojiIndex];
    }
    showEmoji = true;
  } else {
    showEmoji = false;
  }

  if (showEmoji) {
    fill(0);
    textSize(40); // Ajuster la taille du texte pour les emojis
    text(currentEmoji, startX + rectWidth / 2, startY + rectHeight / 2);
  } else {
    textSize(20);
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        let posX = startX + x * gridSize;
        let posY = startY + y * gridSize;

        let symbol;
        let index = floor(random(symbols.length));
        symbol = symbols[index];

        let offset = map(sin(frameCount * 0.1 + x * 0.2 + y * 0.2), -1, 1, -5, 5);

        // Augmentation de la chance pour que le symbole s'échappe
        let escapeChance = random(1);
        if (escapeChance < 0.6) { // Augmenté à 60%
          offset += random(-50, 50);
        }

        fill(random(0, 55));
        text(symbol, posX + offset, posY + offset);
      }
    }
  }

  let bitmapSize, bitmapStartX, bitmapStartY;

  // Pour les écrans 4K, ajuster les positions et tailles
  if (windowWidth >= 3840 && windowHeight >= 2160) {
    bitmapSize = 30;
    bitmapStartX = startX + rectWidth - 500; // Déplacer le bitmap plus à gauche pour 4K
    bitmapStartY = startY - 400; // Déplacer le bitmap plus haut pour 4K

  } else if (windowWidth === 1920 && windowHeight === 1080) { // Positions pour les écrans 1080p
    bitmapSize = 18;
    bitmapStartX = startX + rectWidth - 10; // Ajuster la position du bitmap
    bitmapStartY = startY - 250; // Déplacer le bitmap plus haut

  } else if (window.devicePixelRatio > 1) { // Positions pour les écrans HiDPI
    bitmapSize = 15;
    bitmapStartX = startX + rectWidth - 100; // Ajuster la position du bitmap
    bitmapStartY = startY - 200; // Déplacer le bitmap plus haut
  
  } else { // Positions pour les écrans normaux
    bitmapSize = 10;
    bitmapStartX = startX + rectWidth + 10; // Ajuster la position du bitmap
    bitmapStartY = startY - 150; // Déplacer le bitmap beaucoup plus haut
  }

  let delay = 0.5;

  for (let i = 0; i < bitmap.length; i++) {
    for (let j = 0; j < bitmap[i].length; j++) {
      let frameToShow = i * bitmap[i].length + j * delay;

      if (frameCount > frameToShow) {
        if (bitmap[i][j] === 1) {
          fill(0); // Noir pour les '1' dans le bitmap
        } else {
          fill(255); // Blanc pour les '0'
        }
        noStroke();
        rect(bitmapStartX + j * bitmapSize, bitmapStartY + i * bitmapSize, bitmapSize, bitmapSize);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateGridDimensions();
}

function updateGridDimensions() {
  rectWidth = floor(width * 0.4);
  rectHeight = floor(height * 0.6);
  cols = floor(rectWidth / gridSize);
  rows = floor(rectHeight / gridSize);
}
