import React, { useEffect, useState } from "react";
import DonationRequestCard from "../../DonationRequestCard/DonationRequestCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const MyDonationRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchMyRequests = async () => {
      try {
        const res = await axiosSecure.get(`/my-donation-requests?email=${user.email}`);
        setRequests(res.data);
      } catch (error) {
        console.error("Failed to load donation requests", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyRequests();
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-red-600"></span>
      </div>
    );
  }

  return (
    <section className="max-w-7xl min-h-screen mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        My Donation Requests
      </h2>

      {requests.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          You haven’t created any donation requests yet.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default MyDonationRequest;