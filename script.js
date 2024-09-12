// Liste des images disponibles pour le jeu
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
	'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
	'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
	'images/image10.jpg',
    'images/image11.jpg',
    'images/image12.jpg',
	'images/image13.jpg',
    'images/image14.jpg',
	'images/image15.jpg',
    'images/image16.jpg',
	'images/image17.jpg',
    'images/image18.jpg',
	'images/image19.jpg',
    'images/image20.jpg'
    // Ajoute ici d'autres chemins d'images si nécessaire
];

let usedImages = []; // Tableau pour suivre les images déjà affichées

// Fonction pour démarrer le jeu
function startGame() {
    document.getElementById('start-screen').classList.remove('visible');
    document.getElementById('game-screen').classList.add('visible');
    getRandomImage();
}

// Fonction pour obtenir une image aléatoire qui n'a pas encore été affichée
function getRandomImage() {
    if (usedImages.length === images.length) {
        document.getElementById('game-screen').classList.remove('visible');
        document.getElementById('end-screen').classList.add('visible');
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (usedImages.includes(randomIndex));

    usedImages.push(randomIndex);
    const currentImage = images[randomIndex];
    const imgElement = document.getElementById('character-image');
    imgElement.src = currentImage;
}

// Fonction appelée lorsque le bouton "Smash" est cliqué
function smash() {
    getRandomImage();
}

// Fonction appelée lorsque le bouton "Pass" est cliqué
function pass() {
    getRandomImage();
}

// Fonction pour redémarrer le jeu
function restart() {
    usedImages = [];
    document.getElementById('end-screen').classList.remove('visible');
    document.getElementById('start-screen').classList.add('visible');
}
