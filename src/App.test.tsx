import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter text', () => {
    render(<App />);
    const linkElement = screen.getByText(/counter/i);
    expect(linkElement).toBeInTheDocument();
});
