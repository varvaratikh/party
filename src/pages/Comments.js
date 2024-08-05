import React from 'react';
import '../styles/Comments.sass';
import comments_back from "../images/comments-back.png";
import comments_text from "../images/comments-text.png";


const Comments = () => {

    return (
        <div className='comments-container'>
            <img className='comments_back' src={comments_back}/>
            <img className='comments_text' src={comments_text}/>
        </div>

    );
};

export default Comments;
