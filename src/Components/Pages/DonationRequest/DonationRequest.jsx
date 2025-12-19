import React, { useEffect, useState } from "react";
import DonationRequestCard from "../../DonationRequestCard/DonationRequestCard"

const DonationRequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(
          "https://blood-donation-application-server-eight.vercel.app/donation-requests"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch donation requests");
        }

        const data = await res.json();
        setRequests(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-red-600"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 font-medium mt-10">
        {error}
      </div>
    );
  }

  return (
    <section className="max-w-7xl min-h-screen mx-auto px-4 py-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Blood Donation Requests
        </h2>
      </div>

      {requests.length === 0 ? (
        <p className="text-center text-gray-500">
          No donation requests found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((request) => (
            <DonationRequestCard
              key={request._id}
              request={request}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default DonationRequest;
