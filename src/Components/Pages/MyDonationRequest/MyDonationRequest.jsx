import React, { useEffect, useState } from "react";
import DonationRequestCard from "../../DonationRequestCard/DonationRequestCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const MyDonationRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;
  const [totalCount, setTotalCount] = useState(0);

  const totalPages = Math.ceil(totalCount / limit);

  useEffect(() => {
    if (!user?.email) return;

    const fetchMyRequests = async () => {
      setLoading(true);
      const skip = (currentPage - 1) * limit;

      try {
        const res = await axiosSecure.get(`/my-donation-requests?email=${user.email}&limit=${limit}&skip=${skip}`);
        setRequests(res.data.requests || []);
        setTotalCount(res.data.totalCount || 0);
      } catch (error) {
        console.error("Failed to load donation requests", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyRequests();
  }, [user?.email, currentPage, axiosSecure]);

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
        <>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((request) => (
            <DonationRequestCard
              key={request._id}
              request={request}
            />
          ))}
        </div>
        {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <div className="join">
                {[...Array(totalPages).keys()].map((page) => (
                  <button
                    key={page}
                    className={`join-item btn btn-square ${
                      currentPage === page + 1 ? "btn-active" : ""
                    }`}
                    onClick={() => setCurrentPage(page + 1)}
                  >
                    {page + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MyDonationRequest;