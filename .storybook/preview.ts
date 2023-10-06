import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
        backgrounds: {
            default: 'darkGrey',
            values: [
                {
                    name: 'darkGrey',
                    value: '#424242',
                },
                {
                    name: 'blackGrey',
                    value: '#232323',
                },
                {
                    name: 'light',
                    value: '#FFFFFF',
                },
            ],
        },
    },
};

export default preview;
