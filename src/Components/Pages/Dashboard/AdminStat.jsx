import React, { useEffect, useState } from 'react';
import StatCard from "./StatCard";
import { FaUsers, FaHandHoldingHeart, FaTint } from "react-icons/fa";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AdminStat = () => {
  const [dashboardStats, setDashboardStats] = useState({
    totalDonors: 0,
    totalFunding: 0,
    totalBloodRequests: 0
  });
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosSecure.get('/dashboard-stats');
        setDashboardStats(res.data.data);
      } catch (err) {
        console.error("Failed to fetch dashboard stats:", err);
      }
    };
    fetchData();
  }, []);

  const stats = [
    {
      id: 1,
      title: "Total Donors",
      count: dashboardStats.totalDonors,
      icon: <FaUsers />,
    },
    {
      id: 2,
      title: "Total Funding",
      count: `$${dashboardStats.totalFunding}`,
      icon: <FaHandHoldingHeart />,
    },
    {
      id: 3,
      title: "Blood Requests",
      count: dashboardStats.totalBloodRequests,
      icon: <FaTint />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
};

export default AdminStat;