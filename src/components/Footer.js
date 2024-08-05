import React from 'react';
import '../styles/Footer.sass';
import footer_art from "../images/footer_art.png";
import {useTheme} from "../context/ThemeContext";

const Footer = () => {

    const { darkMode } = useTheme();


    return (
        <div className={`footer-container ${darkMode ? 'back' : ''}`}>
            <img className='footer_art' src={footer_art}/>
        </div>
    );
};

export default Footer;
