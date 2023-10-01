import './App.css';
import './colors.css';

import { useState } from 'react';

// import Counter from './components/Counter/Counter';
import SearchForm from './components/SearchForm/SearchForm';
import GenreSelect from './components/GenreSelect/GenreSelect';
import MovieTile from './components/MovieTile/MovieTile';
import MovieDetails from './components/MovieDetails/MovieDetails';
import SortControl from './components/SortControl/SortControl';

import { GENRES, MOVIES } from './consts';
import EditMovieDialog from './components/EditMovieDialog/EditMovieDialog';
import { Movie } from './models/movie';

function App() {
    const [showDetailContainer, setShowDetailContainer] = useState(false);
    const [selectedMovieProps, setSelectedMovieProps] = useState({} as Movie);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const searchMovieByName = (name: string): void => {
        // TODO: will be implemented in future modules
        console.log('Search movies with name:', name);
    };

    const showGenreMovies = (selectedGenre: string): void => {
        // TODO: will be implemented in future modules
        console.log('Show movies of', selectedGenre, 'genre');
    };

    const openDetailInfo = (movieName: string): void => {
        const selectedMovie: Movie = MOVIES.filter((movie) => movie.movieName === movieName)[0];

        setSelectedMovieProps({
            imageUrl: selectedMovie.imageUrl,
            movieName: selectedMovie.movieName,
            releaseYear: selectedMovie.releaseYear,
            voteAverage: selectedMovie.voteAverage,
            description: selectedMovie.description,
            duration: selectedMovie.duration,
            genres: selectedMovie.genres,
        });

        setShowDetailContainer(true);
        setShowEditDialog(true);
    };

    const closeDetailInfo = (): void => {
        setShowDetailContainer(false);
    };

    const sortMoviesBy = (sortedBy: 'releaseDate' | 'title'): void => {
        if (sortedBy === 'releaseDate') {
            console.log('sorted by releaseDate');
        } else {
            console.log('sorted by title');
        }
    };

    const HeaderContainer = () => {
        return (
            <>
                {showDetailContainer ? (
                    <>
                        <span className='exitButton' onClick={() => closeDetailInfo()}></span>
                        <MovieDetails {...selectedMovieProps} />
                    </>
                ) : (
                    <div className='App__headerContainer'>
                        <div className='App__blurContainer'></div>
                        <h1 className='App__headerTitle'>FIND YOUR MOVIE</h1>
                        <SearchForm
                            initialValue=''
                            searchMovie={(name: string) => searchMovieByName(name)}
                        />
                    </div>
                )}
            </>
        );
    };

    return (
        <div className='App'>
            <div className='App__container'>
                <HeaderContainer />
                {/*<Counter initialValue={0} />*/}
                <main className='App__body'>
                    <div className='sortFilterLine'>
                        <GenreSelect
                            selectedGenre='all'
                            listGenres={GENRES}
                            onSelect={(genre: string) => showGenreMovies(genre)}
                        />
                        <SortControl
                            currentSelection='releaseDate'
                            onSortChange={(selectedSortValue: 'releaseDate' | 'title') =>
                                sortMoviesBy(selectedSortValue)
                            }
                        />
                    </div>
                    <div className='moviesList'>
                        {MOVIES.map((movie) => {
                            return (
                                <>
                                    <MovieTile
                                        key={movie.id}
                                        onClickMovie={(name) => openDetailInfo(name)}
                                        genres={movie.genres}
                                        movieName={movie.movieName}
                                        id={movie.id}
                                        imageUrl={movie.imageUrl}
                                        releaseYear={movie.releaseYear}
                                    />
                                </>
                            );
                        })}
                    </div>

                    {showEditDialog && (
                        <EditMovieDialog
                            onClose={() => setShowEditDialog(false)}
                            onReset={() => setShowEditDialog(false)}
                            movie={selectedMovieProps}
                            title='Edit movie'
                            onSubmit={(result) => console.log('submit: ', result)}
                        ></EditMovieDialog>
                    )}
                </main>
            </div>
        </div>
    );
}

export default App;
