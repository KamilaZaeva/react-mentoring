import { Meta, StoryObj } from '@storybook/react';
import MovieForm from './MovieForm';
import { Movie } from '../../models/movie';

const meta = {
    title: 'MovieForm',
    component: MovieForm,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'blackGrey' },
    },
} satisfies Meta<typeof MovieForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: 'Default',
    args: {
        movie: {
            id: 123456,
            imageUrl:
                'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg',
            movieName: 'La La Land',
            releaseYear: 2016,
            voteAverage: 8,
            genres: ['Documentary', 'Love'],
            duration: 128,
            description:
                'Career aspirations run up against bittersweet romance in modern-day Los Angeles, as two artists face a heartbreaking dilemma.',
        },
        onSubmit: (editedMovie?: Movie) => console.log('submit this: ', editedMovie),
        onReset: () => console.log('reset click'),
    },
};
