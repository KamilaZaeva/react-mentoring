import './Header.css';

import SearchForm from '../SearchForm/SearchForm';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../Button/Button';

const Header = () => {
    const navigate = useNavigate();
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
            <Button
                className={'buttonGhost'}
                title={'+ Add movie'}
                onClick={() => {
                    navigate({
                        pathname: '/new',
                        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                        search: `?${createSearchParams({
                            ...Object.fromEntries([...searchParams]),
                        })}`,
                    });
                }}
            />
            <h1 className='headerTitle'>FIND YOUR MOVIE</h1>
            <SearchForm
                initialValue={searchQuery}
                searchMovie={(name: string) => searchMovieByName(name)}
            />
        </div>
    );
};

export default Header;
