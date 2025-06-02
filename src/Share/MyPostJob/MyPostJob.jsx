import React, { Suspense, use } from 'react';
import MypostJobList from '../MyPostJob/MypostJobList'
import { myPostJobsPromise } from '../../services/myPostJobsPromise';
import { AuthContext } from '../../Auth/AuthProvider';

const MyPostJob = () => {

    const { user } = use(AuthContext)

    return (
        <div className='w-11/12 mx-auto'>
            <Suspense>
                <MypostJobList myPostJobsPromise={myPostJobsPromise(user.email)}></MypostJobList>
            </Suspense>
        </div>
    );
};

export default MyPostJob;