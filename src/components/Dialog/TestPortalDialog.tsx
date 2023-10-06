import { useState } from 'react';

import Dialog from './Dialog';

const TestPortalDialog = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)}>Show dialog using a portal</button>
            {showModal && (
                <Dialog
                    title='Portal Dialog'
                    children={<p>Simple text here</p>}
                    onClose={() => {
                        console.log('close');
                        setShowModal(false);
                    }}
                />
            )}
        </>
    );
};

export default TestPortalDialog;
