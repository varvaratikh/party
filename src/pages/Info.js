import React from 'react';
import '../styles/InfoPage.sass';
import back from "../images/InfoPage/circle.png";
import whenPic from "../images/InfoPage/When.png";
import wherePic from "../images/InfoPage/Where.png";
import whyPic from "../images/InfoPage/Why.png";
import frame from "../images/InfoPage/frame.png";
import Jule from "../images/InfoPage/15Jule.png";
import group from "../images/InfoPage/group.png";

import cause from "../images/InfoPage/summer.png";
import circle from "../images/InfoPage/circle2.png";

const Info = () => {

    return (
        <div className='back'>
            <img className='back-pic' src={back} alt="back-picture"/>

            <div className='when'>
                <img className='frame' src={frame} alt="frame"/>
                <img className='date' src={Jule} alt="date"/>
            </div>

            <div className='where'>
                <img className='group' src={group} alt="group"/>
            </div>


            <div className='why'>
                <img className='cause' src={cause} alt="cause"/>
                <img className='circle' src={circle} alt="circle"/>
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
