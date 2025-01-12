export interface Movie {
    id: number;
    imageUrl: string;
    movieName: string;
    releaseYear: number;
    voteAverage: string;
    duration: number;
    description: string;
    movieUrl?: string;
    genres: string[];
    genre?: string;
}

export interface MovieAPI {
    id: number;
    budget: number;
    genres: string[];
    overview: string;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
}
