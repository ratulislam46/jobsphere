import React, { use } from 'react';
import { Link } from 'react-router';

const MypostJobList = ({ myPostJobsPromise }) => {

    const jobs = use(myPostJobsPromise)
    // console.log(jobs);

    return (
        <div>
            <h1 className='text-3xl text-center font-bold font-serif my-10'>My job post list: {jobs.length} </h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>List</th>
                            <th>Job Title</th>
                            <th> Deadline</th>
                            <th> Count</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            jobs.map((job, index) =>
                                <tr key={job._id}>
                                    <th> {index + 1} </th>
                                    <td>{job.title}</td>
                                    <td>{job.deadline}</td>
                                    <td>{job.application_count}</td>
                                    <td><Link to={`/applications/${job._id}`} className='btn'>View Applications</Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MypostJobList;