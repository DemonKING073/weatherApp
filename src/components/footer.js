import React from 'react';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Instagram from '../assets/insta.svg';

const Footer= ()=>{
    
    return(
        <footer>
            <div className="logo-name small">Weather <span>App</span></div>
            <div className="icons">
                <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/chris.thapa.3762"><img src={Facebook} alt="facebook" /></a>    
                <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/dinbibek/"><img src={Instagram} alt="Instagram" /></a>  
                <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/ChrisThapa10"><img src={Twitter} alt="Twitter" /></a>  
            </div>
        </footer>
    );
}


export default Footer;