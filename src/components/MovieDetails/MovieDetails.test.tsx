import { render } from '@testing-library/react';
import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
    const mockMovieDetailsProps = {
        imageUrl: 'https://example.com/movie-poster.jpg',
        movieName: 'Test Movie',
        releaseYear: 2021,
        rating: 8.5,
        duration: 125,
        description: 'A test movie for testing purposes.',
    };

    it('should renders correctly', () => {

        const { getByText, getByAltText } = render(<MovieDetails {...mockMovieDetailsProps} />);

        expect(getByText('Test Movie')).toBeInTheDocument();
        expect(getByText('2021')).toBeInTheDocument();
        expect(getByText('8.5')).toBeInTheDocument();
        expect(getByAltText('Test Movie')).toHaveAttribute('src', 'https://example.com/movie-poster.jpg');

    });
});