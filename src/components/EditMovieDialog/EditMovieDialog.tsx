import Dialog from '../Dialog/Dialog';
import MovieForm from "../MovieForm/MovieForm";
import {Movie} from "../../models/movie";

type EditMovieDialog = {
    title: string;
    movie?: Movie | null;
    onClose: () => void;
    onSubmit: (result: Movie | undefined) => void;
    onReset: () => void;
};

const EditMovieDialog = ({ title, movie, onClose, onSubmit, onReset }: EditMovieDialog) => {
    return (
        <Dialog
            title={title}
            onClose={onClose}
        >
            <MovieForm movie={movie} onSubmit={(res: Movie | undefined) => onSubmit(res)} onReset={onReset}></MovieForm>
        </Dialog>
    );
};

export default EditMovieDialog;
