import React, { useState } from 'react';
import '../styles/HelloPage.sass';
import bckg from '../images/bckg.png'
import dog from '../images/Dog.png'
import word from '../images/party.png'


const Hello = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };


    return (
        <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
            <img className='back-img' src={bckg} alt="background-image"/>
            <img className='dog-img' src={dog} alt="dog" onClick={toggleDarkMode} />
            <img className='party-word' src={word} alt="dog" />
        </div>
    );
};

export default Hello;
