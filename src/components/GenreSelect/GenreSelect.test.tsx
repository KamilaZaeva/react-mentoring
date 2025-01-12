import { fireEvent, render, screen } from '@testing-library/react';

import GenreSelect from './GenreSelect';

describe('GenreSelect', () => {
    it("should render all genres passed in props'", () => {
        const listGenres = ['Action', 'Adventure', 'Comedy'];
        const { getByText } = render(
            <GenreSelect listGenres={listGenres} selectedGenre='' onSelect={() => {}} />,
        );

        listGenres.forEach((genre) => {
            const genreButton = getByText(genre);
            expect(genreButton).toBeInTheDocument();
        });
    });

    it('should highlight the selected genre passed in props', () => {
        const listGenres = ['Action', 'Adventure', 'Comedy'];
        const selectedGenre = 'Adventure';
        render(
            <GenreSelect
                listGenres={listGenres}
                selectedGenre={selectedGenre}
                onSelect={() => {}}
            />,
        );

        listGenres.forEach((genre) => {
            const genreButton = screen.getByText(genre);
            if (genre === selectedGenre) {
                expect(genreButton).toHaveClass('selected');
            } else {
                expect(genreButton).not.toHaveClass('selected');
            }
        });
    });

    it('should call "onChange" callback and pass correct genre in arguments after clicking on a genre button', () => {
        const listGenres = ['Action', 'Adventure', 'Comedy'];
        const onSelectMock = jest.fn();
        render(<GenreSelect listGenres={listGenres} selectedGenre='' onSelect={onSelectMock} />);

        listGenres.forEach((genre) => {
            const genreButton = screen.getByText(genre);
            fireEvent.click(genreButton);
            expect(onSelectMock).toHaveBeenCalledWith(genre);
        });
    });
});
