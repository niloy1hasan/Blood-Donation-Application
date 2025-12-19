import { MapPin, Calendar, Clock, Droplet, Eye } from "lucide-react";
import { Link } from "react-router";

const DonationRequestCard = ({ request }) => {
  const {
    recipientName,
    district,
    upazila,
    bloodGroup,
    donationDate,
    donationTime,
  } = request;

  return (
    <div className="relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-5">
      
      {/* Blood Group Badge */}
      <div className="absolute -top-4 right-4 bg-red-600 text-white px-4 py-1.5 rounded-full font-semibold shadow-md flex items-center gap-1">
        <Droplet size={16} />
        {bloodGroup}
      </div>

      {/* Recipient Name */}
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {recipientName}
      </h3>

      {/* Location */}
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mr-2 text-red-500" />
        {district}, {upazila}
      </div>

      {/* Date & Time */}
      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-red-500" />
          {donationDate}
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-red-500" />
          {donationTime}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t pt-4 flex justify-end">
        <Link to={`/donation-requests/${request._id}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition">
          <Eye size={16} />
          View Details
        </Link>
      </div>
    </div>
  );
};

export default DonationRequestCard;