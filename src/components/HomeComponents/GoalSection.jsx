import React from "react";

const GoalSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-white">
      {/* Left Side: Images */}
      <div className="relative w-full md:w-1/2 max-w-lg ml-16">
        {/* Background Rectangle */}
        <div className="absolute -top-6 -left-6 w-[250px] h-[380px] bg-orange-200 rounded-sm z-0"></div>
        
        {/* Top Image */}
        <div className="relative z-10 h-[260px] w-[260px]">
          <img
            src="/Images/happy-moments-of-the-slum-children-in-the-slum-area-2C041CP 4.png" // Replace with your actual image path
            alt="Helping kids 1"
            className="rounded-sm shadow-md w-full"
          />
        </div>

        {/* Bottom Image */}
        <div className="relative z-10 mt-4 ml-48">
          <img
            src="/Images/istockphoto-617767252-612x612 1.png" // Replace with your second image path
            alt="Helping kids 2"
            className="rounded-sm shadow-md w-full"
          />
        </div>
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 mb-4">
        <h2 className="text-6xl  font-semibold text-gray-800 mb-8 mt-12">
          Our Goal is to help poor people:
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          This platform aims to connect food donors (individuals, restaurants, or supermarkets) with local food banks, shelters, or community organizations that can distribute food to people in need.
        </p>
        <ul className="mt-4 text-gray-600 list-disc list-inside">
          <li>Reduce food wastage by enabling surplus food redistribution.</li>
          <li>Enhance food security for underprivileged individuals and communities.</li>
          <li>
            Promote transparency and trust in food donation networks through advanced AI and <span className="ml-6"> technology-driven solutions</span>.
          </li>
          <li>Encourage widespread participation from restaurants, NGOs, and individual contributors.</li>
          <li>Support the creation of sustainable food systems that reduce environmental impact.</li>
          <li>Raise awareness about hunger and food insecurity issues through educational campaigns.</li>
          <li>Partner with schools and community centers to promote food education and healthy eating <span className='ml-6'>habits.</span></li>
          <li>Provide real-time tracking and reporting tools for better accountability in food donations.</li>

        </ul>
        <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600">
          Know More
        </button>
      </div>
    </div>
  );
};

export default GoalSection;
