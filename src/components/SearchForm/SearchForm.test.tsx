import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
    it('should render an input with the value equal to initial value passed in props', () => {
        const initialValue = 'Initial Value';
        render(<SearchForm initialValue={initialValue} searchMovie={() => {}} />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue(initialValue);
        expect(inputElement).toHaveAttribute('placeholder', 'What do you want to watch?');
    });

    it('after typing to the input and a "click" event on the Submit button, the "onChange" prop is called with proper value', () => {
        const searchMovieMock = jest.fn();
        render(<SearchForm initialValue='' searchMovie={searchMovieMock} />);

        const inputElement = screen.getByRole('textbox');
        const submitButton = screen.getByText('Search');
        const inputValue = 'Test Movie';

        act(() => {
            userEvent.type(inputElement, inputValue);
            userEvent.click(submitButton);
        });

        expect(searchMovieMock).toHaveBeenCalledWith(inputValue);
    });

    it('after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', () => {
        const searchMovieMock = jest.fn();
        render(<SearchForm initialValue='' searchMovie={searchMovieMock} />);

        const inputElement = screen.getByRole('textbox');
        const inputValue = 'Test Movie';

        act(() => {
            userEvent.type(inputElement, inputValue);
            userEvent.keyboard('[Enter]');
        });

        expect(searchMovieMock).toHaveBeenCalledWith(inputValue);
    });
});
