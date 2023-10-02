import { ChangeEvent, useState } from 'react';

import './MovieForm.css';

import { Movie } from '../../models/movie';
import Button from '../Button/Button';

export type MovieFormProps = {
    movie?: Movie | null;
    onSubmit: (editedMovie?: Movie) => void;
    onReset: () => void;
};

const MovieForm = ({ movie, onReset, onSubmit }: MovieFormProps) => {
    const [editedMovie, updateEditedMovie] = useState<Movie>(movie ?? ({} as Movie));

    const handleSubmitForm = (event: any) => {
        console.log(event);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        event?.preventDefault();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
        onSubmit(Object.fromEntries(new FormData(event?.target)) as unknown as Movie);
    };

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target;
        updateEditedMovie((prevFormData) => ({ ...prevFormData, [name]: name === 'releaseYear' || name === 'duration' ? parseInt(value, 10) : value }));
    };

    return (
        <form onSubmit={handleSubmitForm} onReset={onReset} className='formEditMovie'>
            <div className='dialogBody'>
                <div className='row'>
                    <div className='colLeft'>
                        <div className='formItem'>
                            <label>
                                Title
                                <input
                                    type='text'
                                    name='movieName'
                                    placeholder='Movie title'
                                    className='inputForm'
                                    value={editedMovie?.movieName}
                                    onChange={(event) => handleChange(event)}
                                />
                            </label>
                        </div>
                    </div>

                    <div className='colRight'>
                        <div className='formItem'>
                            <label>
                                Release date
                                <input
                                    type='text'
                                    name='releaseYear'
                                    placeholder='2000'
                                    className='inputForm'
                                    value={editedMovie?.releaseYear}
                                    onChange={(event) => handleChange(event)}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='colLeft'>
                        <div className='formItem'>
                            <label>
                                Movie url
                                <input
                                    type='text'
                                    name='movieUrl'
                                    placeholder='Movie url'
                                    className='inputForm'
                                    value={editedMovie?.movieUrl}
                                    onChange={(event) => handleChange(event)}
                                />
                            </label>
                        </div>
                    </div>

                    <div className='colRight'>
                        <div className='formItem'>
                            <label>
                                Rating
                                <input
                                    type='text'
                                    name='voteAverage'
                                    placeholder='9,9'
                                    className='inputForm'
                                    value={editedMovie?.voteAverage}
                                    onChange={(event) => handleChange(event)}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='colLeft'>
                        <div className='formItem'>
                            <label>
                                Genre
                                <select
                                    name='genre'
                                    className={'selectInputForm ' + (editedMovie?.genre === undefined ? 'selectInputForm__grey' : '')}
                                    value={editedMovie?.genre || ''}
                                    onChange={(event) => handleChange(event)}
                                >
                                    <option value='' disabled>
                                        Select genre
                                    </option>
                                    <option value='horror'>Horror</option>
                                    <option value='comedy'>Comedy</option>
                                    <option value='adventure'>Adventure</option>
                                    <option value='documentary'>Documentary</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <div className='colRight'>
                        <div className='formItem'>
                            <label>
                                Runtime
                                <input
                                    type='text'
                                    name='duration'
                                    placeholder='minutes'
                                    className='inputForm'
                                    value={editedMovie?.duration}
                                    onChange={(event) => handleChange(event)}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='formItem'>
                        <label>
                            Overview
                            <textarea
                                name='description'
                                placeholder='Movie description'
                                className='inputForm'
                                value={editedMovie?.description}
                                onChange={(event) => handleChange(event)}
                            />
                        </label>
                    </div>
                </div>
            </div>

            <div className='dialogFooter'>
                <Button className='buttonOutline' title='Reset' onClick={onReset}></Button>
                <Button title='Submit' onClick={onSubmit}></Button>
            </div>
        </form>
    );
};

export default MovieForm;
