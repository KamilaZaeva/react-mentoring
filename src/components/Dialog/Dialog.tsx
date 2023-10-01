import './Dialog.css';

import { ReactNode } from 'react';

type DialogProps = {
    message: string | ReactNode;
    children: ReactNode;
    onClose: () => void;
};

const Dialog = ({ message, children, onClose }: DialogProps) => {
    return (
        <div className='dialog'>
            <h2 className='dialogTitle'>{message}</h2>
            {children}
            <span className='exitButton' onClick={() => onClose}></span>
        </div>
    );
};

export default Dialog;
