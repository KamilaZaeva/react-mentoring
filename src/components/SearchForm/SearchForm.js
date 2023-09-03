import {Button} from "../Button/Button";
import './SearchForm.css';
import {useState} from "react";

export function SearchForm({ initialValue }) {
    const [searchText, setSearchText] = useState(initialValue ?? '');

    function searchMovies() {
        console.log('search movies with name:', searchText);
        // TODO: will be implemented in future modules
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
                        return searchMovies();
                    }
                }}
            />
            <Button title={'Search'} onClick={searchMovies}/>
        </div>
    );
}