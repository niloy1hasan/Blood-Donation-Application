import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navMenu = <>
    <NavLink to={'/'} className={`text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold`}>
                  Home
                </NavLink>

                <a className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold" href="#">
                  Search Donor
                </a>
                <a className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold" href="#">
                  Donation Requests
                </a>
                <a className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold" href="#">
                  About
                </a>
                <a className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold" href="#">
                  Contact
                </a>
        </>;

    
const mobileNavMenu = <>
    <NavLink to={'/'} className="bg-gray-100 text-gray-900 block px-3 py-2 rounded-md text-base font-medium" href="#">
            Home
          </NavLink>

          <a className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium" href="#">
            Search Donor
          </a>
          <a className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium" href="#">
            Donation Requests
          </a>
          <a className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium" href="#">
            About
          </a>
          <a className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium" href="#">
            Contact
          </a>
    </>;
    return (
        <>
    <nav className="font-urbanist select-none bg-linear-to-b from-gray-bg to-lightred-bg/80 w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center mr-5 justify-center sm:items-stretch sm:justify-start">
            <div className="shrink-0 flex-1 flex items-center">
              <NavLink to={'/'}>
              <span className="ml-2 text-xl select-none font-bold text-gray-800">BloodBank</span>
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block sm:ml-6">
              <div className="flex space-x-3">
                {navMenu}
              </div>
            </div>
          </div>

          <div class="hidden md:block h-6 w-px bg-zinc-500/40"></div>


          {/* Right side */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:flex sm:items-center">
              <a className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-semibold" href="#">
                Login
              </a>
              <a className="ml-4 bg-linear-to-r from-red-600 to-red-800 text-white px-4 py-2 rounded-md text-sm font-bold hover:from-red-700 hover:to-red-900" href="#">
                register
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
          {mobileNavMenu}

          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-3 space-y-2 flex-col">
              <a className="block w-full text-center text-gray-900 bg-gray-100 px-solutions py-2 rounded-md text-base font-medium" href="#">
                Login
              </a>
              <a className="block w-full text-center bg-linear-to-r from-red-600 to-red-800 text-white px-3 py-2 rounded-md text-base font-medium" href="#">
                register
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
        </>
    );
};

export default Navbar;