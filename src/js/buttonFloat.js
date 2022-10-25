export function buttonAnimation () {
    let arrow = document.getElementById('arrow-down');
    
    function upDown() {
        arrow.style.transform = 'translateY(9px)';
        // arrow.style.transform = '';
        setTimeout(()=>(arrow.style.transform = 'translateY(0px) scale(1.1)'), 1000)
    }

    upDown()
    setInterval(upDown, 2000)

}



// window.addEventListener("load",buttonAnimation)