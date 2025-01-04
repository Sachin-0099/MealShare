import React from 'react';

const PeopleCard = ({ profileImg, name, title, description }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-3 flex items-start justify-start mx-auto max-w-[350px] h-[120px] -mt-6   relative border border-black">
    
      <img 
        src={profileImg} 
        alt={name} 
        className="w-20 h-24 object-cover absolute top-3 left-3" 
      />

      
      <div className="flex flex-col justify-start h-full text-left pl-24 space-y-0"> 
        <h2 className="text-sm font-bold ">{name}</h2>
        <h3 className="text-xs font-semibold text-gray-600 mb-0">{title}</h3>
        <p className="text-[9px] text-gray-700 leading-snug mb-2 ">{description}</p> 
      </div>
    </div>
  );
};

export default PeopleCard;
