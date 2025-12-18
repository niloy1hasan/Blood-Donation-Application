import React, { use } from 'react';
import { AuthContext } from '../../../Context/AuthContext';

const Dashboard = () => {
    const { user } = use(AuthContext);

    return (
        <div className='p-6 h-screen'>
           <h2 className='text-xl lg:text-3xl font-bold text-gray-800'>Welcome, {user?.displayName}</h2>
        </div>
    );
};

export default Dashboard;