import './Header.css';

import SearchForm from '../SearchForm/SearchForm';
import { createSearchParams, useSearchParams } from 'react-router-dom';

const Header = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = (searchParams.get('query') as string) || '';

    const searchMovieByName = (name: string): void => {
        setSearchParams(
            createSearchParams({
                ...Object.fromEntries([...searchParams]),
                query: name,
            }),
        );
    };

    return (
        <div className='headerContainer'>
            <div className='blurContainer'></div>
            <h1 className='headerTitle'>FIND YOUR MOVIE</h1>
            <SearchForm
                initialValue={searchQuery}
                searchMovie={(name: string) => searchMovieByName(name)}
            />
        </div>
    );
};

export default Header;
