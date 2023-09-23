import { Meta, StoryObj } from '@storybook/react';
import SortControl from './SortControl';

const meta = {
    title: 'SortControl',
    component: SortControl,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'blackGrey' },
    },
} satisfies Meta<typeof SortControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: 'Default',
    args: {
        currentSelection: 'releaseDate',
        onSortChange: (newSortSelection) => console.log(newSortSelection),
    },
};
