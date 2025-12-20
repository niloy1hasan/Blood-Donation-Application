import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) {
        return <div className="flex items-center justify-center h-screen">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-red-500 animate-spin">
        </div>
    </div>
</div>;
    }
    
    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoutes;