import './MovieListPage.css';
import '../../colors.css';

import React, { useEffect, useState } from 'react';

import GenreSelect from '../GenreSelect/GenreSelect';
import SortControl from '../SortControl/SortControl';
import MovieTile from '../MovieTile/MovieTile';
import EditMovieDialog from '../EditMovieDialog/EditMovieDialog';

import { getMovies } from '../../services/api.service';

import { Movie } from '../../models/movie';

import { GENRES } from '../../consts';
import {
    createSearchParams,
    Outlet,
    useLocation,
    useNavigate,
    useSearchParams,
} from 'react-router-dom';

const MovieListPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const activeGenre = (searchParams.get('genre') as string) || 'all';
    const searchQuery = (searchParams.get('query') as string) || '';
    const sortCriterion = (searchParams.get('sortBy') as 'releaseDate' | 'title') || 'releaseDate';

    const [movieList, setMovieList] = useState<Movie[]>([] as Movie[]);
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
    }, [searchParams]);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location]);

    const showGenreMovies = (selectedGenre: string): void => {
        setSearchParams(
            createSearchParams({
                ...Object.fromEntries([...searchParams]),
                genre: selectedGenre,
            }),
        );
    };
    ``;

    const sortMoviesBy = (sortedBy: 'releaseDate' | 'title'): void => {
        setSearchParams(
            createSearchParams({
                ...Object.fromEntries([...searchParams]),
                sortBy: sortedBy,
            }),
        );
    };

    return (
        <>
            <Outlet />
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
                            onClickMovie={(id) =>
                                navigate({
                                    pathname: `/${id}`,
                                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                    search: `?${createSearchParams({
                                        ...Object.fromEntries([...searchParams]),
                                    })}`,
                                })
                            }
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
