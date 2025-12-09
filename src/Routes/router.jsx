import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Layout/Root';
import Login from '../Components/Pages/Login/Login';
import Register from '../Components/Pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  },
]);

export default router;