import React from 'react';
import '../styles/GeniusComponent.sass';
import gen from "../images/genius.png";
import { useTheme } from "../context/ThemeContext";

const WhoIsGenius = () => {
    const { darkMode } = useTheme();

    return (
        <div className={`phrase ${darkMode ? 'dark-mode' : ''}`}>
            <img className='genius' src={gen} alt="phrase" />
        </div>
    );
};

export default WhoIsGenius;
