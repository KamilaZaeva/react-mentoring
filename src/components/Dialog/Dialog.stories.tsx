import {Meta, StoryObj} from "@storybook/react";
import Dialog from "./Dialog";

const meta = {
    title: "Dialog",
    component: Dialog
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: "Default",
    args: {
        message: "My Dialog",
        children: <p>Test body</p>,
        onClose: () => console.log('Close dialog'),
    }
};
