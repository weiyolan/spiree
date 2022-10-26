import React,{useState,useRef,useEffect} from 'react';
import './navbar.css';


const Navbar = (props) => {
    const ref = useRef();
    const [visible,setVisible] = useState(false);

    useEffect(()=>{
        // console.log(ref.current)
        let event = document.addEventListener('scroll',()=>{
            setVisible((window.visualViewport.pageTop >= window.visualViewport.height - ref.current.getBoundingClientRect().height)?true:false)
        });
        return () => {document.removeEventListener(event)}
        // console.log(visible);
    },[])

    return (
        <header className={visible?'visbar':''} ref={ref} id="navbar">
            <div className="header-left">
                <img alt="logo" src={props.spireeLogo}  id='headerLogo'/>
                    <nav>
                    <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#story">The Story</a></li>
                    <li><a id="contactMe" onClick={props.formAppear}>Stay in touch!</a></li>
                    </ul>
                </nav>
            </div>
            <div className="socials right" float="right" alt="instagram logo">
                <a target="_blank" href="https://www.instagram.com/spiree_officiel/"><i className='fa-brands fa-instagram fa-xl'></i></a>
            </div>
        </header>
    )
}

export default Navbar