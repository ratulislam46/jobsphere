import React, { use } from 'react';
import ApplicationRowList from './ApplicationRowList';

const ApplicationList = ({ myApplicationPromise }) => {
    const applications = use(myApplicationPromise)

    // console.log(applications);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <ApplicationRowList
                                application={application}
                                index={index}
                                key={application._id}
                            ></ApplicationRowList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;