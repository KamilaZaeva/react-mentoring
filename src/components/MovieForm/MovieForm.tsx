import React, { ChangeEvent, useEffect, useState } from 'react';

import './MovieForm.css';

import { Movie } from '../../models/movie';
import Button from '../Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { addMovie, updateMovie } from '../../services/api.service';
import { useNavigate } from 'react-router-dom';

export type MovieFormProps = {
    movie: Movie | undefined;
};

const MovieForm = ({ movie }: MovieFormProps) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Movie>();

    const [editedMovie, updateEditedMovie] = useState<Movie>(movie ?? ({} as Movie));

    useEffect(() => {
        updateEditedMovie(movie ?? ({} as Movie));
        if (movie) {
            reset(movie);
        }
    }, [movie]);

    const onSubmit: SubmitHandler<Movie> = async (data: Movie) => {
        const addedMovie = movie ? await updateMovie(data) : await addMovie(data);
        if (addedMovie.id) {
            navigate({
                pathname: `/${addedMovie.id}`,
            });
        }
    };

    const onReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        reset();
    };

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target;
        updateEditedMovie((prevFormData) => ({
            ...prevFormData,
            [name]: name === 'releaseYear' || name === 'duration' ? parseInt(value, 10) : value,
        }));
    };

    return (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(onSubmit)} className='formEditMovie'>
            <div className='dialogBody'>
                <div className='row'>
                    <div className='colLeft'>
                        <div className='formItem'>
                            <label>
                                Title
                                <input
                                    type='text'
                                    placeholder='Movie title'
                                    className='inputForm'
                                    defaultValue=''
                                    required={true}
                                    {...register('movieName')}
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
                                    placeholder='2000'
                                    className='inputForm'
                                    defaultValue=''
                                    required={true}
                                    {...register('releaseYear')}
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
                                    placeholder='Movie url'
                                    className='inputForm'
                                    defaultValue=''
                                    required={true}
                                    {...register('imageUrl')}
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
                                    placeholder='9,9'
                                    className='inputForm'
                                    defaultValue=''
                                    required={true}
                                    {...register('voteAverage')}
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
                                    className={
                                        'selectInputForm ' +
                                        (editedMovie?.genre === undefined
                                            ? 'selectInputForm__grey'
                                            : '')
                                    }
                                    defaultValue=''
                                    required={true}
                                    {...register('genre')}
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
                                    placeholder='minutes'
                                    className='inputForm'
                                    defaultValue=''
                                    required={true}
                                    {...register('duration')}
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
                                placeholder='Movie description'
                                className='inputForm'
                                defaultValue=''
                                required={true}
                                {...register('description')}
                            />
                        </label>
                    </div>
                </div>
            </div>

            <div className='dialogFooter'>
                <Button
                    className='buttonOutline'
                    title='Reset'
                    onClick={(e) => onReset(e)}
                ></Button>
                <Button title='Submit' onClick={() => onSubmit}></Button>
            </div>
        </form>
    );
};

export default MovieForm;
