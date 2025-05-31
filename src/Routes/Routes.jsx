import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from '../Home/Home'
import Register from "../Share/Register/Register";
import Login from "../Share/Login/Login";
import JobsDetails from "../Share/Jobs/JobsDetails";
import PrivateRoute from "../Share/PrivateRoute/PrivateRoute";
import JobApply from '../Share/JobApply/JobApply'
import MyApplications from "../Share/MyApplications/MyApplications";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                loader: () => fetch('https://jobsphere-server-indol.vercel.app/jobs')
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/jobs/:id',
                Component: JobsDetails,
                loader: ({ params }) => fetch(`https://jobsphere-server-indol.vercel.app/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute>
                    <JobApply></JobApply>
                </PrivateRoute>
            },
            {
                path: '/myApplications',
                element: <PrivateRoute>
                    <MyApplications></MyApplications>
                </PrivateRoute>
            }
        ]
    },
]);


