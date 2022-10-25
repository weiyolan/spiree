import React, {useState,useEffect,useRef} from 'react';
import './fadeInSection.css';

const FadeInSection = (props) => {
    const domRef = useRef();
    // console.log(domRef.getBoundingClientRect().top)
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(entries => {
            // In your case there's only one element to observe:     
            if (entries[0].isIntersecting) {
                // Not possible to set it back to false like this:
                setVisible(true);
                
                // No need to keep observing:
                observer.unobserve(domRef.current);
            }
        });
        
        observer.observe(domRef.current);
        
        return () => observer.disconnect();
    }, []); 

    return (<section ref={ domRef } className={ `reveal chapter ${isVisible ? 'active' : '' }`}>{ props.children }</section>);
};

export default FadeInSection