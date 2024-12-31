import React, { useState } from 'react';
import Arrow from './../img/down-arrow.png';
import './../styles/Header.css';
import './../styles/utilits.css';
import './../styles/App.css';

const Header: React.FC = () => {
    const [arrow, setArrow] = useState<boolean>(false);

    const toggleArrow = () => {
        setArrow(prevArrow => !prevArrow); 
    };

    return (
        <header className="header">
            <h1 className="header-title">5S Control</h1>
            <nav className={arrow ? "header-nav-mobile display-flex" : 'header-nav-mobile display-none'}>
                <a className="header-nav-link" href="#home">Главная</a>
                <a className="header-nav-link" href="#tasks">Задачи 5S</a>
                <a className="header-nav-link" href="#contacts">Контакты</a>
            </nav>

            <nav className="header-nav">
                <a className="header-nav-link" href="#home">Главная</a>
                <a className="header-nav-link" href="#tasks">Задачи 5S</a>
                <a className="header-nav-link" href="#contacts">Контакты</a>
            </nav>

            <img 
                onClick={toggleArrow} 
                className={`header-arrow ${arrow ? 'display-none' : ''}`} 
                src={Arrow} 
                alt="Переключить стрелку навигации"
            />
        </header>
    );
};

export default Header;
