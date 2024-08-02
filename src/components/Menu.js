import React from 'react';
import '../styles/Menu.sass';
import menu from "../images/menu.png";

const Menu = () => {

    return (
        <div className='menu'>
            <img className='menu-photo' src={menu} alt="menu"/>
        </div>
    );
};

export default Menu;