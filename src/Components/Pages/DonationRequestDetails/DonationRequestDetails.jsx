import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MapPin, Calendar, Clock, Droplet } from "lucide-react";
import DonateModal from "./DonateModal";
import { AuthContext } from "../../../Context/AuthContext";
import defaultPhoto from "../../../assets/profile-picture.png";
import axios from "axios";

const DonationRequestDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [request, setRequest] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [found, setFound] = useState(true);

  useEffect(() => {
    fetch(`https://blood-donation-application-server-eight.vercel.app/donation-requests/${id}`)
      .then(res => res.json())
      .then(data => {
        setRequest(data);
        setFormData(data);
        setLoading(false);
        if (!data._id) setFound(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleUpdate = async () => {
  const url = `https://blood-donation-application-server-eight.vercel.app/update-donation-requests/${id}`;
  const requiredFields = [
    "recipientName",
    "district",
    "upazila",
    "hospital",
    "address",
    "bloodGroup",
    "donationDate",
    "donationTime",
    "message",
  ];

  const emptyField = requiredFields.find(
    (field) => !formData[field] || formData[field].trim() === ""
  );

  if (emptyField) {
    alert("All fields are required. Please fill in all information.");
    return;
  }

  try {
    const res = await axios.patch( url,
      {
        recipientName: formData.recipientName.trim(),
        district: formData.district.trim(),
        upazila: formData.upazila.trim(),
        hospital: formData.hospital.trim(),
        address: formData.address.trim(),
        bloodGroup: formData.bloodGroup.trim(),
        donationDate: formData.donationDate,
        donationTime: formData.donationTime,
        message: formData.message.trim(),
      }
    );

    setRequest(res.data);
    setIsEdit(false);
  } catch (error) {
    console.error("Update failed", error);
    alert("Failed to update donation request");
  }
};


const handleDelete = async () => {
  const url = `https://blood-donation-application-server-eight.vercel.app/donation-requests/${id}`;
  try {
    await axios.delete(url);
    alert("Donation request deleted successfully");
    navigate(-1)
  } catch (error) {
    console.error("Delete failed", error);
    alert("Failed to delete donation request");
  }
};


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-red-600"></span>
      </div>
    );
  }


  if(!found) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <h2 className="text-2xl font-semibold text-gray-700">
          Donation Request Not Found
        </h2>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-md border border-gray-200">

        {/* HEADER */}
        <div className="flex items-center gap-4 p-5 border-b border-gray-200">
          <img
            src={defaultPhoto}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">
              {request.requesterName}
            </h3>
            <p className="text-sm text-gray-500">
              {request.requesterEmail}
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="p-5 space-y-5">

          {/* Recipient & Blood */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            {isEdit ? (
              <input
                name="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
                placeholder="Recipient Name"
                className="text-lg font-medium placeholder:font-normal input-primary w-full rounded px-3 py-1"
              />
            ) : (
              <h2 className="text-xl font-semibold text-gray-900">
                {request.recipientName}
              </h2>
            )}

            {isEdit ? (
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                placeholder="Blood Group"
                className="input-primary w-full rounded px-3 py-1 font-semibold"
              >
                {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map(bg => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            ) : (
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600 text-white font-semibold">
                <Droplet size={16} />
                {request.bloodGroup}
              </span>
            )}
          </div>

          {/* Meta Info */}
          {isEdit ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="district"
                value={formData.district}
                onChange={handleChange}
                placeholder="District"
                className="input-primary w-full rounded px-3 py-2"
              />
              <input
                name="upazila"
                value={formData.upazila}
                onChange={handleChange}
                placeholder="Upazila"
                className="input-primary w-full rounded px-3 py-2"
              />
              <input
                type="date"
                name="donationDate"
                value={formData.donationDate}
                onChange={handleChange}
                className="input-primary w-full rounded px-3 py-2"
              />
              <input
                type="time"
                name="donationTime"
                value={formData.donationTime}
                onChange={handleChange}
                className="input-primary w-full rounded px-3 py-2"
              />
            </div>
          ) : (
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-red-500" />
                {request.district}, {request.upazila}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-red-500" />
                {request.donationDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-red-500" />
                {request.donationTime}
              </div>
            </div>
          )}

          {/* Hospital */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">Hospital</p>
            {isEdit ? (
              <input
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                placeholder="Hospital Name"
                className="mt-1 w-full input-primary rounded px-3 py-2"
              />
            ) : (
              <p className="font-medium text-gray-800">{request.hospital}</p>
            )}
          </div>

          {/* Address */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">Address</p>
            {isEdit ? (
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Full Address"
                className="mt-1 w-full input-primary rounded px-3 py-2"
              />
            ) : (
              <p className="text-gray-800">{request.address}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <p className="text-sm text-gray-500 mb-1">Request Message</p>
            {isEdit ? (
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={4}
                className="input-primary w-full rounded-lg px-3 py-2"
              />
            ) : (
              <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                {request.message}
              </p>
            )}
          </div>
        </div>

        {/* ACTION BAR */}
        <div className="flex justify-between items-center px-5 py-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          {(user?.email === request.requesterEmail || user?.role === "admin") && (
            isEdit ? (
              <div className="flex w-full gap-3">
                <button
                  onClick={() => {
                    setIsEdit(false);
                    setFormData(request);
                  }}
                  className="px-5 w-full flex-1 py-2 font-medium rounded-lg bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-5 w-full flex-1 py-2 font-medium rounded-lg bg-red-600 text-white"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex w-full gap-3">
              <button
                onClick={() => setIsEdit(true)}
                className="px-5 flex-1 w-full py-2 font-medium rounded-lg bg-gray-500 hover:bg-gray-700 text-white"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-5 flex-1 w-full py-2 font-medium rounded-lg bg-red-600 hover:bg-red-700 text-white"
              >
                Delete
              </button>
              </div>
            )
          )}

          {user?.role === "donor" &&
            user?.email !== request.requesterEmail &&
            (
              <button
                onClick={() => setShowModal(true)}
                className="px-5 w-full py-2 rounded-lg bg-red-600 text-white"
              >
                Donate Blood
              </button>
            )}
        </div>
      </div>

      {showModal && (
        <DonateModal
          user={user}
          requestId={id}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
};

export default DonationRequestDetails;