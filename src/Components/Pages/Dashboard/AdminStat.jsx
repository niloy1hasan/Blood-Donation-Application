import React from 'react';
import StatCard from "./StatCard";
import { FaUsers, FaHandHoldingHeart, FaTint } from "react-icons/fa";

const AdminStat = () => {
    const stats = [
    {
      id: 1,
      title: "Total Donors",
      count: 1250,
      icon: <FaUsers />,
    },
    {
      id: 2,
      title: "Total Funding",
      count: "$8,450",
      icon: <FaHandHoldingHeart />,
    },
    {
      id: 3,
      title: "Blood Requests",
      count: 320,
      icon: <FaTint />,
    },
  ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    );
};

export default AdminStat;