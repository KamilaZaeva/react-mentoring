import './MovieTile.css';

type MovieTileProps = {
    id: number;
    imageUrl: string;
    movieName: string;
    releaseYear: number;
    genres: string[];
    onClickMovie: (id: string) => void;
};

const MovieTile = ({ imageUrl, movieName, releaseYear, genres, onClickMovie }: MovieTileProps) => {
    const genresList = genres.join(', ');

    return (
        <button className="movieTile" onClick={() => onClickMovie(movieName)}>
            <img className="movieTile__poster" src={imageUrl} alt={movieName} />
            <div className="movieTile__name-container">
                <div className="movieName">{movieName}</div>
                <div className="movieYear">{releaseYear}</div>
            </div>
            <div className="movieGenres">{genresList}</div>
        </button>
    );
};

export default MovieTile;