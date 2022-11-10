import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddService from '../components/AddService.js/AddService';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Blog from '../components/Pages/Blog/Blog';
import Home from '../components/Pages/Home/Home';
import ServiceDetails from '../components/Pages/Services/ServiceDetails';
import Services from '../components/Pages/Services/Services';
import Signin from '../components/Registration/Signin';
import Signup from '../components/Registration/Signup';
import Main from '../layout/Main';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Signin></Signin>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/blogs",
                element: <Blog></Blog>
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/addService",
                element: <AddService></AddService>
            },
        ]
    },
    {
        path: '/*', 
        element: <ErrorPage></ErrorPage>
    }
]);

