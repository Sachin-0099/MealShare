import React from 'react';
import CardHome from '../CardHome'


const data = [
  {
    image: "/Images/mdi_food.png",
    title: "Healthy Food",
    description: "We ensure food quality and safety for recipients."
  },
  {
    image: "/Images/fluent-mdl2_health-solid.png",
    title: "Hand of Heart",
    description: "Donors can share surplus food with just a click"
  },
  {
    image: "/Images/fluent_vehicle-motorcycle-24-filled.png",
    title: "Delivery Tracking",
    description: "Track donations in real-time from donor to recipient"
  }
];

const CardSection = () => {
  return (
    <div className="about-section">
      <h2 className="text-3xl font-bold text-center mb-16">Welcome to Our Website</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "> {/* Reduced gap between cards */}
        {data.map((item, index) => (
          <CardHome key={index} {...item} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button 
          className="bg-orange-500 text-white font-bold py-2 px-6 rounded-xl hover:bg-orange-600 transition"
        >
          Enroll
        </button>
      </div>
    </div>
  );
};

export default CardSection;