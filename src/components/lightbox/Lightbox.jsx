import React from 'react';
import { useEffect,useState } from 'react';
import Form from '../form/Form'
import './lightbox.css';

const Lightbox = ({handleClick,flag}) => {
    let [lightboxStyle, setLightboxStyle] = useState({visibility:'hidden', opacity:0});
    
    const toggleStyle = (styleFlag) => {
        setLightboxStyle(styleFlag?{visibility:'visible',opacity:1}:{visibility:'hidden', opacity:0})
    };

    useEffect(()=>{
        toggleStyle(flag);
    }, [flag]);

    let [submitted,setSubmitted] = useState(false);
    let [success, setSuccess] = useState(false);
    let [email,setEmail] = useState('');
    let [name,setName] = useState('');
    let [surname,setSurname] = useState('');

    const updateValues = (name,surname,email) => {
        if (email) {setEmail(email)};
        if (name) {setName(name.charAt(0).toUpperCase() + name.slice(1))};
        if (surname) {setSurname(surname.charAt(0).toUpperCase() + surname.slice(1))};
    };

    const headers_ = {
        'Authorization': 'Bearer keyoGVRavQjrgVp6e',
        'Content-Type': 'application/json'
    };

    const submitForm = async (e) => {
        updateValues(name,surname,email);
        e.preventDefault();
        try {
            const response = await fetch("https://api.airtable.com/v0/appITs3uxExXOohSN/Sheet1",{
                method: 'POST',    
                body: JSON.stringify(
                    {
                        records: [
                        {
                            fields: {
                                email: email,
                                name: name,
                                surname: surname,
                            }
                        }
                        ]
                    }),
                headers: headers_
            }); 

            console.log(response);

            setSubmitted(true);
            setSuccess(true);

        } catch (error) {
            console.log(error);

            setSubmitted(true);
            setSuccess(false);
        }
    };

    return (
        <div className="light-box" id="light-box" style={lightboxStyle}>
            <div className="form_container">
                <span className="close" id="close" onClick={handleClick}>&times;</span>
                
                {!submitted && <Form updateValues={updateValues} handleSubmit={submitForm} id="contact-form"/>}

                {submitted && success && <div className="form-message">
                    <h2>{`Hey ${name}, that's a success`}!</h2> 
                    <h4>You submitted the following email address:</h4>
                    <p>{email}</p>
                    <h3>We will send you a message when our collection becomes available.</h3>
                </div>}

                {submitted && !success && <div className="form-message">
                    <h2>Jeez! That didn't work.</h2>
                    <h3>Please refresh the page and try again.</h3>
                </div>}
            </div>
        </div>
    )
}

export default Lightbox