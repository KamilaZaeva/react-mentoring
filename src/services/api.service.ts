import { BodyAPI } from '../models/body';
import {Movie, MovieAPI} from "../models/movie";
import {request} from "http";

const HOST = "http://localhost:4000";
export const getMovies = async (
    query: string,
    sortedBy: 'releaseDate' | 'title',
    selectedGenre: string,
): Promise<BodyAPI> => {
    const searchParams: URLSearchParams = new URLSearchParams({
        sortBy: sortedBy,
        sortOrder: 'asc',
        search: query,
        searchBy: 'title',
        ...(selectedGenre !== 'all' && { filter: selectedGenre }),
    });

    const result = await fetch(HOST + '/movies?' + String(searchParams));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await result.json();
};

export const getMovieById = async (
    movieId: string | undefined
): Promise<MovieAPI> => {
    const result = await fetch(HOST + `/movies/${movieId}`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await result.json();
};

export const addMovie = async (
    movie: Movie
): Promise<MovieAPI> => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transformMovieToMovieAPI(movie)),
    };

    const result = await fetch(HOST + `/movies`, requestOptions);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result.json();
};

export const updateMovie = async (
    movie: Movie
): Promise<MovieAPI> => {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transformMovieToMovieAPI(movie)),
    };

    const result = await fetch(HOST + `/movies`, requestOptions);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result.json();
};

export const transformMovieAPIToMovie = (movieApi: MovieAPI): Movie => {
    return {
        id: movieApi.id,
        movieName: movieApi.title,
        releaseYear: +movieApi.release_date.split('-')[0],
        genres: movieApi.genres,
        voteAverage: String(movieApi.vote_average),
        description: movieApi.overview,
        duration: movieApi.runtime,
        imageUrl: movieApi.poster_path,
    }
}

export const transformMovieToMovieAPI = (movie: Movie): MovieAPI => {
    return {
        id: movie.id,
        title: movie.movieName,
        tagline: 'Added test tagline',
        release_date: movie.releaseYear.toString(),
        genres: movie.genres,
        vote_average: parseFloat(movie.voteAverage),
        overview: movie.description,
        runtime: +movie.duration,
        poster_path: movie.imageUrl,
        budget: 10000,
        revenue: 999000,
        vote_count: 999,
    }
}
