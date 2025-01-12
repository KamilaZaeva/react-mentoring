import { Meta, StoryObj } from '@storybook/react';

import EditMovieDialog from './EditMovieDialog';

const meta = {
    title: 'EditMovieDialog',
    component: EditMovieDialog,
} satisfies Meta<typeof EditMovieDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: 'Default',
    args: {
        title: 'Edit movie',
        movie: {
            imageUrl:
                'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg',
            movieName: 'La La Land',
            releaseYear: 2016,
            voteAverage: 8,
            genre: 'Documentary',
            genres: [],
            duration: 128,
            description:
                'Career aspirations run up against bittersweet romance in modern-day Los Angeles, as two artists face a heartbreaking dilemma.',
        },
        onClose: () => console.log('close'),
        onSubmit: (result) => console.log('submit this movie: ', result),
        onReset: () => console.log('reset'),
    },
};
