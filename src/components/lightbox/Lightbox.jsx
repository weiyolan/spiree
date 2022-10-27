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
    let [loading,setLoading] = useState(false);

    let [email,setEmail] = useState('');
    let [name,setName] = useState('');
    let [surname,setSurname] = useState('');

    // useEffect(()=>{
    //     console.log('UseEffect:')
    //     console.log(email);
    //     console.log(name);
    //     console.log(surname);
    // },[email,surname,name])

    const submitForm = async (name,surname,email) => {
        console.log('submitting form')

        setEmail(email);
        setName(name);
        setSurname(surname);
        setLoading(true);
    }



    useEffect(()=>{
        async function trySubmit() {
            try {
                setSubmitted(true);
    
                let response;
                response = await fetch(`/.netlify/functions/saveEmail?email=${email}&name=${name}&surname=${surname}`);
                
                setSuccess(true);
                console.log(response);
    
            } catch (error) {
                setSuccess(false);
                console.log('ERROR:')
                console.log(error);
    
            } finally {
                setLoading(false);
            }
        }
        
        if (loading) {
            trySubmit();
        }
    },[loading])

    return (
        <div className="light-box" id="light-box" style={lightboxStyle}>
            <div className="form_container">
                <span className="close" id="close" onClick={handleClick}>&times;</span>
                
                {!submitted && <Form handleSubmit={submitForm} id="contact-form"/>}

                {submitted && loading && <div className="form-message">
                    <br/>
                    <h2>Loading...</h2> 
                </div>}

                {submitted && !loading && success && <div className="form-message">
                    <h2>{`Hey ${name}, that's a success`}!</h2> 
                    <h4>You submitted the following email address:</h4>
                    <p>{email}</p>
                    <h3>We will send you a message when our collection becomes available.</h3>
                </div>}

                {submitted && !loading && !success && <div className="form-message">
                    <h2>Jeez! That didn't work.</h2>
                    <h3>Please refresh the page and try again.</h3>
                </div>}
            </div>
        </div>
    )
}

export default Lightbox