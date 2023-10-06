import type { Meta, StoryObj } from '@storybook/react';
import '../Button/Button.css';
import '../../colors.css';

import GenreSelect from './GenreSelect';

const meta = {
    title: 'GenreSelect',
    component: GenreSelect,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'blackGrey' },
    },
} satisfies Meta<typeof GenreSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        listGenres: ['Genre 1', 'Genre 2', 'Genre 4'],
        selectedGenre: 'Genre 2',
        onSelect: (nameGenre) => console.log(nameGenre),
    },
};

