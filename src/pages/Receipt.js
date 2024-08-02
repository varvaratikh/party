import React from 'react';
import '../styles/ReceiptPage.sass';
import back from "../images/back.png";
import burger from "../images/burger.png";
import pizza from "../images/pizza.png";
import receipt from "../images/receipt.png";
import shaurma from "../images/shaurma.png";


const Receipt = () => {

    return (
        <div className='receipt-container'>
            <img className='receipt-back' src={back} alt="back"/>
            <img className='burger' src={burger} alt="burger"/>
            <img className='pizza' src={pizza} alt="pizza"/>
            <img className='receipt' src={receipt} alt="burger"/>
            <img className='shaurma' src={shaurma} alt="shaurma"/>
        </div>
    );
};

export default Receipt;