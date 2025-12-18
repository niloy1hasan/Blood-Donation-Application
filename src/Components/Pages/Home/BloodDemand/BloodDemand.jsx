import { useState } from "react";

const BloodDemand = () => {
  const [data, setData] = useState({
    todayDelivery: 225,
    totalDemand: 254,
    groups: [
      { type: "A+", units: 59 },
      { type: "B+", units: 82 },
      { type: "O+", units: 74 },
      { type: "AB+", units: 15 },
      { type: "A-", units: 6 },
      { type: "B-", units: 4 },
      { type: "O-", units: 10 },
      { type: "AB-", units: 4 },
    ], 
  });

  return (
    <section className="bg-[#fef7f7] font-inter">
        <div className="max-w-7xl mx-auto  px-6 py-12">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-red-600 mb-10">
        Blood Demand Overview
      </h2>

      {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-linear-to-r from-red-400 to-red-600 text-white p-8 rounded-2xl shadow-xl transform hover:scale-102 transition">
          <p className="uppercase tracking-widest text-sm">Today's Delivery</p>
          <h3 className="text-5xl font-extrabold mt-4">{data.todayDelivery}</h3>
          <p className="text-lg mt-2">Units</p>
        </div>

        <div className="bg-linear-to-r from-red-700 to-gray-900 text-white p-8 rounded-2xl shadow-xl transform hover:scale-102 transition">
          <p className="uppercase tracking-widest text-sm">Current Blood Demand</p>
          <h3 className="text-5xl font-extrabold mt-4">{data.totalDemand}</h3>
          <p className="text-lg mt-2">Units</p>
        </div>
      </div>

      {/* Blood Group Demand */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
          Blood Group Wise Demand
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {data.groups.map((group, index) => (
            <div
              key={index}
              className="border border-red-100 dark:border-gray-700 rounded-lg p-4 text-center hover:shadow-md transition"
            >
              <p className="text-2xl font-bold text-red-600">
                {group.type}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {group.units} Units
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default BloodDemand;
