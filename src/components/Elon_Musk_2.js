import React from 'react';
import '../styles/Elon_2.sass';
import photo from "../images/elon-2.png";
import {useTheme} from "../context/ThemeContext";

const Elon_Musk_2 = ({ isActive }) => {

    const { darkMode } = useTheme();


    return (
        <div className={`elon-frame_2 ${darkMode ? 'darkTheme' : ''} ${isActive ? 'active' : ''}`}>
            <img className='elon-picture_2' src={photo} alt="Elon Musk" />
        </div>
    );
};

export default Elon_Musk_2;
