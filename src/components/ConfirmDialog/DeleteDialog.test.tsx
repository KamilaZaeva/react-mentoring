import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DeleteDialog } from './DeleteDialog'; // Import your DeleteDialog component

describe('DeleteDialog Component', () => {
    const mockProps = {
        onClose: jest.fn(),
        onConfirm: jest.fn(),
    };

    it('renders with correct title and content', () => {
        const { getByText } = render(<DeleteDialog {...mockProps} />);
        expect(getByText('Delete movie')).toBeInTheDocument();
        expect(getByText('Are you sure you want to delete this movie?')).toBeInTheDocument();
    });

    it('calls onClose when Dialog is closed', () => {
        const { getByTestId } = render(<DeleteDialog {...mockProps} />);
        fireEvent.click(getByTestId('exit-button')); // Assuming your close button text is 'Cancel'
        expect(mockProps.onClose).toHaveBeenCalled();
    });

    it('calls onConfirm when Confirm button is clicked', () => {
        const { getByText } = render(<DeleteDialog {...mockProps} />);
        fireEvent.click(getByText('Confirm'));
        expect(mockProps.onConfirm).toHaveBeenCalled();
    });
});
