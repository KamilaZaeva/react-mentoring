import { Meta, StoryObj } from '@storybook/react';
import AddMovieDialog from './AddMovieDialog';

const meta = {
    title: 'AddMovieDialog',
    component: AddMovieDialog,
} satisfies Meta<typeof AddMovieDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: 'Default',
    args: {
        title: 'Add movie',
        onClose: () => console.log('close'),
        onSubmit: (result) => console.log('submit this movie: ', result),
        onReset: () => console.log('reset'),
    },
};
