import React, { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth";
import PaymentModal from "./PaymentModal";
import { toast, ToastContainer } from "react-toastify";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Funding = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();
  const [fundings, setFundings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [amount, setAmount] = useState(0);

  const userData = {
    name: user?.displayName,
    email: user?.email
  };

  useEffect(() => {
    axiosSecure.get("/fundings")
      .then(res => {
        setFundings(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [axiosInstance]);

  // Called when user clicks "Confirm" inside modal
  const handleGiveFund = async ({ amount, currency }) => {
    setModalOpen(false);

    try {
      const paymentInfo = {
        amount,
        senderEmail: user?.email,
        senderName: user?.displayName,
        currency
      };
      const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
      window.location.href = res.data.url;
    } catch (err) {
      console.error(err);
      toast.error("Payment failed. Try again.");
    } finally {
      setAmount(0);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-red-600"></span>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Funding History</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
        >
          <PlusCircle size={18} />
          Give Fund
        </button>
      </div>

      {/* Modal */}
      <PaymentModal
        isOpen={isModalOpen}
        amount={amount}
        setAmount={setAmount}
        onClose={() => setModalOpen(false)}
        onConfirm={handleGiveFund}
        user={userData}
      />
      <ToastContainer hideProgressBar></ToastContainer>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fund Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Funding Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fundings.length === 0 ? (
              <tr>
                <td colSpan="3" className="px-6 py-8 text-center text-gray-500">
                  No funding records found
                </td>
              </tr>
            ) : (
              fundings.map(fund => (
                <tr key={fund._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{fund.userName}</div>
                    <div className="text-sm text-gray-500">{fund.userEmail}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-green-600">
                      {fund.currency === 'USD' ? '$' : '৳'} {fund.amount}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {fund.createdAt ? new Date(fund.createdAt).toLocaleDateString() : "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};


export default Funding;