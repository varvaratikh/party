import React from 'react';
import '../styles/Elon.sass';
import photo from "../images/elon.png";
import photo_dark from "../images/elon-dark.png";
import Elon_Musk_2 from "./Elon_Musk_2";
import { useTheme } from "../context/ThemeContext";

const Elon_Musk = ({ isActive }) => {
    const { darkMode } = useTheme();

    return (
        <div className={`elon-frame ${darkMode ? 'darking' : ''} ${isActive ? 'active' : ''}`}>
            <div className='elon-content front'>
                <img className='elon-picture'
                     src={darkMode ? photo_dark : photo} alt="Elon Musk" />
            </div>
            <div className='elon-content back'>
                <Elon_Musk_2 />
            </div>
        </div>
    );
};

export default Elon_Musk;
