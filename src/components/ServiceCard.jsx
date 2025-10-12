import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* 🔹 Image Section with Zoom Effect */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* 🔹 Text Section */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-cyan-800 mb-3">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
