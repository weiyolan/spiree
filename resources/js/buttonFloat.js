let arrow = document.getElementById('arrow-down');


function upDown() {
    arrow.style.transform = 'translateY(6px)';
    setTimeout(()=>(arrow.style.transform = 'translateY(0px)'), 1000)
}

function buttonAnimation() {
    upDown()
    setInterval(upDown, 2000)
}

window.addEventListener("load",buttonAnimation)