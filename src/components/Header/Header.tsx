import './Header.css';
import { useNavigate } from 'react-router-dom';

import MovieDetails from '../MovieDetails/MovieDetails';
import SearchForm from '../SearchForm/SearchForm';

import { Movie } from '../../models/movie';

export type HeaderProps = {
    showDetailContainer: boolean;
    selectedMovie: Movie;
    searchQuery: string;
    onSearchMovieByName: (name: string) => void;
};

const Header = ({
    showDetailContainer,
    selectedMovie,
    searchQuery,
    onSearchMovieByName,
}: HeaderProps) => {
    const navigate = useNavigate();
    return (
        <>
            {showDetailContainer ? (
                <>
                    <span className='exitButton' onClick={() => navigate('/')}></span>
                    <MovieDetails {...selectedMovie} />
                </>
            ) : (
                <div className='headerContainer'>
                    <div className='blurContainer'></div>
                    <h1 className='headerTitle'>FIND YOUR MOVIE</h1>
                    <SearchForm
                        initialValue={searchQuery}
                        searchMovie={(name: string) => onSearchMovieByName(name)}
                    />
                </div>
            )}
        </>
    );
};

export default Header;
