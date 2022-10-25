import React,{useState,useRef,useEffect} from 'react';
import './App.css';

import {FadeInSection, Navbar,Banner,Lightbox,Footer,Advantages,CTA,Story, Collection, Statement} from './components';
import {arrowDown, SpireeLogoWhite} from './import';

const App = () => {
    let [lightboxFlag, setLightboxFlag] = useState(false);

    const formAppear = () => {
        setLightboxFlag(true);
    };

    const formDissapear = () => {
        setLightboxFlag(false);
    };

    const lightboxEffect = (event) => {
        if (lightboxFlag && event.target === document.getElementById('light-box')) {
            formDissapear();
        };
    };

  return (
    <div className='App' onClick={lightboxEffect} >
        
        <Navbar formAppear={formAppear} spireeLogo={SpireeLogoWhite}/>
        
        <main id="home">
            
            <Banner tStart={0.8} speed={1.2} spireeLogo={SpireeLogoWhite} arrowDown={arrowDown}/>
            
            <FadeInSection>
                <Statement />
            </FadeInSection>

            <FadeInSection>
                <Advantages/>
            </FadeInSection>

            <FadeInSection> 
                <Collection/> 
            </FadeInSection>

            <FadeInSection>
                <Story />
            </FadeInSection>

            <FadeInSection>        
                <CTA formAppear={formAppear}/>
            </FadeInSection>

            <Lightbox flag={lightboxFlag} handleClick={formDissapear}/>
            
        </main>

        <Footer />
        
    </div>
  )
}

export default App