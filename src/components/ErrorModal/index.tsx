import React, { FC } from 'react';
import './ErrorModal.scss';

interface ErrorProps {
    hasError: boolean;
    message: string;
    onConfirm: () => void;
}

const ErrorModal: FC<ErrorProps> = ({ hasError, message, onConfirm }) => {
    return (
        <div className={`ErrorModal ${hasError ? 'ErrorModal--isOpen' : ''}`}>
            <div className="ErrorModal__content">
                <div className="ErrorModal__content-item">
                    <span className="ErrorModal__content-title">{message}</span>
                </div>
                <div className="ErrorModal__content-item">
                    <button onClick={onConfirm}>Retry</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;
