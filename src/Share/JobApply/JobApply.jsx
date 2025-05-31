import { form } from 'motion/react-client';
import React, { use } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../../Auth/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {

    const { user } = use(AuthContext)
    // console.log(user);
    // console.log(user.email);

    const { id: jobId } = useParams();
    // console.log(jobId);

    const handleJobApply = (e) => {
        e.preventDefault()

        const linkin = e.target.linkin.value;
        const github = e.target.github.value;
        const resume = e.target.resume.value;
        // console.log(linkin, github, resume);

        const applicantion = {
            jobId,
            applicant: user.email,
            linkin,
            github,
            resume
        }
        
        axios.post('https://jobsphere-server-indol.vercel.app/applications', applicantion)
            .then((res) => {
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your applications have been submitted",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <div className='flex flex-col items-center gap-12 justify-center mt-24'>
            <form onSubmit={handleJobApply} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <h1 className='text-center text-2xl'>Job  <Link to={`/jobs/${jobId}`} className='text-blue-500 underline'>Details</Link> </h1>

                <label className="label">LinkIn</label>
                <input type="url" name='linkin' className="input" placeholder="LinkIn URL" />

                <label className="label">GitHub</label>
                <input type="url" name='github' className="input" placeholder="GitHub URL" />

                <label className="label">Resume Link</label>
                <input type="url" name='resume' className="input" placeholder="Resume Link" />
                <input type="submit" value='Apply Job' className='btn btn-accent' />
            </form>
        </div>
    );
};

export default JobApply;