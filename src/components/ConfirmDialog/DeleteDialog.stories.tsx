import { Meta, StoryObj } from '@storybook/react';
import { DeleteDialog } from './DeleteDialog';

const meta = {
    title: 'DeleteDialog',
    component: DeleteDialog,
} satisfies Meta<typeof DeleteDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: 'Default',
    args: {
        onClose: () => console.log('just close'),
        onConfirm: () => console.log('confirm delete'),
    },
};
