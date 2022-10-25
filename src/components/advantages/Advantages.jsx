import React from 'react';
import './advantages.css';
import {dry3, flower1, merino, soft, temperatureRegulation} from '../../import';

const Advantages = () => {

    return (
        <div id="about" >             
            <h1 >Les advantages de la laine mérinos<hr/></h1>
            <div className="box advantage-container">
                <div className="advantage">
                    <img alt="merino wool is comfortable and soft" src={soft}/>
                    <h2>Douce</h2>
                    <p>La laine mérinos est confortable et douce. Les fibres sont fines et souples, ce qui leur permettent de ne pas entrer en contact avec ta peau et donc de ne pas te gratter.</p>
                    <hr/>
                </div>
                <div className="advantage" id="thermo">
                    <img alt="merino wool auto-regulates the temperature of the body" src={temperatureRegulation}/>
                    <h2>Thermorégulatrice</h2>
                    <p>La laine mérinos régule ta température corporelle, c'est une seconde peau qui te garde au chaud l'hiver et au frais l'été en fonction de son épaisseur, on appelle ça le grammage.</p>
                    <hr/>
                </div>
                <div className="advantage">
                    <img alt="no smells" src={flower1}/>
                    <h2>Résistante aux odeurs</h2>
                    <p>Elle présente un atout majeur pour les sportifs : être anti-odeurs. Cette laine après séchage peut être directement réutilisée sans être lavée à chaque utilisation.</p>
                    <hr/>
                </div>
                <div className="advantage">
                    <img alt="water evaporating" src={dry3}/>
                    <h2>Sèche rapidement</h2>
                    <p>En plus de sécher rapidement, elle est hydrophile. C'est-à-dire qu'elle va absorber l'eau sans que tu puisses le remarquer, ainsi tu auras la sensation d'être au sec.</p>
                    <hr/>
                </div>
                <div className="advantage">
                    <img alt="wool" src={merino}/>
                    <h2>Naturelle</h2>
                    <p>La laine mérinos est naturelle, elle vient de la tonte du mouton. En plus d'être naturelle, elle est donc renouvelable, biodégradable et consomme peu d'eau.</p>
                    <hr/>
                </div>
            </div>
        </div>
        ) 
}

export default Advantages