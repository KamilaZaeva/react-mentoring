import './Header.css';

import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { Movie, MovieAPI } from '../../models/movie';

import { getMovieById } from '../../services/api.service';

import MovieDetails from '../MovieDetails/MovieDetails';

const DetailHeaderBlock = () => {
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedMovie, setSelectedMovie] = useState<Movie>({} as Movie);

    useEffect(() => {
        if (movieId) {
            void getMovieById(movieId).then((data: MovieAPI) => {
                setSelectedMovie({
                    id: data.id,
                    movieName: data.title,
                    releaseYear: +data.release_date.split('-')[0],
                    genres: data.genres,
                    voteAverage: String(data.vote_average),
                    description: data.overview,
                    duration: data.runtime,
                    imageUrl: data.poster_path,
                });
            });
        }
    }, [movieId]);

    return (
        <>
            <span
                className='exitButton'
                onClick={() =>
                    navigate({
                        pathname: '/',
                        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                        search: `?${createSearchParams({
                            ...Object.fromEntries([...searchParams]),
                        })}`,
                    })
                }
            ></span>
            <MovieDetails {...selectedMovie} />
        </>
    );
};

export default DetailHeaderBlock;
