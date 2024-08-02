import React from 'react';
import '../styles/Biden.sass';
import photo from "../images/biden.png";

const Biden = ({ isActive }) => {
    return (
        <div className={`biden-frame ${isActive ? 'active' : ''}`}>
            <img className='biden-picture' src={photo} alt="Joe Biden" />
        </div>
    );
};

export default Biden;
