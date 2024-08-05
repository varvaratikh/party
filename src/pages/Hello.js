import React from 'react';
import '../styles/HelloPage.sass';
import bckg from '../images/bckg.png'
import bckgDark from '../images/bckgDark.png'
import dog from '../images/Dog.png'
import word from '../images/party.png'
import wordDark from '../images/wordDark.png'
import {useTheme} from "../context/ThemeContext";


const Hello = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
            <img
                className='back-img'
                src={darkMode ? bckgDark : bckg}
                alt="background-image"
            />
            <img
                className='dog-img'
                src={dog}
                alt="dog"
                onClick={toggleDarkMode}
            />
            <img
                className='party-word'
                src={darkMode ? wordDark : word}
                alt="party word"
            />
        </div>
    );
};

export default Hello;

