import React from 'react';
import '../styles/AlgorithmPage.sass';
import photo from "../images/Circle-al.png";
import photo_dark from "../images/Circle-al-dark.png";
import text_alg from "../images/text-alg.png";
import { useTheme } from "../context/ThemeContext";


const Algorithm = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`algorithm-container ${darkMode ? 'dark' : ''}`}>
            <img className='circle-alg'
                 src={darkMode ? photo_dark : photo} alt="circle"/>
            <img className='text-alg' src={text_alg} alt="text"/>
        </div>
    );
};

export default Algorithm;
