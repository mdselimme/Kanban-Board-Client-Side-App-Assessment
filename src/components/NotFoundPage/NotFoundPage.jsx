import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 Not Found Page</h1>
            <Link to={'/'}>go to Home</Link>
        </div>
    );
};

export default NotFoundPage;