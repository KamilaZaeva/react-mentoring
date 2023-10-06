import { Meta, StoryObj } from '@storybook/react';
import MovieTile from './MovieTile';

const meta = {
    title: 'MovieTile',
    component: MovieTile,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof MovieTile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MovieTileStory: Story = {
    name: 'Default',
    args: {
        id: 123,
        imageUrl:
            'https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_.jpg',
        movieName: 'Test Name',
        onClickMovie: (name) => console.log(name),
        genres: ['genre1', 'genre2'],
        releaseYear: 2020,
    },
};
