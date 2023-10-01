import './Dialog.css';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
// import FocusTrap from 'focus-trap-react';

type DialogProps = {
    message: string | ReactNode;
    children?: ReactNode;
    onClose: () => void;
};

const Dialog = ({ message, children, onClose }: DialogProps) => {
    return createPortal(
        // <FocusTrap>
            <div className='dialog'>
                <h2 className='dialogTitle'>{message}</h2>
                {children}
                <span className='exitButton' onClick={onClose}></span>
            </div>,
        // </FocusTrap>,
        document.body,
    );
};

export default Dialog;
