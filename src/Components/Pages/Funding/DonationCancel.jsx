import React from "react";

const DonationCancel = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-5">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full text-center p-8">
        {/* Cancellation Icon */}
        <div className="mx-auto flex items-center justify-center h-28 w-28 rounded-full bg-red-100 mb-6">
          <svg
            className="h-16 w-16 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Donation Canceled
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-6">
          We're sorry to see you go! Your donation has been canceled. If you have any questions or need assistance, please reach out to our support team.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="/"
            className="inline-block bg-gray-300 text-gray-800 py-2 px-4 rounded-lg font-semibold transition duration-200 hover:bg-gray-400"
          >
            Back to Home
          </a>
          <a
            href="/funding"
            className="inline-block bg-red-600 text-white py-2 px-4 rounded-lg font-semibold transition duration-200 hover:bg-red-800"
          >
            Make Another Donation
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationCancel;