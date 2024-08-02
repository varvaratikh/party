import React, { useState } from 'react';
import '../styles/GuestsPage.sass';
import Elon_Musk from "../components/Elon_Musk";
import Biden from "../components/Biden";

const Guests = () => {
    const [elonActive, setElonActive] = useState(false);
    const [bidenActive, setBidenActive] = useState(false);

    return (
        <div className="guests-container">
            <div onClick={() => setElonActive(!elonActive)}>
                <Elon_Musk isActive={elonActive} />
            </div>
            <div onClick={() => setBidenActive(!bidenActive)}>
                <Biden isActive={bidenActive} />
            </div>
        </div>
    );
};

export default Guests;
