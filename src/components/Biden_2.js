import React from 'react';
import '../styles/Biden_2.sass';
import photo from "../images/biden_2.png";

const Biden_2 = ({ isActive }) => {
    return (
        <div className={`biden-frame_2 ${isActive ? 'active' : ''}`}>
            <img className='biden-picture_2' src={photo} alt="Joe Biden" />
        </div>
    );
};

export default Biden_2;
