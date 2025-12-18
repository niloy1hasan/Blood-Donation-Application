import React, { useEffect, useState, useContext, useRef } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import axios from 'axios';
import ProfileSkeleton from './ProfileSkeleton';
import { toast, ToastContainer } from 'react-toastify';
import default_img from '../../../assets/profile-picture.png';

const loadDistricts = async () => {
  try {
    const res = await fetch("/districts.json");
    const data = await res.json();
    data.sort((a, b) => a.name.localeCompare(b.name));
    return data;
  } catch (e) {
    console.error(e);
  }
};

const loadUpazilas = async () => {
  try {
    const res = await fetch("/upazilas.json");
    const data = await res.json();
    data.sort((a, b) => a.name.localeCompare(b.name));
    return data;
  } catch (e) {
    console.error(e);
  }
};

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [districtName, setDistrictName] = useState([]);
  const [upazilaName, setUpazilaName] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);
  const [avatarFile, setAvatarFile] = useState(null);



  const [formData, setFormData] = useState({
    photoURL: '',
    displayName: '',
    gender: '',
    bloodGroup: '',
    district: '',
    upazila: '',
  });

  // Load user data
  useEffect(() => {
    if (!user?.email) return;
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://blood-donation-application-server-eight.vercel.app/users/${user.email}`);
        console.log(res);
        const u = res.data;
        setFormData({
          photoURL: u.photoURL || user.photoURL || default_img,
          displayName: u.displayName || '',
          gender: u.gender || '',
          bloodGroup: u.bloodGroup || '',
          district: u.district || '',
          upazila: u.upazila || '',
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [user?.email]);

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
      const districtId = districtName.find((d) => d.name === formData.district)?.id;
      const filteredData = districtId ? data.filter((u) => u.district_id === districtId) : [];
      setUpazilaName(filteredData || []);
    };
    fetchUpazila();
  }, [formData.district, districtName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const uploadImage = async () => {
  if (!avatarFile) return formData.photoURL;

  const form = new FormData();
  form.append("image", avatarFile);

  const img_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_host_Key}`;
  const res = await axios.post(img_API_URL, form);
  return res.data.data.url;
};

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  setAvatarFile(file);
  setAvatar(URL.createObjectURL(file));
};



  const handleUpdate = async () => {
    setIsSubmit(true);
  try {
    const uploadedURL = await uploadImage();

    const url = `https://blood-donation-application-server-eight.vercel.app/user/update/${user.email}`;
    const payload = {
      photoURL: uploadedURL,
      displayName: formData.displayName?.trim() || user.displayName,
      gender: formData.gender || user.gender,
      bloodGroup: formData.bloodGroup || user.bloodGroup,
      district: formData.district || user.district,
      upazila: formData.upazila || user.upazila,
    };

    const res = await axios.patch(url, payload);
    await updateUserProfile(payload.displayName, payload.photoURL);
    toast.success("Profile updated successfully!");

    setFormData(res.data);
    setAvatar(res.data.photoURL);
    user.photoURL = res.data.photoURL;
    user.displayName = res.data.displayName;
    user.gender = res.data.gender;
    user.bloodGroup = res.data.bloodGroup;
    user.district = res.data.district;
    user.upazila = res.data.upazila;

    setAvatarFile(null);
    setIsEdit(false);
  } catch (err) {
    console.error(err);
    toast.error("Failed to update profile");
  } finally {
    setIsSubmit(false);
  }
};


  return loading ? (
    <ProfileSkeleton />
  ) : (
    <div className="min-h-screen bg-slate-100 font-inter flex justify-center mb-16">
      <div className="w-full max-w-xl lg:max-w-2xl overflow-hidden bg-white shadow-xl">
        {/* Top Profile Section */}
        <div className="relative bg-red-800 text-white p-6 rounded-bl-2xl rounded-br-2xl">
      <button
        onClick={() => {
          if (isEdit) {
            setFormData({
              photoURL: user.photoURL || default_img,
              displayName: user.displayName || "",
              gender: user.gender || "",
              bloodGroup: user.bloodGroup || "",
              district: user.district || "",
              upazila: user.upazila || "",
            });
          }
          setIsEdit(!isEdit);
        }}
        className="absolute right-4 top-4 bg-white/20 px-4 py-1 font-medium rounded-full text-sm"
      >
        {isEdit ? "Cancel" : "Edit"}
      </button>
          <div className="flex flex-col items-center text-center">
            <img
              src={user?.photoURL || default_img}
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
            <h2 className="mt-3 text-2xl font-semibold">{user?.displayName}</h2>
            <h2 className="text-sm opacity-80 font-light mb-3">{user?.email}</h2>
            <p className="text-sm opacity-90">Blood Group: {user?.bloodGroup || 'not given'}</p>
            <p className="text-sm opacity-80">
              {user?.upazila}, {user?.district}
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-5 space-y-4">
          {isEdit && (
  <div className="mt-4">
    <label className="text-xs text-gray-500 block mb-2">
      Avatar
    </label>

    <div className="flex items-center gap-4">
      {/* Avatar Preview */}
      <div className="w-14 h-14 rounded-full border overflow-hidden bg-gray-100">
        <img
          src={avatar || default_img}
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Upload Button */}
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
      >
        {avatarFile ? "Change" : "Upload"} Avatar
      </button>
    </div>
  </div>
)}

          {/* Full Name */}
          <div>
            <label className="text-xs text-gray-500">Full Name</label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              disabled={!isEdit}
              className={`w-full mt-1 px-4 py-2 rounded-xl border text-sm outline-none transition ${
                isEdit ? "border-green-500 bg-white" : "border-gray-200 bg-gray-100"
              }`}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-xs text-gray-500">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              disabled={!isEdit}
              className={`w-full mt-1 px-4 py-2 rounded-xl border text-sm outline-none transition ${
                isEdit ? "border-green-500 bg-white" : "border-gray-200 bg-gray-100"
              }`}
            >
              <option value="" disabled>Select Gender</option>
              {["Male", "Female", "Others"].map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          {/* Blood Group */}
          <div>
            <label className="text-xs text-gray-500">Blood Group</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              disabled={!isEdit}
              className={`w-full mt-1 px-4 py-2 rounded-xl border text-sm outline-none transition ${
                isEdit ? "border-green-500 bg-white" : "border-gray-200 bg-gray-100"
              }`}
            >
              <option value="" disabled>Select Blood Group</option>
              {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((bg) => (
                <option key={bg} value={bg}>{bg}</option>
              ))}
            </select>
          </div>

          {/* District */}
          <div>
            <label className="text-xs text-gray-500">District</label>
            <select
              name="district"
              value={formData.district}
              onChange={(e) => { handleChange(e); setFormData(prev => ({ ...prev, upazila: '' })); }}
              disabled={!isEdit}
              className={`w-full mt-1 px-4 py-2 rounded-xl border text-sm outline-none transition ${
                isEdit ? "border-green-500 bg-white" : "border-gray-200 bg-gray-100"
              }`}
            >
              <option value="" disabled>Select District</option>
              {districtName.map((d) => (
                <option key={d.id} value={d.name}>{d.name}</option>
              ))}
            </select>
          </div>

          {/* Upazila */}
          <div>
            <label className="text-xs text-gray-500">Upazila</label>
            <select
              name="upazila"
              value={formData.upazila}
              onChange={handleChange}
              disabled={!isEdit || !formData.district}
              className={`w-full mt-1 px-4 py-2 rounded-xl border text-sm outline-none transition ${
                isEdit ? "border-green-500 bg-white" : "border-gray-200 bg-gray-100"
              }`}
            >
              <option value="" disabled>
                {upazilaName.length === 0 ? "No upazila available" : "Select Upazila"}
              </option>
              {upazilaName.map((u) => (
                <option key={u.id} value={u.name}>{u.name}</option>
              ))}
            </select>
          </div>

          {/* Update Button */}
          {isEdit && (
            <button
              onClick={handleUpdate}
              disabled={isSubmit}
              className="w-full bg-red-600 text-white py-3 mt-2 rounded-lg font-semibold hover:bg-red-700 focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Update Profile
            </button>
          )}
        </div>
      </div>
      <ToastContainer hideProgressBar />
    </div>
  );
};

export default Profile;