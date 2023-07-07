import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='NotFound'>
            <div>
                <h1>Not Found</h1>
                <Link to="/app-react-cv">
                    <button>
                        <h2>Go to home</h2>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
