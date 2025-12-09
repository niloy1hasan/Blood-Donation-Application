import React, { useState } from 'react';
import { IoEnter } from 'react-icons/io5';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { NavLink } from 'react-router';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-full flex justify-center p-8">
        <div className="w-full max-w-xl">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <IoEnter className='text-red-600 text-3xl' />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Log in</h2>
              <p className="text-gray-600 mt-2">Please log in to continue</p>
            </div>

            <div className='flex flex-col w-full gap-4'>
          <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  log in with Google
</button>

<button className="btn bg-[#1A77F2] w-full text-white border-[#005fd8]">
  <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
  log in with Facebook
</button>

      </div>

  <div className="divider font-inter text-sm">OR</div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-offset-2 focus:ring-1 focus:ring-red-600 focus:border-transparent transition-colors"
                    placeholder="you@example.com"
                  />
                  <i className="fas fa-envelope absolute right-2 top-4 w-6 h-6 text-gray-400"></i>
                </div>
                {email && !validateEmail(email) && <p className="mt-2 text-sm text-red-600">Please enter a valid email address</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="w-full rounded-lg border border-gray-300 
                focus-within:ring-1 focus-within:ring-offset-4 focus-within:outline-2 focus-within:ring-red-600 
                focus-within:border-transparent transition-colors flex items-center px-2">
  <input
    type={showPassword ? 'text' : 'password'}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    className="w-full px-2 py-3 outline-none"
    placeholder="••••••••"
  />

  <button
    type="button"
    className="text-gray-400 hover:text-gray-600"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <LuEye /> : <LuEyeClosed />}
  </button>
</div>

{password && !validatePassword(password) && (
  <p className="mt-2 text-sm text-red-600">
    Password must be at least 8 characters
  </p>
)}

              </div>

              <button
                type="submit"
                disabled={loading || (email && !validateEmail(email)) || (password && !validatePassword(password))}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Log In'
                )}
              </button>
              <p className='mt-6 text-center text-gray-600'>Don't have an account? <NavLink to={'/register'} className='ml-1 text-red-600 hover:text-red-700 font-semibold'>Register</NavLink></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
