import React from "react";

const DonationStats = () => {
  const stats = [
    { label: "Active Donations", value: 0 },
    { label: "Donor Neglected", value: 0 },
    { label: "Failed Donations", value: 0 },
    { label: "Successful Donations", value: 0 },
  ];

  return (
    <div className="flex justify-between items-center p-8 bg-white w-full">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center space-x-2">
          {/* Stat Value */}
          <div className="text-7xl text-orange-500 font-semibold">{stat.value}</div>
          {/* Stat Label */}
          <span className="text-lg text-gray-700 font-medium">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DonationStats;