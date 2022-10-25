import React,{useState} from 'react';
import './form.css';

const Form = (props) => {
    let [email,setEmail] = useState('');
    let [name,setName] = useState('');
    let [surname,setSurname] = useState('');

    const handleChange = (e) => {
        e.preventDefault();        
        props.updateValues(name,surname,email);
    }

    return (
        <form onChange={handleChange} onSubmit={props.handleSubmit} id={props.id}>
            <h2>Want to know when our collection becomes available?</h2>
            <div className="form__el">
                <label for="name">First Name:  </label>
                <input onChange={(e)=>setName(e.target.value)} name="name" id='name' type="text" value={name} required/> 

                <label for="surname">Last Name: </label>
                <input onChange={(e)=>setSurname(e.target.value)} name="surname" id='surname' type="text" value={surname} required/>  
            </div> 
            <div className="form__el">
                <label for="email">Email: </label>
                <input onChange={(e)=>setEmail(e.target.value)} name="email" id='email' type="email" value={email} required/>
            </div>
            
            <button id="submit" type="submit">Stay in Touch!</button>  
        </form>
    )
}

export default Form