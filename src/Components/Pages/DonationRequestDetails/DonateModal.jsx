import React from "react";
import { toast, ToastContainer } from "react-toastify";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const DonateModal = ({ user, requestId, onClose }) => {
    const axiosSecure = useAxiosSecure();
const handleConfirm = async () => {
  const url = `/donation-requests/update-status/${requestId}`;
  try {
    const res = await axiosSecure.patch(url, { status: "inprogress" });

    if (res.data.success) {
      toast.success("Donation confirmed successfully!");
      onClose();
      window.location.reload();
    } else {
      toast.error("Failed to confirm donation. Please try again.");
    }
  } catch (error) {
    toast.error("Failed to confirm donation. Please try again.");
    console.error("Error confirming donation:", error);  }
};


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 space-y-4">
        <h3 className="text-xl font-bold">Confirm Donation</h3>

        <div>
          <label className="text-sm text-gray-500">Donor Name</label>
          <input
            value={user?.displayName}
            readOnly
            className="w-full border rounded-lg px-3 py-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">Donor Email</label>
          <input
            value={user?.email}
            readOnly
            className="w-full border rounded-lg px-3 py-2 bg-gray-100"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Confirm Donation
          </button>
        </div>
      </div>
      <ToastContainer hideProgressBar></ToastContainer>
    </div>
  );
};

export default DonateModal;