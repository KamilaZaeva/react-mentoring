import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieForm, { MovieFormProps } from './MovieForm'; // Import your MovieForm component and MovieFormProps

describe('MovieForm Component', () => {
    const mockMovie = {
        movieName: 'Test Movie',
        releaseYear: 2022,
        movieUrl: 'http://example.com',
        voteAverage: 8.5,
        genre: 'horror',
        duration: 120,
        description: 'Test description',
        genres: [],
        imageUrl: '',
    };

    const mockProps: MovieFormProps = {
        movie: mockMovie,
        onSubmit: jest.fn(),
        onReset: jest.fn(),
    };

    it('renders with correct movie data', () => {
        const { getByLabelText } = render(<MovieForm {...mockProps} />);
        expect(getByLabelText('Title')).toHaveValue(mockMovie.movieName);
        expect(getByLabelText('Release date')).toHaveValue(String(mockMovie.releaseYear));
        expect(getByLabelText('Movie url')).toHaveValue(mockMovie.movieUrl);
        expect(getByLabelText('Rating')).toHaveValue(String(mockMovie.voteAverage));
        expect(getByLabelText('Genre')).toHaveValue(mockMovie.genre);
        expect(getByLabelText('Runtime')).toHaveValue(String(mockMovie.duration));
        expect(getByLabelText('Overview')).toHaveValue(mockMovie.description);
    });

    it('calls onReset when reset button is clicked', () => {
        const { getByText } = render(<MovieForm {...mockProps} />);
        fireEvent.click(getByText('Reset'));
        expect(mockProps.onReset).toHaveBeenCalled();
    });

    it('updates form data when input values change', () => {
        const { getByLabelText } = render(<MovieForm {...mockProps} />);
        const titleInput = getByLabelText('Title');
        fireEvent.change(titleInput, { target: { value: 'Updated Movie' } });
        expect(titleInput).toHaveValue('Updated Movie');
    });
});
