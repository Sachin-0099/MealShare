import React from 'react';
import Card from './Card';

const data = [
  {
    id: 1, // Unique identifier
    image: "/Images/donation.jpeg",
    title: "Donate",
    description: "Food donors register and list surplus food for donation.",
  },
  {
    id: 2,
    image: "/Images/match.jpeg",
    title: "Match",
    description: "Our intelligent system connects donations with recipients based on location, needs, and preferences.",
  },
  {
    id: 3,
    image: "/Images/deliever.jpeg",
    title: "Deliver",
    description: "Real-time tracking ensures donations are safely delivered to those in need.",
  },
];

const Work = () => {
  return (
    <div className="about-section px-4 sm:px-6 lg:px-12 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16">
        How We Make It Happen?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Work;
