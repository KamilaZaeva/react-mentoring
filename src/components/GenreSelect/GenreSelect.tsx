import './GenreSelect.css';
import { useState } from 'react';
import { Button } from '../Button/Button';

type GenreSelectProps = {
    listGenres: string[];
    selectedGenre: string;
    onSelect: (genre: string) => void;
};

export const GenreSelect = ({ listGenres, selectedGenre, onSelect }: GenreSelectProps) => {
    const [activeGenre, setActiveGenre] = useState(selectedGenre);

    const onGenreClick = (genre: string): void => {
        setActiveGenre(genre);
        onSelect(genre);
    };

    const genreItems = listGenres.map((genre) => {
        const className = 'genreItem' + (genre === activeGenre ? ' selected' : '');
        return (
            <Button
                key={genre}
                onClick={() => onGenreClick(genre)}
                title={genre}
                className={className}
            />
        );
    });

    return <div className='genresContainer'>{genreItems}</div>;
};
