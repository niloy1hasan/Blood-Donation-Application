import React from 'react';
import { FaDiscord, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosPaperPlane } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return  (
    <section className="pb-20 lg:px-4 md:px-8 bg-gray-100 font-inter  bg-gradient-to-bl from-rose-100 via-white to-rose-100 dark:from-slate-900 dark:via-red-950 dark:to-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto shadow-2xl shadow-red-100 rounded-3xl overflow-hidden bg-white flex flex-col lg:flex-row">

        {/* Left Info Panel */}
        <div className="lg:w-5/12 bg-red-800 text-white p-10 md:p-14 relative overflow-hidden flex flex-col justify-between">

          {/* Decorative Blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <h3 className="text-3xl text-center lg:text-start  md:text-4xl font-semibold mb-6">
              Contact BloodBank
            </h3>
            <p className="text-red-100 text-center lg:text-start text-lg mb-10 font-light leading-relaxed">
              Have questions about blood donation, eligibility, or appointments?
              Reach out — our team is here to help save lives.
            </p>

            <div className="space-y-6">

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <IoCall size={22} />
                </div>
                <div>
                  <p className="text-sm text-red-200 font-semibold uppercase tracking-wider">
                    Call Us
                  </p>
                  <p className="text-lg">+012345678901</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                 <MdEmail size={24} />
                </div>
                <div>
                  <p className="text-sm text-red-200 font-semibold uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-lg">contact@bloodbank.org</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <FaLocationDot size={22} />
                </div>
                <div>
                  <p className="text-sm text-red-200 font-semibold uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-lg leading-tight">
                    Joydebpur, Gazipur <br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Socials */}
          <div className="relative z-10 mt-12 flex justify-center lg:justify-start gap-4">
            <a className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-red-900 transition-all">
              <FaWhatsapp size={28} />
            </a>
            <a className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-red-900 transition-all">
              <FaFacebookMessenger size={22} />
            </a>
            <a className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-red-900 transition-all">
              <FaDiscord size={28} />
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:w-7/12 p-6 lg:p-10 md:p-14 bg-white">
          <h2 className="text-4xl text-center mt-8 lg:mt-0 lg:text-start  md:text-5xl font-inter font-semibold text-gray-800 mb-2">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-gray-500 text-center lg:text-start mb-8">
            Fill out the form and our team will respond within 24 hours.
          </p>

          <form className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="write your name"
                  className="w-full px-4 py-3 mt-2 text-gray-600 rounded-lg bg-gray-50 border border border-gray-300 focus:ring-offset-2 focus:ring-1 focus:ring-red-600 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 mt-2 text-gray-600 rounded-lg bg-gray-50 border border-gray-300 focus:ring-offset-2 focus:ring-1 focus:ring-red-600 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="01xxxxxxxxx"
                  className="w-full px-4 py-3 mt-2 rounded-lg text-gray-600 bg-gray-50 border border border-gray-300 focus:ring-offset-2 focus:ring-1 focus:ring-red-600 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600">
                  Reason for Contact
                </label>
                <select className="w-full px-4 py-3 mt-2 rounded-lg text-gray-600 bg-gray-50 border border-gray-300 focus:ring-offset-2 focus:ring-1 focus:ring-red-600 focus:border-transparent transition-all">
                  <option disabled selected>
                    Select an option...
                  </option>
                  <option>Become a Donor</option>
                  <option>Donation Appointment</option>
                  <option>Eligibility Questions</option>
                  <option>Emergency Request</option>
                  <option>General Inquiry</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us how we can help you..."
                className="w-full px-4 py-3 mt-2 text-gray-600 rounded-lg bg-gray-50 border border-gray-300 focus:ring-offset-2 focus:ring-1 focus:ring-red-600 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group bg-red-600 w-full lg:w-auto justify-center text-white font-bold py-3.5 px-8 rounded-xl shadow-lg hover:bg-red-800 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Send Message
              <IoIosPaperPlane size={22}
                class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </form>
        </div>

      </div>
    </section>
    );
};

export default Contact;