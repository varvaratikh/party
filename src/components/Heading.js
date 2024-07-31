import React from 'react';
import '../styles/HeadingComp.sass';
import rubrik from "../images/rubrik.png";
import back_rubrik from "../images/back-rubrik.png";



const Heading = () => {

    return (
        <div className='conteiner'>
            <img className='back-rubrik' src={back_rubrik} alt="back"/>
            <img className='rubrik' src={rubrik} alt="phrase"/>
        </div>
    );
};

export default Heading;
