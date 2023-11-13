import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieTile from './MovieTile';
import { BrowserRouter as Router } from 'react-router-dom';

const mockOnClick = jest.fn();

describe('MovieTile', () => {
    // Mock the react-router-dom module
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => jest.fn(),
    }));

    const props = {
        id: 123,
        imageUrl: 'https://example.com/image.jpg',
        movieName: 'The Movie',
        releaseYear: 2023,
        genres: ['Action', 'Drama'],
        onClickMovie: mockOnClick,
    };

    it('should renders correctly', () => {
        const { getByText, getByAltText } = render(
            <Router>
                <MovieTile {...props} />
            </Router>,
        );

        expect(getByText(props.movieName)).toBeInTheDocument();
        expect(getByText(props.releaseYear)).toBeInTheDocument();
        expect(getByText(props.genres.join(', '))).toBeInTheDocument();
        expect(getByAltText(props.movieName)).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        const { container } = render(
            <Router>
                <MovieTile {...props} />
            </Router>,
        );

        userEvent.click(container.querySelector('.movieTile')!);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(mockOnClick).toHaveBeenCalledWith(props.id);
    });
});
