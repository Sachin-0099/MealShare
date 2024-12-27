import React from "react";

const DonationStats = () => {
  const stats = [
    { label: "Active Donations", value: 0 },
    { label: "Donor Neglected", value: 0 },
    { label: "Failed Donations", value: 0 },
    { label: "Successful Donations", value: 0 },
  ];

  return (
    <div className="flex justify-center items-center p-8 bg-white w-full space-x-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center space-x-2"> {/* Number and label beside each other */}
          {/* Stat Value */}
          <div className="text-7xl text-orange-500 font-semibold">{stat.value}</div>
          {/* Label */}
          <span className="text-lg text-gray-700 font-medium">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DonationStats;
