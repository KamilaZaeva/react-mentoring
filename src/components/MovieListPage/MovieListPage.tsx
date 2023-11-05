import './MovieListPage.css';
import '../../colors.css';

import { useEffect, useState } from 'react';

import GenreSelect from '../GenreSelect/GenreSelect';
import SortControl from '../SortControl/SortControl';
import MovieTile from '../MovieTile/MovieTile';
import EditMovieDialog from '../EditMovieDialog/EditMovieDialog';
import MovieDetails from '../MovieDetails/MovieDetails';
import SearchForm from '../SearchForm/SearchForm';

import { getMovies } from '../../services/api.service';

import { Movie } from '../../models/movie';

import { GENRES } from '../../consts';
import { createSearchParams, useSearchParams } from 'react-router-dom';

const MovieListPage = () => {
    // const { movieId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const activeGenre = (searchParams.get('genre') as string) || 'all';
    const searchQuery = (searchParams.get('query') as string) || '';
    const sortCriterion = (searchParams.get('sortBy') as 'releaseDate' | 'title') || 'releaseDate';

    const [movieList, setMovieList] = useState<Movie[]>([] as Movie[]);
    const [showDetailContainer, setShowDetailContainer] = useState<boolean>(false);
    const [selectedMovie, setSelectedMovie] = useState<Movie>({} as Movie);
    const [showEditDialog, setShowEditDialog] = useState<boolean>(false);

    useEffect(() => {
        void getMovies(searchQuery, sortCriterion, activeGenre).then((data) => {
            const formatMovieList: Movie[] = data.data.map((movieApi) => ({
                id: movieApi.id,
                movieName: movieApi.title,
                releaseYear: +movieApi.release_date.split('-')[0],
                genres: movieApi.genres,
                voteAverage: movieApi.vote_average,
                description: movieApi.overview,
                duration: movieApi.runtime,
                imageUrl: movieApi.poster_path,
            }));
            setMovieList(formatMovieList);
        });
    }, [searchQuery, sortCriterion, activeGenre, searchParams]);

    const searchMovieByName = (name: string): void => {
        setSearchParams(
            createSearchParams({
                ...Object.fromEntries([...searchParams]),
                query: name,
            }),
        );
    };

    const showGenreMovies = (selectedGenre: string): void => {
        setSearchParams(
            createSearchParams({
                ...Object.fromEntries([...searchParams]),
                genre: selectedGenre,
            }),
        );
    };
    const openDetailInfo = (openMovieId: number): void => {
        const selectedMovie: Movie = movieList.filter((movie) => movie.id === openMovieId)[0];

        setSelectedMovie({ ...selectedMovie });

        toggleDetailedContainer(true);
        window.scrollTo(0, 0);
        // setShowEditDialog(true);
    };

    const toggleDetailedContainer = (show?: boolean) =>
        setShowDetailContainer((prevState) => (show === undefined ? !prevState : show));

    const sortMoviesBy = (sortedBy: 'releaseDate' | 'title'): void => {
        setSearchParams(
            createSearchParams({
                ...Object.fromEntries([...searchParams]),
                sortBy: sortedBy,
            }),
        );
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
                        <MovieDetails {...selectedMovie} />
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
                        selectedGenre={activeGenre}
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
                    {movieList.map((movie: Movie) => (
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
                        movie={selectedMovie}
                        title='Edit movie'
                        onSubmit={(result) => console.log('submit: ', result)}
                    ></EditMovieDialog>
                )}
            </main>
        </>
    );
};

export default MovieListPage;
