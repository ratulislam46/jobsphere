import React, { Suspense, use } from 'react';
import { AuthContext } from '../../Auth/AuthProvider.jsx';
import ApplicationList from './ApplicationList.jsx';
import { myApplicationPromise } from '../../services/ApplicationApi.js';



const MyApplications = () => {

    const { user } = use(AuthContext)

    return (
        <div className='w-11/12 mx-auto my-24'>
            <Suspense>
                <ApplicationList
                    myApplicationPromise={myApplicationPromise(user.email)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;