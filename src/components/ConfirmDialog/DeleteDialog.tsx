import Dialog from '../Dialog/Dialog';
import Button from '../Button/Button';

import './DeleteDialog.css';

type DeleteDialogProps = {
    onClose: () => void;
    onConfirm: () => void;
};
export const DeleteDialog = ({ onClose, onConfirm }: DeleteDialogProps) => {
    return (
        <>
            <Dialog title='Delete movie' onClose={onClose}>
                <div className='deleteDialogBody'>
                    <span>Are you sure you want to delete this movie?</span>
                    <Button title='Confirm' onClick={onConfirm}></Button>
                </div>
            </Dialog>
        </>
    );
};
