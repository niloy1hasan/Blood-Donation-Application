import React from 'react';
import { Navigate } from 'react-router-dom';
import Forbidden from '../Components/Forbidden/Forbidden';
import useRole from '../Hooks/useRole';
import useAuth from '../Hooks/useAuth';

const AdminVolunteerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const { role, roleLoading } = useRole();

    if (loading || roleLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="relative">
                    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-red-500 animate-spin"></div>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (role !== 'admin' && role!='volunteer') {
        return <Forbidden />;
    }

    return children;
};

export default AdminVolunteerRoute;