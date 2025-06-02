import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplication = () => {

    const { job_id } = useParams();
    const applications = useLoaderData();
    console.log(applications);

    const handleStatus = (e, id) => {
        // console.log(e.target.value, id);

        axios.patch(`http://localhost:3000/applications/${id}`, { status: e.target.value })
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: "Update status successfully",
                    icon: "success",
                    draggable: true
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='w-11/12 mx-auto'>
            <p className='text-4xl mt-8 mb-2 font-bold font-serif'>Total application : {applications.length}</p>
            <h1 className='text-xl text-gray-500 mb-5'>View Application: {job_id}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            applications?.map((application, index) =>
                                <tr key={application._id}>
                                    <th>{index + 1} </th>
                                    <td>{application.applicant}</td>
                                    <td>
                                        <select onChange={e => handleStatus(e, application._id)} defaultValue={application?.status} className="select">
                                            <option disabled={true}>Status update</option>
                                            <option>Pending</option>
                                            <option>Interview</option>
                                            <option>Hired</option>
                                            <option>Reject</option>
                                        </select>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplication;