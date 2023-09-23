import { useState } from 'react';

import './SortControl.css';

type SortControlProps = {
    currentSelection: string;
    onSortChange: (newSortSelection: 'releaseDate' | 'title') => void;
};
const SortControl = ({ currentSelection, onSortChange }: SortControlProps) => {
    const [selectedItem, setSelectedItem] = useState<string>(currentSelection);
    const handleSortChange = (selectedOption: 'releaseDate' | 'title') => {
        setSelectedItem(selectedOption);
        onSortChange(selectedOption);
    };

    return (
        <div className='sortControl'>
            <label htmlFor='sortSelect' className='sortControl__label'>
                Sort by
            </label>
            <select
                id='sortSelect'
                className='sortControl__select'
                value={selectedItem}
                onChange={(selected) =>
                    handleSortChange(selected.target.value as 'releaseDate' | 'title')
                }
            >
                <option value='releaseDate' className='sortControl__option'>
                    Release Date
                </option>
                <option value='title' className='sortControl__option'>
                    Title
                </option>
                ∏
            </select>
        </div>
    );
};

export default SortControl;
