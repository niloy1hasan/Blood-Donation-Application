import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const DonationSuccess = () => {
    const axiosSecure = useAxiosSecure();
    const [searchParams, setSearchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    console.log(sessionId);
    const redirectUrl = "/funding";

    useEffect(() => {
        if (!sessionId) return;

        let called = false;

        const confirmDonation = async () => {
            if (called) return;
            called = true;

            try {
            const res = await axiosSecure.post(`/donation-success?session_id=${sessionId}`);
            console.log(res.data);
            } catch (error) {
            console.error(error);
            }
        };

        confirmDonation();
        }, [sessionId]);

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-5">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full text-center p-8 transform transition-transform hover:scale-105 duration-300">
        {/* Checkmark */}
        <div className="mx-auto flex items-center justify-center h-28 w-28 rounded-full bg-green-100 mb-6">
          <svg
            className="h-16 w-16 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Donation Successful!
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-6">
          Thank you for your incredible support! Your donation is making a difference and is currently being processed. A confirmation email will be sent shortly.
        </p>

        <a
          href={redirectUrl}
          className="inline-block bg-red-600 text-white py-2 px-4 rounded-lg font-semibold transition duration-200 hover:bg-red-800"
        >
          Go to Funding Now
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DonationSuccess;