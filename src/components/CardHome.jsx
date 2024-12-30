import React from 'react';

const CardHome = ({ image, title, description }) => {
  return (
    <div 
      className="bg-white rounded-lg p-3 flex flex-col items-center mx-auto my-2 max-w-[200px] border border-4 border-orange-200"
    >
      <img src={image} alt={title} className="w-20 h-20 object-contain rounded-t-lg" /> 
      <h2 className="text-s font-bold mt-2 text-center">{title}</h2> 
      <p className="text-xs text-gray-700 mt-1 text-center">{description}</p>
    </div>
  );
};

export default CardHome;