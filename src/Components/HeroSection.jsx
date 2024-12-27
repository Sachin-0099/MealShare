import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white ">
      {/* Background Image */}
      
      <div className="absolute inset-0 -z-10"></div>
        <img
            src="/images/young-indian-family-in-delhi-india-DRHB05 2.png"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
      
      {/* Content */}
      <div className=" px-4 mr-auto mt-52">
        <p className="font-bold text-xl md:text-2xl">Share Food, Save Lives</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Transform surplus food into hope
        </h1>
        <div className="mt-6 space-x-4">
          <button className="bg-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600">
            Donate
          </button>
          <button className="border border-orange-500 font-bold bg-white text-orange-500 px-6 py-3 rounded-xl hover:bg-orange-500 hover:text-white">
            Request
          </button>
        </div>
      </div>
      
      
    </section>
  );
};

export default HeroSection;
