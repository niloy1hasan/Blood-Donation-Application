import React, { useEffect, useRef, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';
import DeleteModal from '../../Shared/Modal/DeleteModal';

const MyDonationTable = ({setVisible=false}) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const deleteModal = useRef(null);
  const limit = 3;
  const skip = 0;

  useEffect(() => {
    if (!user?.email) return;

    const fetchMyRequests = async () => {
      try {
        const res = await axiosSecure.get(`/my-donation-requests?email=${user.email}&limit=${limit}&skip=${skip}`);
        setRequests(res.data.requests || []);
        if(res.data?.requests?.length){
        setVisible(true);
        }
      } catch (error) {
        console.error("Failed to load donation requests", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyRequests();
  }, [user?.email]);


  // Function to delete donation
  const handleDelete = async() => {
    const url = `/donation-requests/${selected}`;
      try {
        await axiosSecure.delete(url);
        setRequests(requests.filter(item => item._id !== selected));
        toast.success("Donation request deleted successfully");
      } catch (error) {
        console.error("Delete failed", error);
        toast.error("Failed to delete donation request");
      } finally {
        deleteModal.current.close();
        setSelected(null);
      }
  };

    if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-red-600"></span>
      </div>
    );
  }
    else return (
        <div className='hidden overflow-x-auto md:block bg-white ps-3 rounded-xl'>
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Recipient Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Location
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Donation Date
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Donation Time
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Blood Group
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Status
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Donor Info
        </th>
        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {requests.map((donation) => (
        <tr key={donation._id} className="hover:bg-gray-50 transition-colors duration-150">
          {/* Recipient Name */}
          <td className="px-6 py-4 whitespace-nowrap">{donation.recipientName}</td>

          {/* Location */}
          <td className="px-6 py-4 whitespace-nowrap">{donation.upazila}, {donation.district}</td>

          {/* Date */}
          <td className="px-6 py-4 whitespace-nowrap">{donation.donationDate}</td>

          {/* Time */}
          <td className="px-6 py-4 whitespace-nowrap">{donation.donationTime}</td>

          {/* Blood Group */}
          <td className="px-6 py-4 whitespace-nowrap">{donation.bloodGroup}</td>

          {/* Status */}
          <td className="px-6 py-4 whitespace-nowrap">
            <span className={`px-2 badge badge-outline inline-flex text-sm leading-5 font-mediu rounded-full ${
              donation.status === 'pending' ? 'bg-gray-200 text-gray-700' :
              donation.status === 'inprogress' ? 'bg-yellow-200 text-yellow-800' :
              donation.status === 'done' ? 'bg-green-200 text-green-800' :
              'bg-red-200 text-red-800'
            }`}>
              {donation.status}
            </span>
          </td>

          {/* Donor Info */}
          <td className="px-6 py-4 whitespace-nowrap">
            {donation.status === 'inprogress' && donation.donor ? (
              <div>
                <div>{donation.donor.name}</div>
                <div className="text-gray-500 text-sm">{donation.donor.email}</div>
              </div>
            ) : (
              <span className="text-gray-400">-</span>
            )}
          </td>

          {/* Actions */}
          <td className="px-6 py-4 text-sm whitespace-nowrap flex gap-2 justify-end">
            {/* Status Buttons */}
            {donation.status === 'inprogress' && (
              <>
                <button
                  className="px-3 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                >
                  Done
                </button>
                <button
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Cancel
                </button>
              </>
            )}

            {/* Edit Button */}
            <button
              className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Edit
            </button>

            {/* Delete Button */}
            <button
              onClick={() => {setSelected(donation._id); deleteModal?.current?.showModal();}}
              className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <DeleteModal setSelected={setSelected} deleteModal={deleteModal} handleDelete={handleDelete}></DeleteModal>
  <ToastContainer hideProgressBar></ToastContainer>
</div>

    );
};

export default MyDonationTable;