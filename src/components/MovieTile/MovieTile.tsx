import './MovieTile.css';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import React from 'react';

export type MovieTileProps = {
    id: number;
    imageUrl: string;
    movieName: string;
    releaseYear: number;
    genres: string[];
    onClickMovie: (id: number) => void;
};

const MovieTile = ({
    id,
    imageUrl,
    movieName,
    releaseYear,
    genres,
    onClickMovie,
}: MovieTileProps) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const genresList = genres?.join(', ') || '';

    return (
        <button className='movieTile' onClick={() => onClickMovie(id)}>
            <span
                className='editButton'
                onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    navigate({
                        pathname: `/new/${id}`,
                        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                        search: `?${createSearchParams({
                            ...Object.fromEntries([...searchParams]),
                        })}`,
                    });
                }}
            ></span>
            <img className='movieTile__poster' src={imageUrl} alt={movieName} />
            <div className='movieTile__nameContainer'>
                <div className='movieName'>{movieName}</div>
                <div className='movieYear'>{releaseYear}</div>
            </div>
            <div className='movieGenres'>{genresList}</div>
        </button>
    );
};

export default MovieTile;
