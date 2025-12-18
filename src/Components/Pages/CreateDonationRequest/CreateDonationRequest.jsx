import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../Context/AuthContext";

const CreateDonationRequest = () => {
    const { user } = useContext(AuthContext);

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

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadDistricts = async () => {
        try {
            const res = await fetch("/districts.json");
            const data = await res.json();
            data.sort((a, b) => a.name.localeCompare(b.name));
            setDistricts(data);
        } catch (e) {
            console.error(e);
        }
        };
        loadDistricts();
    }, []);

    useEffect(() => {
        const loadUpazilas = async () => {
        if (!formData.district) return setUpazilas([]);
        try {
            const res = await fetch("/upazilas.json");
            const data = await res.json();
            const districtId = districts.find(d => d.name === formData.district)?.id;
            const filtered = districtId ? data.filter(u => u.district_id === districtId) : [];
            setUpazilas(filtered);
        } catch (e) {
            console.error(e);
        }
        };
        loadUpazilas();
    }, [formData.district, districts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user.status === "blocked") {
        toast.error("Blocked users cannot create donation requests!");
        return;
        }

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

        for (let field of requiredFields) {
        if (!formData[field]) {
            toast.error(`Please fill the ${field}`);
            return;
        }
        }

        const url = "https://blood-donation-application-server-eight.vercel.app/donation-requests";
        try {
        const res = await axios.post(url,formData);
        toast.success("Donation request created successfully!");
        setFormData(prev => ({
            ...prev,
            recipientName: "",
            district: "",
            upazila: "",
            hospital: "",
            address: "",
            bloodGroup: "",
            donationDate: "",
            donationTime: "",
            message: "",
        }));
        } catch (err) {
        console.error(err);
        toast.error("Failed to create request");
        }
    };

    return (
        <div className="min-h-screen pb-20 flex justify-center items-start p-6 bg-gradient-to-b from-red-100 to-white">
        <div className="w-full  max-w-3xl bg-white shadow-xl rounded-2xl p-8">
            <h1 className="text-2xl font-bold text-red-700 mb-4">Create Blood Donation Request</h1>
            <p className="text-gray-500 mb-6">Fill the form to request a blood donation.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
            {/* Requester Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                type="text"
                name="requesterName"
                value={formData.requesterName}
                readOnly
                placeholder="Your Name"
                className="border rounded-xl p-3 bg-gray-100 cursor-not-allowed"
                />
                <input
                type="email"
                name="requesterEmail"
                value={formData.requesterEmail}
                readOnly
                placeholder="Your Email"
                className="border rounded-xl p-3 bg-gray-100 cursor-not-allowed"
                />
            </div>

            {/* Recipient Name */}
            <input
                type="text"
                name="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
                placeholder="Recipient Name"
                className="border rounded-xl p-3 focus:ring-2 focus:ring-red-300 outline-none w-full"
            />

            {/* District & Upazila */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="border rounded-xl p-3 w-full"
                >
                <option value="">Select District</option>
                {districts.map(d => (
                    <option key={d.id} value={d.name}>{d.name}</option>
                ))}
                </select>

                <select
                name="upazila"
                value={formData.upazila}
                onChange={handleChange}
                className="border rounded-xl p-3 w-full"
                disabled={!formData.district}
                >
                <option value="">Select Upazila</option>
                {upazilas.map(u => (
                    <option key={u.id} value={u.name}>{u.name}</option>
                ))}
                </select>
            </div>

            {/* Hospital & Address */}
            <input
                type="text"
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                placeholder="Hospital Name (e.g. Dhaka Medical College Hospital)"
                className="border rounded-xl p-3 w-full"
            />
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Full Address (e.g. Zahir Raihan Rd, Dhaka)"
                className="border rounded-xl p-3 w-full"
            />

            {/* Blood Group */}
            <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="border rounded-xl p-3 w-full"
            >
                <option value="">Select Blood Group</option>
                {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(bg => (
                <option key={bg} value={bg}>{bg}</option>
                ))}
            </select>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                type="date"
                name="donationDate"
                value={formData.donationDate}
                onChange={handleChange}
                className="border rounded-xl p-3 w-full"
                />
                <input
                type="time"
                name="donationTime"
                value={formData.donationTime}
                onChange={handleChange}
                className="border rounded-xl p-3 w-full"
                />
            </div>

            {/* Request Message */}
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your request message..."
                className="border rounded-xl p-3 w-full resize-none h-28"
            />

            {/* Submit */}
            <button
                type="submit"
                disabled={user?.status === "blocked"}
                className={`w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition ${
                user?.status === "blocked" ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                {user?.status === "blocked" ? "Blocked users cannot request" : "Request Blood"}
            </button>
            </form>
        </div>
        <ToastContainer hideProgressBar />
        </div>
    );
};

export default CreateDonationRequest;