import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import { Movie } from '../../models/movie';
import { MovieDialogType } from '../EditMovieDialog/EditMovieDialog';

const AddMovieDialog = ({ title, onClose, onSubmit, onReset }: MovieDialogType) => {
    return (
        <Dialog title={title} onClose={onClose}>
            <MovieForm
                onSubmit={(res: Movie | undefined) => onSubmit(res)}
                onReset={onReset}
            ></MovieForm>
        </Dialog>
    );
};

export default AddMovieDialog;
