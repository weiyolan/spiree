import React from 'react';
import './story.css';

const Story = () => {
    return (
        <div id="story">
            <h1>Comment tu rêves toi ?<hr/></h1>
            <div className="box">
                <p>Moi c'est en courant, en voyant défiler des paysages, des montagnes, des ruisseaux, des forêts. C'est en enfilant mes baskets et en découvrant le lever du soleil au petit matin que je rêve éveillée. Vous aussi ? Vous voulez partager celui-ci ? Il s'appelle Spirée et je sais que vous allez aimer.</p>
            </div>

            <div className="histoire">
                <div className="histoire title">
                <h1>La petite Histoire...</h1>
                </div>

                <div className="histoire text">
                <p>
                    Ce nom vient d'une petite fleur qui signifie volonté et obstination. Est-ce que ça reflète aussi ta mentalité lorsque tu es sur un sentier difficile ? En tous cas, Spirée espère que ses valeurs t'inspireront, que sa collection t'encouragera et te donnera de l'énergie pour courir en toute circonstance.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Story