import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardServices = ({ img, title, description, link }) => {
  return (
    <Link
      to={link || "https://www.google.com/?client=safari"}
      className="relative bg-white shadow-lg rounded-lg p-4 flex flex-col items-center mx-auto my-2 max-h-[250px] max-w-[270px] border border-gray-300 hover:shadow-2xl transition-shadow duration-300"
      style={{
        border: '2px solid rgba(96, 96, 96, 0.8)', // Adjust opacity here
        borderRadius: '8px',
        padding: '10px',
        textDecoration: 'none', // Ensures no underline for the link
        color: 'inherit', // Keeps text colors from the component
      }}
    >
      <div className="absolute -top-[35px]">
        <img
          src={img}
          alt={title}
          className="w-[80px] h-[80px] object-cover rounded-full border-4 border-orange-400 shadow-md"
        />
      </div>
      <div className="mt-[50px] flex flex-col  items-center justify-center text-center">
        <h2 className="text-lg font-semibold text-gray-800 mt-3">{title}</h2>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed h-[8rem] overflow-hidden leading-1">
          {description}
        </p>
      </div>
    </Link>
  );
};

CardServices.propTypes = {
  img: PropTypes.string.isRequired, // Validates that 'img' is a string and required
  title: PropTypes.string.isRequired, // Validates that 'title' is a string and required
  description: PropTypes.string.isRequired, // Validates that 'description' is a string and required
  link: PropTypes.string, // Validates that 'link' is a string (optional)
};

CardServices.defaultProps = {
  link: "https://www.google.com/?client=safari", // Default value for 'link' if not provided
};

export default CardServices;
