import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from '../Home/Home'
import Register from "../Share/Register/Register";
import Login from "../Share/Login/Login";
import JobsDetails from "../Share/Jobs/JobsDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                loader: ()=>fetch('http://localhost:3000/jobs')
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
                loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
            }
        ]
    },
]);


