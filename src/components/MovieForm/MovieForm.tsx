import { ChangeEvent, useState } from 'react';

import './MovieForm.css';

import { Movie } from '../../models/movie';

export type MovieFormProps = {
    movie?: Movie | null;
    onSubmit: (editedMovie?: Movie) => void;
    onReset: () => void;
};

const MovieForm = ({ movie, onReset, onSubmit }: MovieFormProps) => {
    const [editedMovie, updateEditedMovie] = useState<Movie>(movie ?? ({} as Movie));

    const handleSubmitForm = (event: any) => {
        console.log(event);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
        onSubmit(Object.fromEntries(new FormData(event?.target)) as unknown as Movie);
    };
    const handleOnChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
        field: string,
    ) => {
        console.log('handle onChange', field, event.target.value);
        const value = event.target.value;
        updateEditedMovie({
            ...editedMovie,
            [field]: value,
        });
    };

    return (
        <form onSubmit={handleSubmitForm} onReset={onReset} className='form-edit-movie'>
            <div className='dialog-body'>
                <div className='row'>
                    <div className='col-left'>
                        <div className='form-item'>
                            <label>
                                Title
                                <input
                                    id='title'
                                    type='text'
                                    name='title'
                                    placeholder='Movie title'
                                    value={editedMovie?.movieName}
                                    onChange={(event) => handleOnChange(event, 'title')}
                                />
                            </label>
                        </div>
                    </div>

                    <div className='col-right'>
                        <div className='form-item'>
                            <label>
                                Release date
                                <input
                                    type='date'
                                    name='releaseDate'
                                    placeholder='2000'
                                    value={editedMovie?.releaseYear}
                                    onChange={(event) => handleOnChange(event, 'releaseDate')}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='dialog-footer'>
                <button type='reset' className='button-outline'>
                    Reset
                </button>
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
};

export default MovieForm;
