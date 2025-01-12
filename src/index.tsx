import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import DetailHeaderBlock from './components/Header/DetailHeaderBlock';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ':movieId',
                element: <DetailHeaderBlock />,
            },
            {
                index: true,
                element: <Header />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
