import './Button.css';

import React from 'react';

type ButtonProps = {
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button = ({ title, onClick, className, type }: ButtonProps) => {
    const fullClassName: string = 'myButton ' + (className ? className : '');

    return (
        <button type={type} className={fullClassName} onClick={(e) => onClick(e)}>
            {title}
        </button>
    );
};

export default Button;
