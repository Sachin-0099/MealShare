import React from 'react';


const Card = ({ image, title, description }) => {
  return (
    <div 
      className="bg-white rounded-lg p-3 flex flex-col items-center mx-auto my-2 max-w-[200px] shadow-md" 
      style={{ boxShadow: '0px 4px 4px rgba(234, 54, 14, 0.94)' }} 
     >
      <img src={image} alt={title} className="w-full h-28 object-cover rounded-t-lg" /> 
      <h2 className="text-xs font-bold mt-2 text-center">{title}</h2> 
      <p className="text-xs text-gray-700 mt-1 text-center">{description}</p>
    </div>
  );
};

export default Card;
