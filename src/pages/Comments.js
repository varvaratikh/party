import React from 'react';
import '../styles/Comments.sass';
import comments_back from "../images/comments-back.png";
import comments_back_dark from "../images/comments_back_dark.png";
import comments_text from "../images/comments-text.png";
import comments_text_dark from "../images/comments_text_dark.png";
import {useTheme} from "../context/ThemeContext";



const Comments = () => {

    const { darkMode } = useTheme();

    return (
        <div className='comments-container'>
            <img className='comments_back'
                 src={darkMode? comments_back_dark: comments_back}/>
            <img className='comments_text'
                 src={darkMode? comments_text_dark : comments_text}/>
        </div>

    );
};

export default Comments;
