import React, { useState } from 'react';
import Arrow from './../img/down-arrow.png'

const Header: React.FC = () => {
    const [arrow, setArrow] = useState(false);
    
    const toggleArrow = () => {
        setArrow(!arrow);
    };
    return (
        <header className={`header ${arrow === false ? 'height-120': 'height-250' }`}>
            <h1 className="header-title">5S Control</h1>
            <nav className={arrow === true ? "header-nav-mobile display-flex" : 'header-nav-mobile display-none'}>
                <a className="header-nav-link" href="#home">Главная</a>
                <a className="header-nav-link" href="#tasks">Задачи 5S</a>
                <a className="header-nav-link" href="#contacts">Контакты</a>
            </nav>

            <nav className="header-nav">
                <a className="header-nav-link" href="#home">Главная</a>
                <a className="header-nav-link" href="#tasks">Задачи 5S</a>
                <a className="header-nav-link" href="#contacts">Контакты</a>
            </nav>

            <img onClick={toggleArrow} className={`header-arrow ${arrow === false ? '' : 'display-none'}`} src={Arrow} alt="" />
        </header>
    );
};

export default Header;

