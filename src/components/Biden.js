import React from 'react';
import '../styles/Biden.sass';
import photo from "../images/biden.png";
import Biden_2 from "./Biden_2";

const Biden = ({ isActive }) => {
    return (
        <div className={`biden-frame ${isActive ? 'active' : ''}`}>
            <div className='biden-content front'>
                <img className='biden-picture' src={photo} alt="Joe Biden" />
            </div>
            <div className='biden-content back'>
                <Biden_2 />
            </div>
        </div>

    );
};

export default Biden;