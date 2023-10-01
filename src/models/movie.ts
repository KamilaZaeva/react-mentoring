export interface Movie {
    imageUrl: string;
    movieName: string;
    releaseYear: number;
    voteAverage: number;
    duration: number;
    description: string;
    movieUrl?: string;
    genres: string[];
}