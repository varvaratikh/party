import React from 'react';
import '../styles/InfoSectionComponent.sass';
import inf from "../images/InfoText.png";
import star1 from "../images/star1.png";
import star2 from "../images/star2.png";
import {useTheme} from "../context/ThemeContext";



const InfoSection = () => {

    const { darkMode } = useTheme();
    return (
        <div className={`use-info ${darkMode ? 'dark-info' : ''}`}>
            <img className='information' src={inf} alt="phrase"/>
            <img className='star-1' src={star1} alt="star-1"/>
            <img className='star-2' src={star2} alt="star-2"/>
        </div>
    );
};

export default InfoSection;