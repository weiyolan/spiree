//----Change logo color with interval of x seconds.----

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

//----Let form appear after clicking certain elements.----

// let form = document.getElementById('form1');
// let titleButton = document.getElementById('stayInTouch');
// let contactMe = document.getElementById('contactMe');
//
// function formAppear() {
//     form.style.display = 'block';
// }
//
// titleButton.addEventListener('click',formAppear);
// contactMe.addEventListener('click',formAppear);

//----Let chapters appear on scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        };
    };
};

document.addEventListener("scroll", reveal);
// document.addEventListener("load",reveal);
// To check the scroll position on page load
// reveal();
