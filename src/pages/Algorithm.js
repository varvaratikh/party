import React from 'react';
import '../styles/AlgorithmPage.sass';
import photo from "../images/Circle-al.png";
import text_alg from "../images/text-alg.png";


const Algorithm = () => {

    return (
        <div className="algorithm-container">
            <img className='circle-alg' src={photo} alt="circle"/>
            <img className='text-alg' src={text_alg} alt="text"/>
        </div>
    );
};

export default Algorithm;
