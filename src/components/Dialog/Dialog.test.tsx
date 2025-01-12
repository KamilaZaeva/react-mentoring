import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dialog from './Dialog'; // Import your Dialog component

describe('Dialog Component', () => {
    it('renders with title and children', () => {
        const { getByText } = render(
            <Dialog title="Test Dialog" onClose={() => {}}>
                <p>Dialog Content</p>
            </Dialog>
        );

        expect(getByText('Test Dialog')).toBeInTheDocument();
        expect(getByText('Dialog Content')).toBeInTheDocument();
    });

    it('calls onClose callback when exit button is clicked', () => {
        const onCloseMock = jest.fn();
        const { getByTestId } = render(<Dialog title="Test Dialog" onClose={onCloseMock} />);

        const exitButton = getByTestId('exit-button');
        fireEvent.click(exitButton);

        expect(onCloseMock).toHaveBeenCalled();
    });

    it('renders with string title', () => {
        const { getByText } = render(<Dialog title="String Title" onClose={() => {}} />);
        expect(getByText('String Title')).toBeInTheDocument();
    });
});
