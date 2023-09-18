import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
    args: {
        title: 'Click me',
        onClick: () => console.log('clicked'),
    },
};