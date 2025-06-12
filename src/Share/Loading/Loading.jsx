import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
        </div>
    );
};

export default Loading;