import type { Meta, StoryObj } from '@storybook/react';
import '../Button/Button.css';
import '../../colors.css';

import SearchForm from './SearchForm';

const meta = {
    title: 'SearchForm',
    component: SearchForm,
    parameters: {
        backgrounds: { default: 'darkGrey' }
    },
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        initialValue: 'Find me...',
        searchMovie: (name) => console.log(name),
    },
};

