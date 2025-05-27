import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from '../Home/Home'
import Register from "../Share/Register/Register";
import Login from "../Share/Login/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            }
        ]
    },
]);


