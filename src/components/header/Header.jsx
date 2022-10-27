import React from 'react';
import Logo from '../../assets/logo.svg';
import UserLogo from '../../assets/user-logo.svg';
import './header.css';

const Header = () => {
    return (
        <header className="header flex">
            <div className="header__logo flex">
                <img src={Logo} alt="" />
                <h1>Wrench CRM</h1>
            </div>
            <div className="header__user-logo flex">
                <img src={UserLogo} alt="" />
                <span>Имя Фамилия</span>
            </div>
        </header>
    );
};

export default Header;
