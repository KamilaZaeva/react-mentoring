import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import {createSearchParams, useNavigate, useParams, useSearchParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Movie, MovieAPI } from '../../models/movie';
import { getMovieById, transformMovieAPIToMovie } from '../../services/api.service';

const MovieDialog = () => {
    const navigate = useNavigate();
    const { movieId } = useParams();

    const dialogTitle = movieId ? 'Edit movie' : 'Add movie';

    const [searchParams] = useSearchParams();
    const [editedMovie, updateEditedMovie] = useState<Movie | undefined>();

    const fetchMovieData = async (movieId: string) => {
        const movieAPI: MovieAPI | null = await getMovieById(movieId);
        const movie = movieAPI ? transformMovieAPIToMovie(movieAPI) : undefined;
        if (movie) {
            updateEditedMovie(movie);
        }
    };

    useEffect(() => {
        if (movieId) {
            void fetchMovieData(movieId);
        }
    }, [movieId]);

    return (
        <Dialog
            title={dialogTitle}
            onClose={() => {
                navigate({
                    pathname: `/`,
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    search: `?${createSearchParams({
                        ...Object.fromEntries([...searchParams]),
                    })}`,
                });
            }}
        >
            <MovieForm movie={editedMovie}></MovieForm>
        </Dialog>
    );
};

export default MovieDialog;
