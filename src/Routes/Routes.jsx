import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from '../Home/Home'
import Register from "../Share/Register/Register";
import Login from "../Share/Login/Login";
import JobsDetails from "../Share/Jobs/JobsDetails";
import PrivateRoute from "../Share/PrivateRoute/PrivateRoute";
import JobApply from '../Share/JobApply/JobApply'
import MyApplications from "../Share/MyApplications/MyApplications";
import AddJob from "../Share/AddJob/AddJob";
import MyPostJob from "../Share/MyPostJob/MyPostJob";
import ViewApplication from "../Share/ViewApplication/ViewApplication";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                loader: () => fetch('http://localhost:3000/jobs')
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
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
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
            },
            {
                path: '/applications/:job_id',
                element: <PrivateRoute>
                    <ViewApplication></ViewApplication>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/applications/job/${params.job_id}`)
            },
            {
                path: '/addJob',
                element: <PrivateRoute>
                    <AddJob></AddJob>
                </PrivateRoute>
            },
            {
                path: '/myPostJob',
                element: <PrivateRoute>
                    <MyPostJob></MyPostJob>
                </PrivateRoute>
            }
        ]
    },
]);


