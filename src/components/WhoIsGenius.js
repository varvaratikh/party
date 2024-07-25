import React from 'react';
import '../styles/GeniusComponent.sass';
import gen from "../images/genius.png";


const WhoIsGenius = () => {

    return (
        <div className='phrase'>
            <img className='genius' src={gen} alt="phrase"/>
        </div>
    );
};

export default WhoIsGenius;