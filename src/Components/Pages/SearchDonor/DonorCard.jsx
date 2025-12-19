import { MapPin, Droplet, Calendar, UserCheck } from "lucide-react";
import { useState } from "react";
import default_img from "../../../assets/profile-picture.png";
const DonorCard = ({ donor }) => {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 max-w-md">

      <div className="flex items-center gap-4">
        <img
          src={donor?.photoURL || default_img}
          alt={donor.displayName}
          className="w-16 h-16 rounded-full object-cover border"
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">
            {donor.displayName}
          </h3>
          <p className="text-sm text-gray-500">{donor.email}</p>
        </div>

        <span className="hidden lg:flex items-center gap-1 px-3 py-1 rounded-full bg-red-600 text-white text-sm font-semibold">
          <Droplet size={14} />
          {donor.bloodGroup}
        </span>
      </div>

        <div className="inline-flex lg:hidden mt-2">
          <span className="mt-2 w-auto sm:mt-0 flex items-center gap-1 px-3 py-1 rounded-full bg-red-600 text-white text-sm font-semibold">
          <Droplet size={14} />
          {donor.bloodGroup}
        </span>
        </div>

      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-red-500" />
          {donor?.district}, {donor?.upazila}
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-red-500" />
          Last Donation:{" "}
          {donor?.lastDonationDate
            ? new Date(donor?.lastDonationDate).toLocaleDateString()
            : "Never"}
        </div>

        <div className="flex items-center gap-2">
          <UserCheck size={16} className="text-red-500" />
          Gender: {donor.gender}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            donor.availability === "available"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {donor.availability === "available" ? "Available" : "Not Available"}
        </span>

        <button
          onClick={() => setSent(true)}
          name="sendRequest"
           className={`px-4 py-2 rounded-lg text-sm font-medium transition
        ${sent
          ? "bg-gray-200 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-700 text-white"}
      `}>
          {sent ? "Request Sent" : "Send Request"}
        </button>
      </div>
    </div>
  );
};

export default DonorCard;
