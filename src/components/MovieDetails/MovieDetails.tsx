import { getTransformTime } from '../../utils/transform.util';
import './MovieDetails.css';
import { Movie } from '../../models/movie';

const MovieDetails = ({
    imageUrl,
    movieName,
    releaseYear,
    voteAverage,
    duration,
    description,
}: Movie) => {
    return (
        <div className='movieDetails__container'>
            <img className='moviePoster' src={imageUrl} alt={movieName} />
            <div className='movieDetails'>
                <div className='movieDetails__firstLine'>
                    <div className='movieName'>{movieName}</div>
                    <div className='movieRating'>{voteAverage}</div>
                </div>
                <div className='movieDetails__secondLine'>
                    <div className='movieYear'>{releaseYear}</div>
                    <div className='movieDuration'>{getTransformTime(duration)}</div>
                </div>

                <div className='movieDescription'>{description}</div>
            </div>
        </div>
    );
};

export default MovieDetails;
