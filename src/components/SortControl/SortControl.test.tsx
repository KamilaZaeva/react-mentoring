import { render, fireEvent } from '@testing-library/react';
import SortControl from './SortControl';
describe('SortControl', () => {
    it('handles sort change correctly', () => {
        const mockOnSortChange = jest.fn();
        const { getByLabelText } = render(
            <SortControl currentSelection="releaseDate" onSortChange={mockOnSortChange} />
        );

        const selectElement = getByLabelText('Sort by') as HTMLSelectElement;

        // Simulate changing the selection to 'title'
        fireEvent.change(selectElement, { target: { value: 'title' } });

        // Expect the onSortChange callback to be called with 'title'
        expect(mockOnSortChange).toHaveBeenCalledWith('title');
    });
});