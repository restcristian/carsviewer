import React, { FC } from 'react';
import Logo from '../../assets/img/logo.svg';
import FiltersForm from '../FiltersForm';
import './Header.scss';

const Header: FC = () => {
    return (
        <header className="Header">
            <nav className="Header__nav">
                <div>
                    <img src={Logo} alt="Friday Logo" />
                </div>
            </nav>
            <FiltersForm />
        </header>
    );
};

export default Header;
