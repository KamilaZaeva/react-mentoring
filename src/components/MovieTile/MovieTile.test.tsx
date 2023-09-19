import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieTile from './MovieTile';

const mockOnClick = jest.fn();

describe('MovieTile', () => {
    const props = {
        id: 123,
        imageUrl: 'https://example.com/image.jpg',
        movieName: 'The Movie',
        releaseYear: 2023,
        genres: ['Action', 'Drama'],
        onClickMovie: mockOnClick,
    };

    it('should renders correctly', () => {
        const { getByText, getByAltText } = render(<MovieTile {...props} />);

        expect(getByText(props.movieName)).toBeInTheDocument();
        expect(getByText(props.releaseYear)).toBeInTheDocument();
        expect(getByText(props.genres.join(', '))).toBeInTheDocument();
        expect(getByAltText(props.movieName)).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        const { container } = render(<MovieTile {...props} />);

        userEvent.click(container.querySelector('.movieTile')!);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
        expect(mockOnClick).toHaveBeenCalledWith(props.movieName);
    });
});