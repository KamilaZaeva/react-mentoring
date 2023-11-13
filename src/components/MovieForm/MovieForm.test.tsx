import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieForm, { MovieFormProps } from './MovieForm';
import { BrowserRouter as Router } from 'react-router-dom';

describe('MovieForm Component', () => {
    // Mock the react-router-dom module
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => jest.fn(),
    }));

    const mockMovie = {
        id: 337167,
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

    it('renders with correct movie data', () => {
        const { getByLabelText } = render(
            <Router>
                <MovieForm movie={mockMovie} />
            </Router>,
        );

        expect(getByLabelText('Title')).toHaveValue(mockMovie.movieName);
        expect(getByLabelText('Release date')).toHaveValue(String(mockMovie.releaseYear));
        expect(getByLabelText('Movie url')).toHaveValue(mockMovie.imageUrl);
        expect(getByLabelText('Rating')).toHaveValue(mockMovie.voteAverage);
        expect(getByLabelText('Genre')).toHaveValue(mockMovie.genre);
        expect(getByLabelText('Runtime')).toHaveValue(String(mockMovie.duration));
        expect(getByLabelText('Overview')).toHaveValue(mockMovie.description);
    });
});
