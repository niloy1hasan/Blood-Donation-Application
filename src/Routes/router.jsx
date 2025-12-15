import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Layout/Root';
import Login from '../Components/Pages/Login/Login';
import Register from '../Components/Pages/Register/Register';
import Home from '../Components/Pages/Home/Home/Home';
import SearchDonor from '../Components/Pages/SearchDonor/SearchDonor';
import DashboardLayout from '../Layout/DashboardLayout/DashboardLayout';
import Dashboard from '../Components/Pages/Dashboard/Dashboard';
import Profile from '../Components/Pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/search-donor',
        Component: SearchDonor
      }, {
        path: '/dashboard',
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: Dashboard
          },
          {
            path: '/dashboard/profile',
            Component: Profile
          }
        ]
      }
    ]
  },
]);

export default router;