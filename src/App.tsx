import './App.css';
import './colors.css';

import Counter from './components/Counter/Counter';
import SearchForm from './components/SearchForm/SearchForm';
import GenreSelect from './components/GenreSelect/GenreSelect';
import MovieTile from './components/MovieTile/MovieTile';

import { GENRES, MOVIES } from './consts';

function App() {
    const searchMovieByName = (name: string): void => {
        // TODO: will be implemented in future modules
        console.log('Search movies with name:', name);
    };

    const showGenreMovies = (selectedGenre: string): void => {
        // TODO: will be implemented in future modules
        console.log('Show movies of', selectedGenre, 'genre');
    };

    return (
        <div className='App'>
            <Counter initialValue={0} />
            <SearchForm initialValue='' searchMovie={(name: string) => searchMovieByName(name)} />
            <GenreSelect
                selectedGenre='all'
                listGenres={GENRES}
                onSelect={(genre: string) => showGenreMovies(genre)}
            />
            <div className='moviesList'>
                {MOVIES.map((movie) => {
                    return (
                        <MovieTile
                            onClickMovie={(name) => console.log(name)}
                            genres={movie.genres}
                            movieName={movie.movieName}
                            id={movie.id}
                            imageUrl={movie.imageUrl}
                            releaseYear={movie.releaseYear}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
