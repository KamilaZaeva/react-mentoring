import {Button} from "../Button/Button";
import './SearchForm.css';
import {useState} from "react";

export function SearchForm({ initialValue, searchMovie }) {
    const [searchText, setSearchText] = useState(initialValue ?? '');

    function onSearchClick() {
        searchMovie(searchText);
    }

    return (
        <div className="searchFormContainer">
            <input
                className="inputSearchForm"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                placeholder="What do you want to watch?"
                onKeyDown={(e) => {
                    if (e.code === 'Enter') {
                        e.stopPropagation();
                        return onSearchClick();
                    }
                }}
            />
            <Button title={'Search'} onClick={onSearchClick}/>
        </div>
    );
}