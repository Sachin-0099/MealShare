import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white mb-4">
      
      <img src='/Images/logo-png.png' alt='logo' className="w-20 h-20 object-contain rounded-full"></img>
      
      <ul className="flex space-x-6 text-gray-700">
        <li className="font-bold text-orange-500 hover:underline text-xl cursor-pointer">Home</li>
        <li className="font-bold text-orange-500 hover:underline text-xl cursor-pointer">About</li>
        <li className="font-bold text-orange-500 hover:underline text-xl cursor-pointer">Services</li>
        <li className="font-bold text-orange-500 hover:underline text-xl cursor-pointer">Donations</li>
        <li className="font-bold text-orange-500 hover:underline text-xl cursor-pointer">Events</li>
        <li className="font-bold text-orange-500 hover:underline text-xl cursor-pointer">How it Works?</li>
      </ul>
      <div className="flex space-x-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
          Login
        </button>
        <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
