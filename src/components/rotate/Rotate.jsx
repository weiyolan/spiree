import React, {useState, useEffect} from "react";
import './rotate.css';

const Rotate = ({children,speed}) => {
    let [rotation,setRotation] = useState(new Array(children.length).fill(0));
    let [lastRotation, setLastRotation] = useState(new Array(children.length).fill(0));
    
    // let [fadeIn,setFadeIn] = useState(false);
    // props.tStart
    // props.speed

    const oneRotation = (current,last) => {
        let newCurrent = new Array(last.length).fill(0);
        let newLast = new Array(last.length).fill(0);
        let noCurrent = !current.find(i=>i===1);
        let noLast = !last.find(i=>i===1);

        if (noCurrent && noLast) {
            newCurrent[0]=1;
        } else if (noLast) {
            newLast = current.map(i=>i);
        } else {
            newCurrent = showNext(last);
        };

        return [newCurrent,newLast]
    }

    const showNext = (lastArray) => {
        let i = lastArray.findIndex(el=>el===1);
        let newArray = new Array(lastArray.length).fill(0);

        if (i===-1 || i === lastArray.length-1) {
            newArray[0] = 1;
        } else {
            newArray[i+1] = 1;
        };

        return newArray
    }

    useEffect(() => {
        const timer = setInterval(() => {
            // console.log(`Rotation: ${rotation}, lastRotation: ${lastRotation}`)
            let [newRotation, newLastRotation] = oneRotation(rotation, lastRotation);
            // console.log(`Rotating... newCurrent: ${newRotation}, newLast: ${newLastRotation}.`);
            setRotation(newRotation);
            setLastRotation(newLastRotation);
            }, 1000*speed);
        return () => clearInterval(timer);
    },[rotation, lastRotation])

    return (
    <div>
        {children.map((child,i)=>(
            <div className="banner-element" id={`banner-${i}`} key={i} style={{opacity:rotation[i]}}>
                {child}
            </div>
            ))
        }
    </div>)
    
}

export default Rotate
