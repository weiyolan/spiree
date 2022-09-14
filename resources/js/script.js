

let logo = document.getElementById('headerLogo');
let bigLogo = document.getElementById('banner-logo');



function setRandomColor() {
    let randomDegree = Math.floor(Math.random()*361);
    // let randomDegree2 = Math.floor(Math.random()*361);
    logo.style.filter = 'invert(57%) sepia(52%) saturate(4679%) hue-rotate(' + randomDegree + 'deg) brightness(93%) contrast(101%)';
    bigLogo.style.filter = 'invert(57%) sepia(52%) saturate(4679%) hue-rotate(' + randomDegree + 'deg) brightness(93%) contrast(101%)';

    // setTimeout(setRandomColor(),5000);
}

// logo.addEventListener('load',setRandomColor());

setInterval(setRandomColor,1000);

// LET APPEAR FORM AFTER CLICKING ON TITLE OR ON CONTACT ME
let form = document.getElementById('form1');
let titleButton = document.getElementById('stayInTouch');
let contactMe = document.getElementById('contactMe');

function formAppear() {
    form.style.display = 'block';
    // alert('Clicked!');
}

titleButton.addEventListener('click',formAppear);
contactMe.addEventListener('click',formAppear);

// alert('Page loaded')

// console.log(titleButton);

