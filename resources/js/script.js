let logo = document.getElementById('headerLogo');

function randomDegree() {
    return Math.floor(Math.random()*361);
}

function setRandomColor() {
    logo.style.filter = 'invert(57%) sepia(52%) saturate(4679%) hue-rotate(' + randomDegree() + 'deg) brightness(93%) contrast(101%)';
    setTimeout(setRandomColor(),500);
}

logo.addEventListener('load',setRandomColor());

// setInterval(logo.addEventListener('load',setRandomColor),500);