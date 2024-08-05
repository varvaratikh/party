import React from 'react';
import '../styles/AboutPage.sass';
import photo from "../images/Photo.png";
import darkPhoto from "../images/darkPhoto.png";
import text from "../images/text.png";
import {useTheme} from "../context/ThemeContext";

const About = () => {

    const { darkMode } = useTheme();

    return (
        <div className={`info ${darkMode ? 'dark' : ''}`}>
            <img className='my-picture'
                 src={darkMode ? darkPhoto : photo}
                 alt="my photo"/>
            <img className='text' src={text} alt="info about me"/>
        </div>

    );
};

export default About;
