import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieForm, { MovieFormProps } from './MovieForm'; // Import your MovieForm component and MovieFormProps

describe('MovieForm Component', () => {
    const mockMovie = {
        id: 123456,
        movieName: 'Test Movie',
        releaseYear: 2022,
        movieUrl: 'http://example.com',
        voteAverage: '8.5',
        genre: 'horror',
        duration: 120,
        description: 'Test description',
        genres: [],
        imageUrl: '',
    };

    const mockProps: MovieFormProps = {
        movie: mockMovie,
    };

    it('renders with correct movie data', () => {
        const { getByLabelText } = render(<MovieForm movie={mockMovie} />);
        expect(getByLabelText('Title')).toHaveValue(mockMovie.movieName);
        expect(getByLabelText('Release date')).toHaveValue(String(mockMovie.releaseYear));
        expect(getByLabelText('Movie url')).toHaveValue(mockMovie.movieUrl);
        expect(getByLabelText('Rating')).toHaveValue(mockMovie.voteAverage);
        expect(getByLabelText('Genre')).toHaveValue(mockMovie.genre);
        expect(getByLabelText('Runtime')).toHaveValue(String(mockMovie.duration));
        expect(getByLabelText('Overview')).toHaveValue(mockMovie.description);
    });
});
