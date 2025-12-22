import React, { useEffect, useState } from "react";
import DonationRequestCard from "../../DonationRequestCard/DonationRequestCard"
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import RequestFilterDropdown from "../../Shared/DropdownSelect/RequestFilterDropdown";

const DonationRequest = () => {
  const axiosSecure = useAxiosSecure();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All Requests");


   const handleFilterSelect = (option) => {
    setFilter(option);
  };

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axiosSecure.get("/donation-requests");
        console.log("from donation request:", res);
        if (res.status!==200) {
          throw new Error("Failed to fetch donation requests");
        }
        setRequests(res.data);
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
      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Blood Donation Requests
        </h2>
      </div>
      <div className="mb-8 flex lg:justify-end">
        <RequestFilterDropdown onSelect={handleFilterSelect} />
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
