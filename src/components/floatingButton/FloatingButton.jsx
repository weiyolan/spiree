 import React, {useState,useEffect} from "react";
import './floatingButton.css';

 const FloatingButton = (props) => {
    const styleDown = {transform:`translateY(${props.moveUp})`};
    const styleUp = {transform: `translateY(0) scale(${props.scale})`};
    
    let [style,setStyle] = useState(styleDown);
    let [float,setFloat] = useState(false);

    function makeFloat () {
        setStyle(float?styleDown:styleUp);
        setFloat(!float);
    }

    useEffect(() => {
        const timer = setInterval(()=>makeFloat(), 1000*props.speed);

        return () => clearInterval(timer)
    });

    return (
        <div className={props.name} id={props.name} alt='button down' style={style}>
            <a href="#idioma-list">
                <img alt={props.alt} src={props.src}/>
            </a>
        </div>
    )
}

export default FloatingButton

