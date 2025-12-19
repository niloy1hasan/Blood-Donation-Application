import React, { use, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../../Context/AuthContext';
import default_img from "../../../assets/profile-picture.png";
import { CiUser } from 'react-icons/ci';
import { IoIosGitPullRequest, IoIosLogOut } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { TfiHelpAlt } from 'react-icons/tfi';
import { RxDashboard } from "react-icons/rx";
import { MdError } from 'react-icons/md';

const Navbar = () => {
    const { user, logoutUser, setUser } = use(AuthContext);
    console.log(user);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

  const navMenu = <>
    <NavLink to={'/'} className={`text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold`}>
                  Home
                </NavLink>

                <NavLink to={'/search-donor'} className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold">
                  Search Donor
                </NavLink>
                <NavLink to={'/all-donation-request'} className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold">
                  Donation Requests
                </NavLink>
                {user && <NavLink to={'/funding'} className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold">
                  Funding
                </NavLink>}
                <a className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold">
                  About
                </a>
                <a className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold">
                  Contact
                </a>
        </>;

    
const mobileNavMenu = <>
    <NavLink to={'/'} className="bg-gray-100 text-gray-900 block px-3 py-2 rounded-md text-base font-medium" href="#">
            Home
          </NavLink>

          <NavLink to={'/search-donor'} className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
            Search Donor
          </NavLink>
          <NavLink to={'/dashboard/all-blood-donation-request'} className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
            Donation Requests
          </NavLink>
          <a className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium" href="#">
            About
          </a>
          <a className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium" href="#">
            Contact
          </a>
    </>;


const logoutModal = useRef();

  const handleLogout = () => {
    logoutUser()
    .then(result => {
      console.log(result);
      setUser(null);
      navigate('/login');
    })
    .catch(error => {
      console.log(error);
    });
    logoutModal.current.close();
  }
    return (
        <>
    <nav className="font-urbanist sticky top-0 z-50 select-none bg-linear-to-b from-gray-bg to-lightred-bg w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center mr-5 justify-center sm:items-stretch sm:justify-start">
            <div className="shrink-0 flex-1 flex items-center">
              <NavLink to={'/'}>
              <span className="ml-2 text-xl select-none font-bold text-gray-800">Blood<span className="text-red-600">Bank</span></span>
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block sm:ml-6">
              <div className="flex space-x-3">
                {navMenu}
              </div>
            </div>
          </div>

          <div className="hidden lg:block h-6 w-px bg-zinc-500/40"></div>


          {/* Right side */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            { !user && <div className="flex sm:items-center">
              <NavLink to={'/login'} className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold">
                Login
              </NavLink>
              <NavLink to={'/register'} className="ml-4 bg-linear-to-r from-red-600 to-red-800 text-white px-4 py-2 rounded-md text-sm font-bold hover:from-red-700 hover:to-red-900">
                register
              </NavLink>
            </div>}

            {/* Mobile Menu Button */}
            <div className={`lg:hidden ml-5 ${user && 'mr-2'}`}>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <svg className="block text-red-600 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {
              user && <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt={user.displayName}
            src={user.photoURL || default_img} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 border font-inter rounded-xl z-1 mt-3 w-auto p-3 shadow">
          <div className="flex items-center gap-3">
             <div className="w-9 h-9">
            <img
            className="rounded-full h-9 w-9 object-cover"
              src={user.photoURL ? user.photoURL : default_img} />
        </div> 

        <div>
          <h2 className="font-semibold text-nowrap">{user.displayName}</h2>
          <p className="text-[12px] font-urbanist text-nowrap text-gray-400">{user.email}</p>
        </div>
          </div>
          <div className="h-px bg-zinc-200 my-2"></div>
        <li><NavLink to={'/dashboard'}><RxDashboard size={16} /> Dashboard</NavLink></li>
        <li><NavLink to={'/dashboard/profile'}><CiUser size={16} /> Profile</NavLink></li>
        <li className='w-max'><NavLink to={'/dashboard/all-blood-donation-request'}><IoIosGitPullRequest size={16} /> Donation Requests</NavLink></li>
        <li className='w-max'><NavLink><IoIosGitPullRequest size={16} /> Request for Blood</NavLink></li>
        {/* <li><NavLink><RiExchangeFundsLine size={16} /> Fund</NavLink></li> */}
        <div className="h-px bg-zinc-200 my-2"></div>
        <li className='w-max'><a><TfiHelpAlt size={16} /> Help and Support</a></li>
        <li><a><IoSettingsOutline size={16} /> Settings</a></li>
        <li><a onClick={()=>{logoutModal.current?.showModal()}}><IoIosLogOut size={16} /> Logout</a></li>
      </ul>
    </div>
            }
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden shadow-xl shadow-red-100/70 px-2 pt-2 pb-3 space-y-1">
          {mobileNavMenu}

          <div className="pt-4 pb-3 border-t border-gray-200">
           {!user ? <div className="flex items-center px-3 space-y-2 flex-col">
              <NavLink to={'/login'} className="block w-full text-center text-gray-900 bg-gray-100 px-solutions py-2 rounded-md text-base font-medium">
                Login
              </NavLink>
              <NavLink to={'/register'} className="block w-full text-center bg-linear-to-r from-red-600 to-red-800 text-white px-3 py-2 rounded-md text-base font-medium">
                register
              </NavLink>
            </div> : <div className="flex bg-gray-100 px-3 py-2 rounded-xl items-center gap-3">
             <div className="w-9 h-9">
            <img
            className="rounded-full h-9 w-9"
              src={user.photoURL ? user.photoURL : default_img} />
        </div> 

        <div>
          <h2 className="font-semibold text-nowrap">{user.displayName}</h2>
          <p className="text-[12px] text-nowrap text-gray-400">{user.email}</p>
        </div>
          </div>} 
          </div>
        </div>
      )}
      <dialog ref={logoutModal}  className="modal font-inter select-none">
  <div className="modal-box">
    <h3 className="font-bold text-lg flex gap-2 items-center"><MdError className='text-red-600' size={24} /> <span>Confirm Logout</span></h3>
    <p className="py-4">Are you sure you want to logout? You will need to sign in again to access your account.</p>
    <div className="modal-action">
      <form method="dialog" className="flex gap-1.5">
        <button className="btn relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-transform duration-75 focus:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden active:scale-[0.97] cursor-pointer bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700 h-10 py-2 px-4">
          <span className="relative z-10 flex items-center gap-2">Stay Logged In</span>
          <div className="absolute inset-0 z-0"></div>
        </button>
        {/* <button  className="btn bg-red-600 text-white hover:bg-red-700">Logout</button> */}
        <button type="button" onClick={handleLogout} className="relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-transform duration-75 focus:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden active:scale-[0.97] cursor-pointer text-slate-50! h-10 py-2 px-4 bg-red-600! hover:bg-red-700!">
        <span className="relative z-10 flex items-center gap-2">Logout</span>
        <div className="absolute inset-0 z-0"></div>
        </button>
      </form>
    </div>
  </div>
</dialog>
    </nav>
        </>
    );
};

export default Navbar;