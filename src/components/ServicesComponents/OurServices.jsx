import React from 'react';

import CardService from './CardServices';

const CardData = [
  {
    id: 1, // Add a unique identifier
    img: "/Images/FoodC.jpeg",
    title: "Food Collection", 
    description: "We work closely with donors to collect surplus food efficiently, ensuring no meal goes to waste. Our streamlined process makes food donation quick and hassle-free", 
  },
  {
    id: 2,
    img: "Images/QualityA.jpeg",
    title: "Quality Assurance", 
    description: "Ensuring safety and hygiene is our top priority. Every food item is inspected and handled with care to meet high-quality standards before it reaches those in need.",
  },
  {
    id: 3,
    img: "Images/SmartM.jpeg",
    title: "Smart Matching", 
    description: "Our intelligent matching system connects donors with the nearest recipients, ensuring timely delivery and minimizing food wastage.",
  },
  {
    id: 4,
    img: "Images/RealT.jpeg",
    title: "Real-Time Delivery Tracking", 
    description: "Track your donation in real-time with our advanced delivery tracking system. From pickup to delivery, stay updated on every step of the journey.",
  },
  {
    id: 5,
    img: "Images/Ci.jpeg",
    title: "Community Impact", 
    description: "We collaborate with communities, NGOs, and volunteers to make a tangible difference. Together, we turn surplus food into opportunities to nourish lives and spread hope.",
  },
  {
    id: 6,
    img: "Images/FraudD.jpeg",
    title: "Fraud Detection", 
    description: "Our intelligent system verifies donors and recipients to ensure that donations are genuine and delivered to those who truly need them.",
  }
];

const OurServices = () => {
  return (
    <>
      <div className="flex flex-wrap h-[50vh]">
        <div className="w-[60%] p-10 ">
          <h1 className="text-5xl font-semibold">
            Empowering <span className="text-orange-600">Communities</span> One Service at a Time
          </h1>

          <p className="text-0xl text-justify mt-6">
            Through our dedicated services, we bridge the gap between food donors and those in need. From ensuring food quality to seamless delivery tracking, we make every effort to create a reliable, efficient, and compassionate system that transforms surplus food into hope for communities in need.
          </p>
          <button className="bg-orange-600 text-white rounded px-4 py-2 ml-2 hover:bg-orange-700 transition-colors mt-8">
            Donate
          </button>
        </div>
       
        <div className="w-[40%] h-full bg-blue-400 object-cover">
          <img src="Images/ServiceIm.jpeg" alt="Service" className="h-full w-full" />
        </div>
      </div>
      <hr className="border-2 border-gray mb-8" />
      <div className="text-5xl text-center mb-16">
        Our <span className="text-orange-600">services</span>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CardData.map((item) => {
            return <CardService key={item.id} {...item} />; // Use the unique id as the key
          })}
        </div>
      </div>
    </>
  );
};

export default OurServices;
