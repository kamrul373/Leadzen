import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="spinner-border animate-spin inline-block w-16 h-16 border-8 text-blue-500 rounded-full" role="status">
                ...
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;