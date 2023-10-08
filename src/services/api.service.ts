import { BodyAPI } from '../models/body';

export const getMovies = async (
    query: string,
    sortedBy: 'releaseDate' | 'title',
    selectedGenre: string,
): Promise<BodyAPI> => {
    const searchParams: URLSearchParams = new URLSearchParams({
        sortBy: sortedBy,
        sortOrder: 'asc',
        search: query,
        searchBy: 'title',
        ...(selectedGenre !== 'all' && { filter: selectedGenre }),
    });

    const result = await fetch('http://localhost:4000/movies?' + String(searchParams));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await result.json();
};
