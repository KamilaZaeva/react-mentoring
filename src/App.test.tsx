import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders header text', () => {
    // Mock the react-router-dom module
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => jest.fn(),
    }));

    render(
        <Router>
            <App />
        </Router>,
    );
    const linkElement = screen.getByText(/SORT BY/i);
    expect(linkElement).toBeInTheDocument();
});
