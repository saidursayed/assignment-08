import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home/Home';
import MainLayout from '../Layouts/MainLayout';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import AppDetails from '../Pages/AppDetails/AppDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: "/apps",
            element: <Apps></Apps>
        },
        {
            path: "/apps/:id",
            element: <AppDetails></AppDetails>
        },
        {
            path: "/installations",
            element: <Installation></Installation>
        }
    ]
  },
]);

export default router