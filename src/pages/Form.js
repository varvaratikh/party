import React, { useState } from 'react';
import '../styles/Form.sass';
import rec from "../images/rectangle.png";
import Darkrec from "../images/rectangle-dark.png";
import monkey1 from "../images/monkey1.png";
import monkey2 from "../images/monkey2.png";
import monkey3 from "../images/monkey3.png";
import monkey4 from "../images/monkey4.png";


import send from "../images/send.png";
import name from "../images/name.png";
import alc from "../images/alc.png";
import song from "../images/song.png";
import aler from "../images/aler.png";
import food from "../images/food.png";
import wish from "../images/wish.png";
import {useTheme} from "../context/ThemeContext";

const Form = () => {

    const { darkMode } = useTheme();

    const [formData, setFormData] = useState({
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
        answer6: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Ответы успешно отправлены!');
                setFormData({
                    answer1: '',
                    answer2: '',
                    answer3: '',
                    answer4: '',
                    answer5: '',
                    answer6: '',
                });
            } else {
                alert('Ошибка при отправке ответов.');
            }
        } catch (error) {
            alert('Ошибка при отправке данных на сервер.');
        }
    };

    //<img className='back-pic'
    //                  src={darkMode ? back_dark : back}
    //                  alt="back-picture"/>

    return (
        <div className={`form-container ${darkMode ? 'dark' : ''}`}>

            <img className='rec'
                 src={darkMode ? Darkrec : rec}/>

            <img className='monkey1' src={monkey1}/>
            <img className='monkey2' src={monkey2}/>
            <img className='monkey3' src={monkey3}/>
            <img className='monkey4' src={monkey4}/>

            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-column">

                        <label htmlFor="answer1">
                            <img className='name' src={name}/>
                        </label>
                        <input
                            type="text"
                            name="answer1"
                            value={formData.answer1}
                            onChange={handleChange}
                        />


                        <label htmlFor="answer2">
                            <img className='alc' src={alc}/>
                        </label>
                        <input
                            type="text"
                            name="answer2"
                            value={formData.answer2}
                            onChange={handleChange}
                        />


                        <label htmlFor="answer3">
                            <img className='song' src={song}/>
                        </label>
                        <input
                            type="text"
                            name="answer3"
                            value={formData.answer3}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-column right">
                        <label htmlFor="answer4">
                            <img className='aler' src={aler}/>
                        </label>
                        <input
                            type="text"
                            name="answer4"
                            value={formData.answer4}
                            onChange={handleChange}
                        />

                        <div className="answer5">
                            <label htmlFor="answer5">
                                <img className='food' src={food}/>
                            </label>
                            <input
                                type="text"
                                name="answer5"
                                value={formData.answer5}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="answer6">
                            <label htmlFor="answer6">
                                <img className='wish' src={wish}/>
                            </label>
                            <input
                                type="text"
                                name="answer6"
                                value={formData.answer6}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                </div>
                <button type="submit">
                    <img className='send' src={send}/>
                </button>
            </form>
        </div>
    );
};

export default Form;
