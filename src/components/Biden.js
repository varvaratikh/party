import React from 'react';
import '../styles/Biden.sass';
import photo from "../images/biden.png";
import dark_photo from "../images/biden-dark.png";
import Biden_2 from "./Biden_2";
import {useTheme} from "../context/ThemeContext";

const Biden = ({ isActive }) => {

    const { darkMode } = useTheme();

    return (
        <div className={`biden-frame ${darkMode ? 'Dark' : ''} ${isActive ? 'active' : ''}`}>
            <div className='biden-content front'>
                <img className='biden-picture'
                     src={darkMode ? dark_photo : photo} alt="Joe Biden" />
            </div>
            <div className='biden-content back'>
                <Biden_2 />
            </div>
        </div>

    );
};

export default Biden;