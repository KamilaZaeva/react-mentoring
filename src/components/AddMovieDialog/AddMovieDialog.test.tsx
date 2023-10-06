import React from 'react';
import { render } from '@testing-library/react';

import AddMovieDialog from './AddMovieDialog';
import { MovieDialogType } from '../EditMovieDialog/EditMovieDialog';

describe('AddMovieDialog Component', () => {
    const mockProps: MovieDialogType = {
        title: 'Add Movie',
        onClose: jest.fn(),
        onSubmit: jest.fn(),
        onReset: jest.fn(),
    };

    it('renders with correct title', () => {
        const { getByText } = render(<AddMovieDialog {...mockProps} />);
        expect(getByText('Add Movie')).toBeInTheDocument();
    });
});
