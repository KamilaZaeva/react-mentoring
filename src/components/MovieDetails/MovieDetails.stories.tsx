import { Meta, StoryObj } from '@storybook/react';
import MovieDetails from './MovieDetails';

const meta = {
    title: 'MovieDetails',
    component: MovieDetails,
} satisfies Meta<typeof MovieDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: 'Default',
    args: {
        id: 123456,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg',
        movieName: 'La La Land',
        releaseYear: 2016,
        voteAverage: 8,
        genres: ['Documentary', 'Love'],
        duration: 128,
        description:
            'Career aspirations run up against bittersweet romance in modern-day Los Angeles, as two artists face a heartbreaking dilemma. \n' +
            'Career aspirations run up against bittersweet romance in modern-day Los Angeles, as two artists face a heartbreaking dilemma. \n' +
            'Career aspirations run up against bittersweet romance in modern-day Los Angeles, as two artists face a heartbreaking dilemma.',
    },
};
