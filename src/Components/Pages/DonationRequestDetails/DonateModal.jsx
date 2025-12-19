import React from "react";

const DonateModal = ({ user, requestId, onClose }) => {
  const handleConfirm = async () => {
    await fetch(
      `https://blood-donation-application-server-eight.vercel.app/donation-requests/${requestId}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: "inprogress" }),
      }
    );

    onClose();
    window.location.reload();
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
    </div>
  );
};

export default DonateModal;