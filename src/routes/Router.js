import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Blog from '../components/Pages/Blog/Blog';
import Home from '../components/Pages/Home/Home';
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
            }
        ]
    },
    {
        path: '/*', 
        element: <ErrorPage></ErrorPage>
    }
]);

