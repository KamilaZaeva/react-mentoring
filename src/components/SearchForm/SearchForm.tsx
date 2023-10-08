import './SearchForm.css';

import { useState } from 'react';

import Button from '../Button/Button';

type SearchFormProps = {
    initialValue: string;
    searchMovie: (searchText: string) => void;
};

const SearchForm = ({ initialValue, searchMovie }: SearchFormProps) => {
    const [searchText, setSearchText] = useState(initialValue ?? '');

    const onSearchClick = (): void => {
        searchMovie(searchText);
    };

    const handleKeyDown = (keyboardEventCode: string): void => {
        if (keyboardEventCode === 'Enter') {
            return onSearchClick();
        }
    };

    return (
        <div className='searchFormContainer'>
            <input
                id='searchInput'
                type='text'
                className='inputSearchForm'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder='What do you want to watch?'
                onKeyDown={(e) => handleKeyDown(e.code)}
            />
            <Button title='Search' className='searchButton' onClick={onSearchClick} />
        </div>
    );
};

export default SearchForm;
