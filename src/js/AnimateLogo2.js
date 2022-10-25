//----Logo animation
import React from 'react';
import {buttonAnimation} from './buttonFloat.js';
import {useEffect} from 'react';

export const AnimateLogo = () => {
    var logo = document.getElementById("banner-logo");
    var text = document.querySelectorAll(".banner-element");
    var t = 1000;
    var speed = 1.6;

    const logoToBack = () => {
        logo.style.filter="none"; 
        logo.style.opacity=0.2;

        // let logoBackStyle = {filter:"none",opacity:0.2}
    };

    const textRotate = () => {
        // for (let i=0; i < text.length; i++) {
        //     console.log(text[i])
        // }
        for (let i=0; i < text.length; i++) {
            
            setTimeout(() => {
                text[i].style.opacity=1;
                // let textInStyle= {opacity:1};
            }, 
            t*i*2*speed);
            
            setTimeout(() => {
                text[i].style.opacity=0;
                // let textOutStyle= {opacity:0};

            }, 
            t*(i*2+1)*speed);
            // setTimeout(() => {
            //     text[i].style.opacity=1;
            // }, t);
        };
    }
    
    const TextAnimation = () => {
        React.useEffect(()=>{
            textRotate();
            let timer = setInterval(textRotate,t*6*speed);
            return clearInterval(timer);
        })
        
    };

    useEffect(
        ()=>{
         let timer = setTimeout(logoToBack, t*1);
         return clearTimeout(timer);
        },[]);

    useEffect( ()=> {
        let timer = setTimeout(TextAnimation, t*1.8);
        return clearTimeout(timer);
    });
    

    buttonAnimation();
}

// window.addEventListener("load",animateLogo);