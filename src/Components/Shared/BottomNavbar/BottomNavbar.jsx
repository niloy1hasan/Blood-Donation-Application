import React, { useState } from 'react';
import { FiHome, FiUsers, FiSettings, FiUser, FiMenu, FiGitPullRequest } from "react-icons/fi";
import { AuthContext } from '../../../Context/AuthContext';
import { NavLink, useLocation } from 'react-router';
const BottomNavbar = () => {
        // const { user } = use(AuthContext);
        const [drawerOpen, setDrawerOpen ] = useState(false);
        const location = useLocation();
    
        const menuItems = [
                    { icon: <FiHome />, label: "Dashboard", path: "/dashboard" },
                    { icon: <FiUsers />, label: "Users" },
                    { icon: <FiGitPullRequest />, label: "Requests" },
                    { icon: <FiUser />, label: "Profile", path: "/dashboard/profile"},
                    { icon: <FiSettings />, label: "Settings" },
                  ];
    return (
       <>
        <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 flex justify-around py-2">
        {menuItems.slice(0, 4).map((item) => (
          <NavLink to={item.path} key={item.label} className={`flex flex-col py-1.5 items-center text-gray-600 ${location.pathname===item.path && 'text-red'}`}>
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </NavLink>
        ))}
        <button
          className="flex flex-col py-1.5 items-center text-gray-600"
          onClick={() => setDrawerOpen(true)}
        >
          <FiMenu />
          <span className="text-xs">More</span>
        </button>
      </nav>
      {/* Drawer Menu */}
      {drawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed left-0 top-0 w-64 h-full bg-red-800 text-white p-4">
            <button
              className="mb-4 text-white text-xl"
              onClick={() => setDrawerOpen(false)}
            >
              ✕
            </button>
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-red-600 mb-2"
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
       </>
    );
};

export default BottomNavbar;