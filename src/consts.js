export const GENRES = ['all', 'documentary', 'comedy', 'horror', 'crime'];

import pic1 from './assets/pic1.png';
import pic2 from './assets/pic2.png';
import pic3 from './assets/pic3.png';

export const MOVIES = [
    {
        id: 337167,
        movieName: 'Pulp Fiction',
        vote_average: 8.9,
        releaseYear: 1994,
        imageUrl: String(pic1),
        overview: `Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra.`,
        genres: ['Action', 'Adventure'],
        runtime: 154,
    },
    {
        id: 376093,
        movieName: 'Bohemian Rhapsody',
        vote_average: 7.9,
        releaseYear: 2018,
        imageUrl: String(pic2),
        overview: `The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).`,
        genres: ['Drama', 'Biography', 'Music'],
        runtime: 134,
    },
    {
        id: 356492,
        movieName: 'Kill Bill: Vol 2',
        vote_average: 8.0,
        releaseYear: 2004,
        imageUrl: String(pic3),
        overview: `The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.`,
        genres: ['Oscar winning movie'],
        runtime: 137,
    },
];
