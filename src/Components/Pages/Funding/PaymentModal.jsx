import React, { useState } from "react";

const PaymentModal = ({ isOpen, amount, setAmount, onClose, onConfirm, user }) => {
  const [currency, setCurrency] = useState("BDT");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl p-6 w-full max-w-md animate-fade-in-scale z-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Confirm Payment
        </h2>

        {/* User Info */}
        <div className="mb-4 space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold">Name:</span> {user?.name}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> {user?.email}
          </p>
        </div>

        {/* Amount */}
        <div className="mb-4 flex items-center justify-between space-x-2">
          <input
            type="number"
            min={currency === "BDT" ? 100 : 1}
            placeholder={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input input-bordered w-full border-gray-400 focus:border-red-600 outline-none focus:ring focus:ring-red-100 rounded-lg text-gray-700"
          />

          <select
            className="select select-bordered w-28 border-gray-400 focus:border-red-600 outline-none focus:ring focus:ring-red-100 rounded-lg text-gray-700"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="BDT">BDT</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3 mt-6">
          <button onClick={()=>{setAmount(0); onClose();}} className="btn btn-outline hover:bg-red-700 hover:text-white text-red-600 border-red-700">
            Cancel
          </button>
          <button
            onClick={() => onConfirm({ amount, currency })}
            className="btn bg-green-700 hover:bg-green-800 text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;