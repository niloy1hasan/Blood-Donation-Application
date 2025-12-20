import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";

const CreateDonationRequest = () => {
  const { user } = useAuth();

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [formData, setFormData] = useState({
    requesterName: user?.displayName || "",
    requesterEmail: user?.email || "",
    recipientName: "",
    district: "",
    upazila: "",
    hospital: "",
    address: "",
    bloodGroup: "",
    donationDate: "",
    donationTime: "",
    message: "",
    status: "pending",
  });

  useEffect(() => {
    fetch("/districts.json")
      .then(res => res.json())
      .then(data => setDistricts(data.sort((a, b) => a.name.localeCompare(b.name))));
  }, []);

  useEffect(() => {
    if (!formData.district) return setUpazilas([]);
    fetch("/upazilas.json")
      .then(res => res.json())
      .then(data => {
        const id = districts.find(d => d.name === formData.district)?.id;
        setUpazilas(data.filter(u => u.district_id === id));
      });
  }, [formData.district, districts]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user?.status === "blocked") {
      toast.error("Blocked users cannot create donation requests!");
      return;
    }

    try {
      await axios.post(
        "https://blood-donation-application-server-eight.vercel.app/donation-requests",
        formData
      );
      toast.success("Donation request created successfully!");
    } catch (error) {
      toast.error("Failed to create donation request");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center mb-16 lg:p-6 font-inter">
      <div className="w-full max-w-3xl">
        <div className="bg-white lg:rounded-2xl shadow-xl p-6 lg:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Create Donation Request
            </h2>
            <p className="text-gray-600 mt-2">
              Fill the form carefully to request blood donation
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Requester Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Requester Name</label>
                <input
                  readOnly
                  value={formData.requesterName}
                  className="input-disabled"
                />
              </div>
              <div>
                <label className="form-label">Requester Email</label>
                <input
                  readOnly
                  value={formData.requesterEmail}
                  className="input-disabled"
                />
              </div>
            </div>

            {/* Recipient */}
            <div>
              <label className="form-label">Recipient Name</label>
              <input
                name="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
                className="input-primary"
                placeholder="Recipient full name"
              />
            </div>

            {/* Location */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">District</label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="input-primary"
                >
                  <option value="">Select District</option>
                  {districts.map(d => (
                    <option key={d.id} value={d.name}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">Upazila</label>
                <select
                  name="upazila"
                  value={formData.upazila}
                  onChange={handleChange}
                  disabled={!formData.district}
                  className="input-primary disabled:bg-gray-100"
                >
                  <option value="">Select Upazila</option>
                  {upazilas.map(u => (
                    <option key={u.id} value={u.name}>{u.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Hospital */}
            <div>
              <label className="form-label">Hospital Name</label>
              <input
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                className="input-primary"
                placeholder="Hospital name"
              />
            </div>

            {/* Address */}
            <div>
              <label className="form-label">Full Address</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input-primary"
                placeholder="Street / Area"
              />
            </div>

            {/* Blood + Date */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="form-label">Blood Group</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="input-primary"
                >
                  <option value="">Select</option>
                  {["A+","A-","B+","B-","O+","O-","AB+","AB-"].map(bg => (
                    <option key={bg}>{bg}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">Donation Date</label>
                <input
                  type="date"
                  name="donationDate"
                  value={formData.donationDate}
                  onChange={handleChange}
                  className="input-primary"
                />
              </div>

              <div>
                <label className="form-label">Donation Time</label>
                <input
                  type="time"
                  name="donationTime"
                  value={formData.donationTime}
                  onChange={handleChange}
                  className="input-primary"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="form-label">Request Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="input-primary h-28 resize-none"
                placeholder="Explain the situation briefly"
              />
            </div>

            {/* Submit */}
            <button
              disabled={user?.status === "blocked"}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-50"
            >
              Request Blood
            </button>
          </form>
        </div>
      </div>
      <ToastContainer hideProgressBar />
    </div>
  );
};

export default CreateDonationRequest;
