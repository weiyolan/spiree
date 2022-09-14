//----Change logo color with interval of x seconds. 

// let logo = document.getElementById('headerLogo');
// let bigLogo = document.getElementById('banner-logo');
// function setRandomColor() {
//     let randomDegree = Math.floor(Math.random()*361);
//     // let randomDegree2 = Math.floor(Math.random()*361);
//     logo.style.filter = 'invert(57%) sepia(52%) saturate(4679%) hue-rotate(' + randomDegree + 'deg) brightness(93%) contrast(101%)';
//     bigLogo.style.filter = 'invert(57%) sepia(52%) saturate(4679%) hue-rotate(' + randomDegree + 'deg) brightness(93%) contrast(101%)';

//     // setTimeout(setRandomColor(),5000);
// }
// setInterval(setRandomColor,1000);

//----Let form appear after clicking certain elements.
let form = document.getElementById('form1');
let titleButton = document.getElementById('stayInTouch');
let contactMe = document.getElementById('contactMe');

function formAppear() {
    form.style.display = 'block';
    // alert('Clicked!');
}

titleButton.addEventListener('click',formAppear);
contactMe.addEventListener('click',formAppear);



