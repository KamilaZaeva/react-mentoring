import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditMovieDialog, { MovieDialogType } from './EditMovieDialog';
import {Movie} from "../../models/movie";

// Mock MovieForm component
jest.mock('../MovieForm/MovieForm', () => ({ movie, onSubmit, onReset }: any) => {
    return (
        <div>
            <p data-testid="form-mock">{JSON.stringify(movie)}</p>
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return */}
            <button data-testid="submit-button" onClick={() => onSubmit(movie)}></button>
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
            <button data-testid="reset-button" onClick={onReset}></button>
        </div>
    );
});

describe('EditMovieDialog Component', () => {
    const mockMovie: Movie = {
        imageUrl: 'example.jpg',
        movieName: 'Test Movie',
        releaseYear: 2022,
        voteAverage: 8.5,
        duration: 120,
        description: 'Test description',
        genres: ['Action', 'Adventure'],
    };

    const mockProps: MovieDialogType = {
        title: 'Edit Movie',
        movie: mockMovie,
        onClose: jest.fn(),
        onSubmit: jest.fn(),
        onReset: jest.fn(),
    };

    it('renders with correct title and passes movie to MovieForm', () => {
        const { getByText, getByTestId } = render(<EditMovieDialog {...mockProps} />);
        expect(getByText('Edit Movie')).toBeInTheDocument();
        expect(getByTestId('form-mock').textContent).toBe(JSON.stringify(mockMovie));
    });

    it('calls onSubmit when submit button is clicked', () => {
        const { getByTestId } = render(<EditMovieDialog {...mockProps} />);
        fireEvent.click(getByTestId('submit-button'));
        expect(mockProps.onSubmit).toHaveBeenCalledWith(mockMovie);
    });

    it('calls onReset when reset button is clicked', () => {
        const { getByTestId } = render(<EditMovieDialog {...mockProps} />);
        fireEvent.click(getByTestId('reset-button'));
        expect(mockProps.onReset).toHaveBeenCalled();
    });
});
