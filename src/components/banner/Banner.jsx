import React, {useState,useEffect} from 'react';
import './banner.css';
import Rotate from '../rotate/Rotate';
import FloatingButton from '../floatingButton/FloatingButton';

const Banner = (props) => {
    let [fadeStyle,setFadeStyle] = useState({opacity:1});

    useEffect(() => {
        let timer = setTimeout(()=>{
            setFadeStyle({opacity:0.2, transform: 'translate(-50%, -50%) scale(1.15)'});            
        },1000*props.tStart);

        return () => clearTimeout(timer)
    },[]);

    return (
        <div className="banner">
            <div className="banner-logo">
                <img alt="spiree logo in banner" id="banner-logo" src={props.spireeLogo} style={fadeStyle}/>
                <Rotate t={props.tStart} speed={props.speed}>
                        <h1>- SPIREE -</h1>
                        <h1>- 100% MERINO WOOL -</h1>
                        <h1>- PRO SPORTSWEAR FOR WOMEN -</h1>
                </Rotate>
            </div>
        
            <FloatingButton src={props.arrowDown} speed='1' moveUp='9px' scale='1.1' name="arrow-down" alt='button down' />
        
        </div>
        ) 
}

export default Banner