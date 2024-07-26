import React from 'react';
import '../styles/InfoPage.sass';
import back from "../images/InfoPage/circle.png";
import whenPic from "../images/InfoPage/When.png";
import wherePic from "../images/InfoPage/Where.png";
import whyPic from "../images/InfoPage/Why.png";


const Info = () => {

    return (
        <div className='back'>
            <img className='back-pic' src={back} alt="back-picture"/>
            <div className='when'>

            </div>

            <div className='where'>

            </div>

            <div className='why'>

            </div>

            <div className='questions'>
                <img className='pic-when' src={whenPic} alt="phrase"/>
                <img className='pic-where' src={wherePic} alt="phrase"/>
                <img className='pic-why' src={whyPic} alt="phrase"/>
            </div>
        </div>

    );
};

export default Info;
