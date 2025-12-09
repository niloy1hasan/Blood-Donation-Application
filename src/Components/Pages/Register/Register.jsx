import React, { useEffect, useRef, useState } from 'react';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { TiUserAdd } from 'react-icons/ti';
import { NavLink } from 'react-router';
import default_img from '../../../assets/profile-picture.png';

 const loadDistricts= async () => {
  try {
    const res = await fetch('districts.json');
    const data = await res.json();
    data.sort((a, b) => a.name.localeCompare(b.name));
    return data;
  } catch (e) {
    console.error(e);
  }
};

 const loadUpazilas= async () => {
  try {
    const res = await fetch('upazilas.json');
    const data = await res.json();
    data.sort((a, b) => a.name.localeCompare(b.name));
    return data;
  } catch (e) {
    console.error(e);
  }
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [bloodGroup, setBloodGroup] = useState('');
  const [district, setDistrict] = useState('');
  const [upazila, setUpazila] = useState('');
  const [districtName, setDistrictName] = useState([]);
  const [upazilaName, setUpazilaName] = useState([]);


  const fileInputRef = useRef();

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  useEffect(() => {
  const fetchDistricts = async () => {
    const data = await loadDistricts();
    setDistrictName(data || []);
  };
  fetchDistricts();
}, []);

  useEffect(() => {
  const fetchUpazila = async () => {
    const data = await loadUpazilas();
    const id = districtName.find(item => item.name === district);
    const filteredData = district ? data.filter(item => item.district_id === id.id) : data;
    setUpazilaName(filteredData || []);
  };
  fetchUpazila();
}, [district]);


  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8;
  const validateConfirmPassword = () => password === confirmPassword;

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
                <TiUserAdd className='text-red-600 text-3xl' />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
              <p className="text-gray-600 mt-2">Get started with your account</p>
            </div>


        <div className='flex flex-col w-full gap-4'>
          <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  sign in with Google
</button>

<button className="btn bg-[#1A77F2] w-full text-white border-[#005fd8]">
  <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
  sign in with Facebook
</button>

      </div>

  <div className="divider font-inter text-sm">OR</div>


            <form onSubmit={handleSubmit}>

<div className="flex items-center flex-col my-5 lg:flex-row gap-6 justify-center">
      {/* Avatar Circle */}
      <div
        onClick={handleImageClick}
        className="h-32 border w-32 p-1 border-red-600 rounded-full overflow-hidden cursor-pointer"
      >
        <img
          src={avatar ? URL.createObjectURL(avatar) : default_img}
          alt="avatar"
          className="h-full w-full rounded-full object-cover"
        />
      </div>

      <div className='flex justify-center flex-col items-center lg:items-start'>
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Avatar</label>
      <div class="mx-auto max-w-xs">
        <input type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-red-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-red-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
      </div>
      </div>
    </div>

              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                  placeholder="write your name"
                />
              </div>

              <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
                  <select
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                      focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                  >
                    <option value="" selected disabled>Select Blood Group</option>
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
            </div>


            {/* District */}
<div className="mb-6">
  <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
  <select
    value={district}
    onChange={(e) => {setDistrict(e.target.value); setUpazila('')}}
    required
    className="w-full px-4 py-3 rounded-lg border border-gray-300
      focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
  >
    <option value="" selected disabled>Select District</option>
    {districtName.map((item, index) => (
      <option key={index} value={item.name}>
        {item.name}
      </option>
    ))}
  </select>
</div>

{/* Upazila */}
<div className="mb-6">
  <label className="block text-sm font-medium text-gray-700 mb-2">Upazila</label>
  <select
    value={upazila}
    onChange={(e) => setUpazila(e.target.value)}
    required
    className="w-full px-4 py-3 rounded-lg border border-gray-300
      focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
  >
    <option value="" selected disabled>Select Upazila</option>
    {upazilaName.map((item, index) => (
      <option key={index} value={item.name}>
        {item.name}
      </option>
    ))}
  </select>
</div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                  placeholder="you@example.com"
                />
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
                  <button type="button" className="text-gray-400 hover:text-gray-600" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <LuEye /> : <LuEyeClosed />}
                  </button>
                </div>
                {password && !validatePassword(password) && <p className="mt-2 text-sm text-red-600">Password must be at least 8 characters</p>}
              </div>


              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <div className="w-full rounded-lg border border-gray-300 
                focus-within:ring-1 focus-within:ring-offset-4 focus-within:outline-2 focus-within:ring-red-600 
                focus-within:border-transparent transition-colors flex items-center px-2">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-2 py-3 outline-none"
                    placeholder="••••••••"
                  />
                  <button type="button" className="text-gray-400 hover:text-gray-600" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <LuEye /> : <LuEyeClosed />}
                  </button>
                </div>
                {confirmPassword && !validateConfirmPassword() && <p className="mt-2 text-sm text-red-600">Passwords do not match</p>}
              </div>

              <button
                type="submit"
                disabled={loading || (email && !validateEmail(email)) || (password && !validatePassword(password)) || (confirmPassword && !validateConfirmPassword())}
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
                  'Create Account'
                )}
              </button>
              <p className='mt-6 text-center text-gray-600'>Already have an account? <NavLink to={'/login'} className='ml-1 text-red-600 hover:text-red-700 font-semibold'>Log In</NavLink></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;