import React from 'react';
import './CTA.css';

const CTA = ({formAppear}) => {

    return (
        <div id="contact">
            <h1 id="stayInTouch" onClick={formAppear}>Keep in touch!<hr/></h1>
        
            <div className=" box">
                <p>
                Les vêtements sont en cours de design. Patiente encore un petit peu et tu pourras faire partie des premières utilisatrices ! Pour pouvoir suivre l'avancement, connecte toi sur le compte instagram.
                </p>
            </div>

        </div>
    )
}

export default CTA