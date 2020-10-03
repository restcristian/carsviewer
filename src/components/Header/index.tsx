import React, { FC } from 'react';
import Logo from '../../assets/img/logo.svg';
import './Header.scss';

const Header: FC = () => {
    return (
        <header className="Header">
            <nav className="Header__nav">
                <div>
                    <img src={Logo} alt="Friday Logo" />
                </div>
            </nav>
        </header>
    );
};

export default Header;
