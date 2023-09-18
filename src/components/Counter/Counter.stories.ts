import type { Meta, StoryObj } from '@storybook/react';

import Counter from './Counter';

const meta = {
    title: 'Counter',
    component: Counter,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'light' },
    },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicCounter: Story = {
    args: {
        initialValue: 0,
    },
    parameters: {
        backgrounds: { default: 'light' },
    }
};

