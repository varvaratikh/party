import React from 'react';
import '../styles/Footer.sass';
import footer_art from "../images/footer_art.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <img className='footer_art' src={footer_art}/>
        </div>
    );
};

export default Footer;
