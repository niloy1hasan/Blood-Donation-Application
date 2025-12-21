import { NavLink } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import MyDonationTable from "../MyDonationRequest/MyDonationTable";
import AdminStat from "./AdminStat";
import React, { useState } from 'react';

const Dashboard = () => {
    const { user } = useAuth();
    const [visible, setVisible] = useState(false);
  
  return (
    <div className="p-6 mb-16 min-h-screen font-inter space-y-8">

      <div className="bg-linear-to-r mb-12 from-red-900 to-red-700 text-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">
          Welcome Back, {user?.displayName}
        </h1>
        <p className="text-red-100 text-sm mt-5 max-w-xl">
          Thank you for being a life saver. Your contributions help connect
          donors with patients and support organizations through blood and
          funding.
        </p>
      </div>

      {(user.role === 'admin' || user.role === 'volunteer') && (
        <AdminStat></AdminStat>
      )}

      {
        (user.role === 'donor') &&
        (
          <div className={`flex flex-col gap-4 ${!visible && 'hidden'}`}>
          <h1 className="text-2xl font-bold font-inter">My Recent Donation Requests</h1>
          <MyDonationTable setVisible={setVisible}></MyDonationTable>
          <div className="flex justify-center">
            <NavLink className="btn rounded-lg text-white bg-red-600 hover:bg-red-700" to={'/dashboard/my-donation-requests'}>view my all request</NavLink>
          </div>
          </div>
        )
      }
    </div>
  );
};

export default Dashboard;