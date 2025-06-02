import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const JobsDetails = () => {

    const data = useLoaderData()
    // console.log(data);

    const { _id, applicationDeadline, company, company_logo, description, hr_email, jobType, location, requirements, hr_name, responsibilities, salaryRange, status, title } = data

    return (
        <div className='mt-16'>
            <div className="w-full max-w-2xl mx-auto shadow-xl hover:shadow-2xl transition duration-300 ease-in-out py-12 px-10 bg-white">
                <div className="flex items-center gap-4">
                    <img src={company_logo} alt="Company Logo" className="w-16 h-16 rounded-full" />
                    <div>
                        <h2 className="text-xl font-semibold text-black">{title}</h2>
                        <p className="text-sm text-gray-500">{company}</p>
                    </div>
                </div>

                <div>
                    <p className="mb-3 text-gray-700">{description}</p>

                    <div className="flex flex-wrap gap-2 mb-3 text-black">
                        <div className="flex items-center gap-1"><FaMapMarkerAlt /> {location}</div>
                        <h2 className="flex items-center gap-1"><FaBriefcase /> {jobType}</h2>
                        <h2 className="flex items-center gap-1"><FaCalendarAlt /> Deadline: {applicationDeadline}</h2>
                    </div>

                    <div className="mb-3">
                        <h4 className="font-semibold text-black">Requirements:</h4>
                        <ul className="list-disc ml-6 text-gray-600">
                            {requirements?.map((req, idx) => (
                                <li key={idx}>{req}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-3">
                        <h4 className="font-semibold text-black">Responsibilities:</h4>
                        <ul className="list-disc ml-6 text-gray-600">
                            {responsibilities?.map((res, idx) => (
                                <li key={idx}>{res}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-3 text-black">
                        <h4 className="font-semibold">Salary:</h4>
                        <p className="text-gray-700">
                            {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-black">HR Contact:</h4>
                        <p className='text-black'>{hr_name}</p>
                        <p className="flex items-center gap-1 text-black"><FaEnvelope /> {hr_email}</p>
                    </div>
                </div>

                <div className="flex justify-between text-black">
                    <button className='btn btn-soft btn-info mt-6'>
                        <Link to={`/jobApply/${_id}`} >Apply Now</Link>
                    </button>
                    <h2 className="bg-green-500 px-6 flex items-center rounded-2xl
                     text-white">{status}</h2>
                </div>
            </div>
        </div>
    );
};

export default JobsDetails;