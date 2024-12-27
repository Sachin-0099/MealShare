import React from 'react';

const testimonials = [
  {
    name: "Dwivedi Priya",
    role: "Developer",
    image: "/images/pexels-photo-1681010 4.png", // Replace with the actual image path
    feedback:
      "When FeedHope, a food donation platform launched in 2021, its mission was clear: to connect excess food from restaurants, grocery stores, and individuals with communities in need.",
  },
  {
    name: "Dwivedi Priya",
    role: "Developer",
    image: "/images/pexels-photo-1681010 4.png",
    feedback:
      "When FeedHope, a food donation platform launched in 2021, its mission was clear: to connect excess food from restaurants, grocery stores, and individuals with communities in need.",
  },
  {
    name: "Dwivedi Priya",
    role: "Developer",
    image: "/images/pexels-photo-1681010 4.png",
    feedback:
      "When FeedHope, a food donation platform launched in 2021, its mission was clear: to connect excess food from restaurants, grocery stores, and individuals with communities in need.",
  },
  {
    name: "Dwivedi Priya",
    role: "Developer",
    image: "/images/pexels-photo-1681010 4.png",
    feedback:
      "When FeedHope, a food donation platform launched in 2021, its mission was clear: to connect excess food from restaurants, grocery stores, and individuals with communities in need.",
  },
  {
    name: "Dwivedi Priya",
    role: "Developer",
    image: "/images/pexels-photo-1681010 4.png",
    feedback:
      "When FeedHope, a food donation platform launched in 2021, its mission was clear: to connect excess food from restaurants, grocery stores, and individuals with communities in need.",
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center mb-12">
        What <span className="text-orange-500">People</span> Say To Us:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-24">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-300 shadow-md rounded-lg p-6 relative"
          >
            
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">{testimonial.feedback}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
