import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Layout/Root';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [

    ]
  },
]);

export default router;