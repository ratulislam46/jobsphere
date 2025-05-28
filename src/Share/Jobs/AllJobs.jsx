import React from 'react';
import SingleJobs from './SingleJobs';

const AllJobs = ({ allJobs }) => {
    // console.log(allJobs);

    return (
        <div>
            <h1 className='text-4xl lg:text-5xl font-bold font-serif text-center mb-12'>Jobs of the day</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allJobs.map(jobs=><SingleJobs key={jobs._id} jobs={jobs}></SingleJobs>)
                }
            </div>
        </div>
    );
};

export default AllJobs;