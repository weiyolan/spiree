//----Logo animation

const animateLogo = () => {
    var logo = document.getElementById("banner-logo");
    var text = document.querySelectorAll(".banner-element");
    var t = 1000;
    var speed = 2;

    const logoToBack = () => {
        logo.style.filter="none"; 
        logo.style.opacity=0.2;
    };

    const textRotate = () => {
        // for (let i=0; i < text.length; i++) {
        //     console.log(text[i])
        // }
        for (let i=0; i < text.length; i++) {
            
            setTimeout(() => {
                text[i].style.opacity=1;
            }, 
            t*i*2*speed);
            
            setTimeout(() => {
                text[i].style.opacity=0;
            }, 
            t*(i*2+1)*speed);
            // setTimeout(() => {
            //     text[i].style.opacity=1;
            // }, t);
        };
    }
    
    const textAnimation = () => {
        textRotate();
        setInterval(textRotate,t*6*speed);
    };

    setTimeout(logoToBack, t*2)
    setTimeout(textAnimation, t*4)
}

window.addEventListener("load",animateLogo);