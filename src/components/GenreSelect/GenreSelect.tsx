import './GenreSelect.css';

import Button from '../Button/Button';

type GenreSelectProps = {
    listGenres: string[];
    selectedGenre: string;
    onSelect: (genre: string) => void;
};

const GenreSelect = ({ listGenres, selectedGenre, onSelect }: GenreSelectProps) => {
    const genreItems = listGenres.map((genre) => {
        const className = 'genreItem' + (genre === selectedGenre ? ' selected' : '');
        return (
            <Button
                key={genre}
                onClick={() => onSelect(genre)}
                title={genre}
                className={className}
            />
        );
    });

    return <div className='genresContainer'>{genreItems}</div>;
};

export default GenreSelect;
