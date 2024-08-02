import React from 'react';
import '../styles/Elon.sass';
import photo from "../images/elon.png";

const Elon_Musk = ({ isActive }) => {
    return (
        <div className={`elon-frame ${isActive ? 'active' : ''}`}>
            <img className='elon-picture' src={photo} alt="Elon Musk" />
        </div>
    );
};

export default Elon_Musk;
