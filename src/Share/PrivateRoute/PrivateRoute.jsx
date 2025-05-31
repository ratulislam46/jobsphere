import React, { use } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading'


const PrivateRoute = ({ children }) => {

    const location = useLocation();
    // console.log(location);
    // console.log(location.pathname);

    const { user, loading } = use(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }

    return children
};

export default PrivateRoute;