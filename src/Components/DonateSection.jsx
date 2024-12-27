import React from 'react';

const DonateSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-md mt-8">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left ml-8">
        <h2 className="text-4xl font-semibold mb-4">Let’s us be the reason of the smile on the needy.</h2>
        <p className="text-gray-700 mb-6 text-xl">
          "Be the bridge between abundance and hunger—every meal you share plants a seed of change."
        </p>
        <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-xl hover:bg-orange-600 transition">
          Donate
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
        <img
          src="/images/stock-photo-group-of-happy-smiling-indian-little-village-girls-standing-in-front-of-mud-house-1437067481 1.png" // Replace with the path to your image
          alt="Smiling children"
          className="rounded object-cover w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default DonateSection;
