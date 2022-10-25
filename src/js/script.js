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

//----Let chapters appear on scroll
export function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var navbar = document.getElementById("navbar");
    // var navbarTop = navbar.getBoundingClientRect().top;
    // console.log(navbarTop);

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 40;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        };
    };

    if (window.visualViewport.pageTop > windowHeight-65) {
        navbar.classList.add("visbar");
    } else { navbar.classList.remove("visbar");
    };

};

// document.addEventListener("scroll", reveal);


// document.addEventListener("load",reveal);
// To check the scroll position on page load
// reveal();



