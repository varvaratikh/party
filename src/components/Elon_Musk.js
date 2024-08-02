import React from 'react';
import '../styles/Elon.sass';
import photo from "../images/elon.png";
import Elon_Musk_2 from "./Elon_Musk_2";

const Elon_Musk = ({ isActive }) => {
    return (
        <div className={`elon-frame ${isActive ? 'active' : ''}`}>
            <div className='elon-content front'>
                <img className='elon-picture' src={photo} alt="Elon Musk" />
            </div>
            <div className='elon-content back'>
                <Elon_Musk_2 />
            </div>
        </div>
    );
};

export default Elon_Musk;
