import React, { use } from 'react';
import default_img from "../../../assets/profile-picture.png";
import { FiHome, FiUsers, FiSettings, FiUser, FiMenu, FiGitPullRequest } from "react-icons/fi";
import { AuthContext } from '../../../Context/AuthContext';
import { NavLink, useLocation } from 'react-router';

const Sidebar = () => {
        const { user } = use(AuthContext);
        const location = useLocation();
        console.log(user);
        const menuItems = [
            { icon: <FiHome />, label: "Dashboard", path: "/dashboard" },
            { icon: <FiUsers />, label: "Users" },
            { icon: <FiGitPullRequest />, label: "Requests" },
            { icon: <FiUser />, label: "Profile", path: "/dashboard/profile"},
            { icon: <FiSettings />, label: "Settings" },
          ];
    return (
        <aside className="hidden md:flex h-screen overflow fixed bottom-0 flex-col w-20 lg:w-64 bg-red-800 text-white">
                <div className="flex items-center justify-center h-16 px-4 bg-red-900 text-xl font-semibold">
                  BloodBank
                </div>
                <div className="flex items-center justify-center h-16 px-4 bg-red-900 text-xl font-semibold">
                  BloodBank
                </div>
                <nav className="flex-1 px-4 py-4 overflow-y-auto space-y-2">
                  {menuItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      className={`flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-red-700 ${location.pathname===item.path && 'bg-red-700'}`}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      <span className='hidden lg:block'>{item.label}</span>
                    </NavLink>
                  ))}
                </nav>
                
                  
                {user && <div className='flex fixed left-5 bottom-0 justify-center bg-red-800 items-center my-2 gap-2.5'>
                    <img className='rounded-full w-9 h-9' src={user?.photoURL || default_img} alt="" />
                    <div className='hidden lg:block'>
                        <h2 className='font-semibold'>{user?.displayName || 'username'}</h2>
                        <p className='text-sm '>{user?.email || 'email'}</p>
                    </div>
                  </div>}
              </aside>
    );
};

export default Sidebar;