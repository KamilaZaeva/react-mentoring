import './MovieListPage.css';
import '../../colors.css';

import { useState } from 'react';

import GenreSelect from '../GenreSelect/GenreSelect';
import SortControl from '../SortControl/SortControl';
import MovieTile from '../MovieTile/MovieTile';
import EditMovieDialog from '../EditMovieDialog/EditMovieDialog';
import MovieDetails from '../MovieDetails/MovieDetails';
import SearchForm from '../SearchForm/SearchForm';

import { Movie } from '../../models/movie';

import { GENRES, MOVIES } from '../../consts';

const MovieListPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortCriterion, setSortCriterion] = useState('releaseDate');
    const [showDetailContainer, setShowDetailContainer] = useState(false);
    const [selectedMovieProps, setSelectedMovieProps] = useState({} as Movie);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const searchMovieByName = (name: string): void => {
        setSearchQuery(name);
        // TODO: will be implemented in future modules
        console.log('Search movies with name:', name);
    };

    const showGenreMovies = (selectedGenre: string): void => {
        // TODO: will be implemented in future modules
        console.log('Show movies of', selectedGenre, 'genre');
    };
    const openDetailInfo = (openMovieName: string): void => {
        const selectedMovie: Movie = MOVIES.filter((movie) => movie.movieName === openMovieName)[0];

        setSelectedMovieProps({ ...selectedMovie });

        toggleDetailedContainer();
        setShowEditDialog(true);
    };

    const toggleDetailedContainer = () => setShowDetailContainer((prevState) => !prevState);

    const sortMoviesBy = (sortedBy: 'releaseDate' | 'title'): void => {
        setSortCriterion(sortedBy);
        // if (sortedBy === 'releaseDate') {
        //     console.log('sorted by releaseDate');
        // } else {
        //     console.log('sorted by title');
        // }
    };
    const HeaderContainer = () => {
        return (
            <>
                {showDetailContainer ? (
                    <>
                        <span
                            className='exitButton'
                            onClick={() => toggleDetailedContainer()}
                        ></span>
                        <MovieDetails {...selectedMovieProps} />
                    </>
                ) : (
                    <div className='headerContainer'>
                        <div className='blurContainer'></div>
                        <h1 className='headerTitle'>FIND YOUR MOVIE</h1>
                        <SearchForm
                            initialValue={searchQuery}
                            searchMovie={(name: string) => searchMovieByName(name)}
                        />
                    </div>
                )}
            </>
        );
    };

    return (
        <>
            <HeaderContainer />
            <main className='moviesListPage'>
                <div className='sortFilterLine'>
                    <GenreSelect
                        selectedGenre='all'
                        listGenres={GENRES}
                        onSelect={(genre: string) => showGenreMovies(genre)}
                    />
                    <SortControl
                        currentSelection={sortCriterion}
                        onSortChange={(selectedSortValue: 'releaseDate' | 'title') =>
                            sortMoviesBy(selectedSortValue)
                        }
                    />
                </div>
                <div className='moviesList'>
                    {MOVIES.map((movie) => (
                        <MovieTile
                            key={movie.id}
                            onClickMovie={(name) => openDetailInfo(name)}
                            genres={movie.genres}
                            movieName={movie.movieName}
                            id={movie.id}
                            imageUrl={movie.imageUrl}
                            releaseYear={movie.releaseYear}
                        />
                    ))}
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
        </>
    );
};

export default MovieListPage;
