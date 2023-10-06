import { fireEvent, render, screen } from '@testing-library/react';

import Counter from './Counter';

describe('Counter', () => {
    it('should render with initial value', () => {
        const { getByText } = render(<Counter initialValue={0} />);
        const expectedText = /Counter: 0/i;
        expect(getByText(expectedText)).toBeInTheDocument();
    });

    it('should increment value when `increase` button pressed', () => {
        const { getByText } = render(<Counter initialValue={0} />);
        fireEvent.click(screen.getByText('Increase'));
        const expectedText = /Counter: 1/i;
        expect(getByText(expectedText)).toBeInTheDocument();
    });

    it('should decrement value when `decrease` button pressed', () => {
        const { getByText } = render(<Counter initialValue={10} />);
        fireEvent.click(screen.getByText('Decrease'));
        const expectedText = /Counter: 9/i;
        expect(getByText(expectedText)).toBeInTheDocument();
    });
});
