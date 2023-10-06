import './Dialog.css';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type DialogProps = {
    title: string | ReactNode;
    children?: ReactNode;
    onClose: () => void;
};

const Dialog = ({ title, children, onClose }: DialogProps) => {
    return createPortal(
        <div className='dialog'>
            <h2 className='dialogTitle'>{title}</h2>
            {children}
            <span className='exitButton' onClick={onClose} data-testid="exit-button"></span>
        </div>,
        document.body,
    );
};

export default Dialog;
