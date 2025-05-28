import { p } from 'motion/react-client';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const SingleJobs = ({ jobs }) => {
    // console.log(jobs);

    const { _id, category, company_logo, description, jobType, location, requirements, salaryRange, title } = jobs

    return (
        <div className=' border p-6 rounded-xl'>
            <div className='flex gap-4'>
                <div>
                    <img src={company_logo} alt="image" className='w-16' />
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>{category}</h1>
                    <p className='text-gray-500 text-xl flex items-center gap-1'><FaMapMarkerAlt />{location}</p>
                </div>
            </div>
            <div className='py-6'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <div className='flex gap-8 mt-2'>
                    <p className='text-gray-500'>{jobType}</p>
                    <p className='text-gray-500'>time</p>
                </div>
            </div>
            <p className='text-xl text-gray-500'>{description}</p>
            <div className='py-4'>
                {
                    requirements.map((req, index) => <button key={index} className="px-4 mb-2 bg-gray-200 py-1 mr-2 rounded hover:text-blue-500">{req}</button>)
                }
            </div>
            <div>
                <h2>BDT <span className='text-3xl text-green-500'>{salaryRange.min} - {salaryRange.max}</span>/Month</h2>
                <div className='flex justify-end mt-4'>
                    <Link to={`/jobs/${_id}`}><button className='btn btn-outline btn-info'>Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleJobs;