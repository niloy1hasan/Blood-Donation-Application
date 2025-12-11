import React, { useState } from "react";
import { IoEnter } from "react-icons/io5";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { NavLink } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="md:min-h-screen font-inter bg-gray-100 flex">
      <div className="w-full flex justify-center md:p-8">
        <div className="w-full max-w-xl">
          <div className="bg-white md:rounded-2xl shadow-xl p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <IoEnter className="text-red-600 text-3xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Log in</h2>
              <p className="text-gray-600 mt-2">Please log in to continue</p>
            </div>

            

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
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
                {email && !validateEmail(email) && (
                  <p className="mt-2 text-sm text-red-600">
                    Please enter a valid email address
                  </p>
                )}
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div
                  className="w-full rounded-lg border border-gray-300 
                focus-within:ring-1 focus-within:ring-offset-4 focus-within:outline-2 focus-within:ring-red-600 
                focus-within:border-transparent transition-colors flex items-center px-2"
                >
                  <input
                    type={showPassword ? "text" : "password"}
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
              
              <div className="mb-6 flex md:justify-end select-none">
                <NavLink className='cursor-pointer text-red-600 font-medium hover:underline text-[13px] md:text-sm transition-all duration-500'>forgot your password?</NavLink>
              </div>

              <button
                type="submit"
                disabled={
                  loading ||
                  (email && !validateEmail(email)) ||
                  (password && !validatePassword(password))
                }
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="inline-flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Log In"
                )}
              </button>
            </form>


            <div className="divider font-inter my-8 text-sm">OR</div>

                <div className="flex flex-col w-full gap-3">
            <button
          className="w-full flex items-center justify-center border border-gray-200 rounded-lg shadow-lg
          px-8 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 
          hover:shadow-2xl active:translate-y-0 bg-white text-gray-800"
        >
          <svg
            className="h-6 w-6 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-0.5 0 48 48"
          >
            <g fill="none" fillRule="evenodd">
              <g transform="translate(-401 -860)">
                <g transform="translate(401 860)">
                  <path d="M9.827 24c0-1.524.253-2.986.705-4.356L2.623 13.604A23.864 23.864 0 00.214 24c0 3.737.868 7.261 2.407 10.388l7.904-6.051C10.077 26.973 9.827 25.517 9.827 24" fill="#FBBC05"/>
                  <path d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533c-9.287 0-17.268 5.311-21.09 13.071l7.909 6.04c1.822-5.532 7.017-9.511 13.181-9.511" fill="#EB4335"/>
                  <path d="M23.714 37.867c-6.165 0-11.359-3.979-13.182-9.51l-7.908 6.037c3.822 7.761 11.803 13.072 21.09 13.072 5.732 0 11.205-2.036 15.311-5.849l-7.507-5.804c-2.118 1.335-4.786 2.054-7.804 2.054" fill="#34A853"/>
                  <path d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.8 7.014l7.507 5.804C43.34 37.614 46.145 31.649 46.145 24" fill="#4285F4"/>
                </g>
              </g>
            </g>
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Facebook Button */}
        <button
          className="w-full flex items-center justify-center rounded-lg shadow-lg 
          px-8 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5
          hover:shadow-2xl active:translate-y-0 bg-blue-700 hover:bg-blue-800 border border-blue-800/30
          text-white"
        >
          <svg
            className="h-6 w-6 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <g fill="none" fillRule="evenodd">
              <g transform="translate(-200 -160)" fill="#FFF">
                <path d="M225.638 208h-22.99c-1.463 0-2.649-1.186-2.649-2.649v-42.702c0-1.463 1.186-2.649 2.65-2.649h42.7c1.464 0 2.65 1.186 2.65 2.649v42.702c0 1.463-1.186 2.649-2.65 2.649h-12.231v-18.588h6.24l.934-7.244h-7.174v-4.625c0-2.098.58-3.527 3.508-3.527l3.836-.002v-6.48c-.663-.088-2.94-.285-5.59-.285-5.53 0-9.317 3.376-9.317 9.575v5.344h-6.255v7.244h6.255V208z"/>
              </g>
            </g>
          </svg>
          <span>Continue with Facebook</span>
        </button>
            </div>


              <p className="mt-6 text-sm text-center text-gray-600">
                Don't have an account?{" "}
                <NavLink
                  to={"/register"}
                  className="ml-1 text-red-600 hover:text-red-700 font-semibold"
                >
                  Register
                </NavLink>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
