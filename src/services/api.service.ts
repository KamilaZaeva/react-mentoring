import { BodyAPI } from '../models/body';
import {Movie, MovieAPI} from "../models/movie";

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