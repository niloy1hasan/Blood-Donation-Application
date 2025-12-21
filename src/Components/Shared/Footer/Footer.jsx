import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router";


const Footer = () => {
  return (
    <footer className="w-full bg-white pb-12 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 pt-10 text-gray-700">
          {/* Logo + Info */}
          <div className="col-span-full lg:col-span-2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-3">Blood<span className="text-red-600">Bank</span></h2>
            <p className="mb-3 text-gray-500 text-sm">
              Saving lives, one donation at a time. Join us to make a
              difference.
            </p>
            <div className="flex justify-center lg:justify-start my-4 space-x-3">
            <a
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-500 text-white shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-600"
            >
              <FaInstagram size={20} />
            </a>
            <a
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 text-white shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-black"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              className="w-9 h-9 flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700"
            >
              <FaYoutube size={20} />
            </a>
          </div>
          </div>

          {/* Pages */}
          <div className="flex flex-col flex-1 justify-center text-center lg:text-start">
            <h4 className="font-semibold mb-3 flex gap-1.5 justify-center lg:justify-start items-center"><div className="h-4 w-0.5 lg:-ml-2.5 bg-red-600"></div> Pages</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col justify-center text-center lg:text-start">
            <h4 className="font-semibold mb-3 flex gap-1.5 justify-center lg:justify-start items-center"><div className="h-4 w-0.5 lg:-ml-2.5 bg-red-600"></div> Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Tips for Donors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col justify-center text-center lg:text-start">
            <h4 className="font-semibold mb-3 flex gap-1.5 justify-center lg:justify-start items-center"><div className="h-4 w-0.5 lg:-ml-2.5 bg-red-600"></div> Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Community (New Section) */}
          <div className="flex flex-col justify-center text-center lg:text-start">
            <h4 className="font-semibold mb-3 flex gap-1.5 justify-center lg:justify-start items-center"><div className="h-4 w-0.5 lg:-ml-2.5 bg-red-600"></div> Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-600">
                  Forums
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Ambassadors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between border-t border-gray-200 pt-6">
          <div>
  <div
    className="mx-auto h-5 w-auto text-slate-900"
  >
    <h1 className="text-center text-2xl font-bold">Blood<span className="text-red-600">Bank</span></h1>
  </div>
  <p className="mt-5 text-center text-sm leading-6 text-slate-500">
    © 2025 BloodBank. All rights reserved.
  </p>
</div>


          <div>
            <ul className="flex flex-wrap items-center text-[11px] lg:text-sm lg:items-start my-5 text-gray-500 gap-2 lg:gap-3">
              <li className="hover:underline">Privacy Policy</li>
              <li className="hover:underline">Terms and Conditions</li>
              <li className="hover:underline">Supports</li>
            </ul>
          </div>
          <NavLink
              to={'/funding'}
              className="flex gap-2 justify-center items-center px-6 py-2 bg-red-600 font-bold text-white rounded-full text-sm shadow hover:bg-red-700 transition"
            >
              <FaRegHeart size={16} /> Donate Now
            </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
