import React from 'react';
import '../styles/AboutPage.sass';
import photo from "../images/Photo.png";
import text from "../images/text.png";

const About = () => {

    return (
        <div className='info'>
            <img className='my-picture' src={photo} alt="my photo"/>
            <img className='text' src={text} alt="info about me"/>
        </div>

    );
};

export default About;
