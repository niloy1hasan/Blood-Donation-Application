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
import PrivateRoutes from './PrivateRoutes';
import AllUsers from '../Components/Pages/AllUsers/AllUsers';
import DonationRequest from '../Components/Pages/DonationRequest/DonationRequest';
import CreateDonationRequest from '../Components/Pages/CreateDonationRequest/CreateDonationRequest';
import NotFound from '../Components/NotFound/NotFound';
import Forbidden from '../Components/Forbidden/Forbidden';

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
        element: 
        <PrivateRoutes>
          <DashboardLayout></DashboardLayout>
        </PrivateRoutes>,
        children: [
          {
            index: true,
            Component: Dashboard
          },
          {
            path: '/dashboard/all-users',
            Component: AllUsers
          },
          {
            path: '/dashboard/all-blood-donation-request',
            Component: DonationRequest
          },
          {
            path: '/dashboard/create-donation-request',
            Component: CreateDonationRequest
          },
          {
            path: '/dashboard/profile',
            Component: Profile
          },
          {
            path: '/dashboard/*',
            Component: Forbidden
          }
        ]
      },
      {
        path: '/*',
        Component: NotFound
      }
    ]
  },
]);

export default router;