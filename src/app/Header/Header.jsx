import React from 'react';
import logo from '/public/logo-copy-1.svg'
import contact from '/public/Group-7.png'
import Image from "next/image";

const Header = () => {
    return (
        <header className="header">
            <Image src={logo} alt="logo" className="logo" />
            <nav className="navigation">
                <ul className="nav-list">
                    <li className="nav-item active">
                        <a href="#about" className="nav-link">О нас</a>
                        <div className="nav-underline" />
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">Услуги</a>
                    </li>
                    <li className="nav-item">
                        <a href="#rent" className="nav-link">Аренда</a>
                    </li>
                </ul>
            </nav>
            <div className="contact-container">
                <Image className="contact-button" src={contact} alt="contact" />
            </div>
        </header>
    );
};

export default Header;