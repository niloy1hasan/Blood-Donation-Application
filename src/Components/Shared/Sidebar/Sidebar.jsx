import React from 'react';
import default_img from "../../../assets/profile-picture.png";
import { FiHome, FiUsers, FiSettings, FiUser, FiMenu, FiGitPullRequest } from "react-icons/fi";
import { NavLink, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Sidebar = () => {
        const { user } = useAuth();
        const location = useLocation();
        const menuItems = [
                            { icon: <FiHome />, label: "Dashboard", path: "/dashboard", role: ['admin', 'donor', 'volunteer'] },
                            { icon: <FiUsers />, label: "Users", path: "/dashboard/all-users", role: ['admin'] },
                            { icon: <FiGitPullRequest />, label: "My Requests", path: '/dashboard/my-donation-requests', role: ['admin', 'donor', 'volunteer'] },
                            { icon: <FiGitPullRequest />, label: "Requests", path: '/dashboard/all-blood-donation-request', role: ['admin', 'volunteer'] },
                            { icon: <FiGitPullRequest />, label: "Create Request", path: "/dashboard/create-donation-request", role: ['admin', 'donor', 'volunteer'] },
                            { icon: <FiUser />, label: "Profile", path: "/dashboard/profile", role: ['admin', 'donor', 'volunteer'] },
                            { icon: <FiSettings />, label: "Settings", role: ['admin', 'donor', 'volunteer'] },
                          ];
    return (
        <aside className="hidden md:flex h-screen z-20 overflow fixed bottom-0 flex-col w-20 lg:w-64 bg-red-800 text-white">
                <div className="flex items-center justify-center h-16 px-4 bg-red-900 text-xl font-semibold">
                  BloodBank
                </div>
                <div className="hidden lg:flex items-center justify-center h-16 px-4 bg-red-900 text-xl font-semibold">
                  BloodBank
                </div>
                <nav className="flex-1 px-4 py-4 overflow-y-auto space-y-2">
                  {menuItems.map((item) => (

                    item.role.includes(user?.role) && (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      className={`flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-red-700/80 ${location.pathname===item.path && 'bg-red-700'}`}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      <span className='hidden lg:block'>{item.label}</span>
                    </NavLink>)
                  ))}
                </nav>
                
                  
                {user && <div className='flex fixed left-5 bottom-0 justify-center bg-red-800 items-center my-2 gap-2.5'>
                    <img className='rounded-full w-9 h-9 object-cover' src={user?.photoURL || default_img} alt="" />
                    <div className='hidden lg:block'>
                        <h2 className='font-semibold'>{user?.displayName || 'username'}</h2>
                        <p className='text-sm '>{user?.email || 'email'}</p>
                    </div>
                  </div>}
              </aside>
    );
};

export default Sidebar;