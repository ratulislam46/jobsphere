import { object } from 'motion/react-client';
import React, { use } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {

    const { user } = use(AuthContext)

    const handleAddJob = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())
        // console.log(data);

        // process salaryRange 
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }
        console.log(newJob);

        //process requirments
        const requirmentsString = newJob.requirments;
        const requirmentssplit = requirmentsString.split(',');
        const requirmentsClean = requirmentssplit.map(req => req.trim());
        newJob.requirments = requirmentsClean

        //process responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim());
        // console.log(newJob);

        axios.post('http://localhost:3000/jobs', newJob)
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: "Job added successfully",
                    icon: "success",
                    draggable: true
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='w-11/12 mx-auto mt-12 flex justify-center'>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Job Title</label>
                    <input type="text" name='title' className="input" placeholder="Job Title" required />

                    <label className="label">Company</label>
                    <input type="text" name='company' className="input" placeholder="Company Name" />

                    <label className="label">Location</label>
                    <input type="text" name='location' className="input" placeholder="Company Location" />

                    <label className="label">Company Logo</label>
                    <input type="url" name='company_logo' className="input" placeholder="Company Logo" />

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Type</legend>
                        <div className="filter">
                            <input className="btn filter-reset" type="radio" name="jobtype" aria-label="All" />
                            <input className="btn" type="radio" name="jobtype" aria-label="On-Site" value='On-Site' />
                            <input className="btn" type="radio" name="jobtype" aria-label="Remote" value='Remote' />
                            <input className="btn" type="radio" name="jobtype" aria-label="Hybrid" value='Hybrid' />
                        </div>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Category</legend>
                        <select name='category' defaultValue="Pick a color" className="select">
                            <option disabled={true}>Job Category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Part-Time</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Application Deadline</legend>
                        <input name='deadline' type="date" className="input" />
                    </fieldset>

                    <fieldset name='salaryRange' className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Salary Range</legend>

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                            <div>
                                <label className="label">Minimun Salary </label>
                                <input type="text" name='min' className="input" placeholder="Minimun Salary" />
                            </div>

                            <div>
                                <label className="label">Maximun Salary</label>
                                <input type="text" name='max' className="input" placeholder="Maximun Salary" />

                            </div>
                            <div>
                                <label className="label">Currency</label>
                                <select name='currency' defaultValue="Select a Currency" className="select">
                                    <option disabled={true}>Select aCurrency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>EU</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Description</legend>
                        <textarea className="textarea" name='description' placeholder="Job Description"></textarea>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Requirments</legend>
                        <textarea className="textarea" name='requirments' placeholder="Job Requirments (Separate by comma)"></textarea>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Job Responsibility</legend>
                        <textarea className="textarea" name='responsibilities' placeholder="Job Responsibility (Separate by comma)" required></textarea>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">HR_Details</legend>

                        <label className="label">HR_Name</label>
                        <input type="name" name='hr_name' className="input" placeholder="HR_Name" />

                        <label className="label">HR_Email</label>
                        <input type="email" defaultValue={user.email} readOnly name='hr_email' className="input" placeholder="HR_Email" />
                    </fieldset>

                    <button className="btn btn-neutral mt-4">Add Job</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddJob;