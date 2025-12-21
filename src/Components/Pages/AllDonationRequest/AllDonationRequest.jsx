import React, { useEffect, useState } from "react";
import DonationRequestCard from "../../DonationRequestCard/DonationRequestCard";
import useAxios from "../../../Hooks/useAxios";
//done
const AllDonationRequest = () => {
  const axiosInstance = useAxios();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;
  const [totalCount, setTotalCount] = useState(0);
  const totalPages = Math.ceil(totalCount / limit);



  useEffect(() => {
    const skip = (currentPage - 1) * limit;

    axiosInstance.get(`/donation-requests-pending?limit=${limit}&skip=${skip}`)
      .then(res => {
        setRequests(res.data.requests);
        setTotalCount(res.data.totalCount);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [currentPage, axiosInstance]);

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
         <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {requests.map((request) => (
              <DonationRequestCard key={request._id} request={request} />
            ))}
          </div>

          {/* Pagination */}
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
        </>
      )}
    </section>
  );
};

export default AllDonationRequest;
