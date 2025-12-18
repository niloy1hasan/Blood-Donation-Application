import React from 'react';
import Sidebar from '../../Components/Shared/Sidebar/Sidebar';
import { Outlet } from 'react-router';
import BottomNavbar from '../../Components/Shared/BottomNavbar/BottomNavbar';

const DashboardLayout = () => {
    return (
        <div className='flex'> 
           <Sidebar></Sidebar>
           <main className="flex-1 md:ms-20 lg:ms-64 bg-gray-100 overflow-y-auto">
                <Outlet />
            </main>
            <BottomNavbar />
        </div>
    );
};

export default DashboardLayout;