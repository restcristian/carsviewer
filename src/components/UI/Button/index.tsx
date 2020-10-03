import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
    onClick?: () => void;
    type: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({ children, isLoading, disabled, type }) => {
    const getContent = () => (isLoading ? 'Loading...' : children);

    return (
        <button type={type} className="Button" disabled={disabled}>
            {getContent()}
        </button>
    );
};

export default Button;
