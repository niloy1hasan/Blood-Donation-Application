import React, { useEffect, useState } from "react";
import DonationRequestCard from "../../DonationRequestCard/DonationRequestCard";

const AllDonationRequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://blood-donation-application-server-eight.vercel.app/donation-requests-pending")
      .then(res => res.json())
      .then(data => {
        setRequests(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-red-600"></span>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Pending Donation Requests
      </h2>

      {requests.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          No pending donation requests found.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {requests.map(request => (
            <DonationRequestCard key={request._id} request={request} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AllDonationRequest;
