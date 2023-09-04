import './GenreSelect.css';
import {useState} from "react";
import {Button} from "../Button/Button";

export function GenreSelect({listGenres, selectedGenre, onSelect}) {
    const [activeGenre, setActiveGenre] = useState(selectedGenre);

    function onGenreClick(genre) {
        setActiveGenre(genre);
        onSelect(genre);
    }

    const genreItems = listGenres.map(genre => {
        const className = 'genreItem' + (genre === activeGenre ? ' selected' : '');
        return (
            <Button key={genre} onClick={() => onGenreClick(genre)} title={genre} className={className}>
            </Button>
        );
    });

    return <div className="genresContainer">{genreItems}</div>
}