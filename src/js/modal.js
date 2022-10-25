export function modal() { 
    let lightbox = document.getElementById('light-box');
    let lighboxFlag = false;
    let titleButton = document.getElementById('stayInTouch');
    let contactMe = document.getElementById('contactMe');
    let cross = document.getElementById('close');

    const formAppear = () => {
        lightbox.style.visibility = 'visible';
        lightbox.style.opacity = 1;
        // window.addEventListener('click',lightboxEffect);
        lightboxFlag = true;
    };

    const formDissapear = () => {
        lightbox.style.visibility='hidden'; 
        lightbox.style.opacity=0;
        // window.removeEventListener('click', lightboxEffect);
        lightboxFlag = false;
    };

    const lightboxEffect = (event) => {
        // console.log(event.target)
        if (lightboxFlag && event.target === lightbox) {
            formDissapear();
        };
    };

    cross.addEventListener('click', formDissapear);
    titleButton.addEventListener('click',formAppear);
    contactMe.addEventListener('click',formAppear);

};

