import { MovieAPI } from './movie';

export interface BodyAPI {
    totalAmount: number;
    data: MovieAPI[];
    offset: number;
    limit: number;
}
