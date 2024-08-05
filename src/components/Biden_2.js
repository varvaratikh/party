import React from 'react';
import '../styles/Biden_2.sass';
import photo from "../images/biden_2.png";
import {useTheme} from "../context/ThemeContext";

const Biden_2 = ({ isActive }) => {

    const { darkMode } = useTheme();

    return (
        <div className={`biden-frame_2 ${darkMode ? 'DArk' : ''} ${isActive ? 'active' : ''}`}>
            <img className='biden-picture_2' src={photo} alt="Joe Biden" />
        </div>
    );
};

export default Biden_2;
