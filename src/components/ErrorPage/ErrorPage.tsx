import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function errorMessage(error: unknown): string {
    if (isRouteErrorResponse(error)) {
        return `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
        return error.message;
    } else if (typeof error === 'string') {
        return error;
    } else {
        return 'Unknown error';
    }
}

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorMessage(error)}</i>
            </p>
        </div>
    );
}

export default ErrorPage;
