import React from "react";
import BenfitsTransport from "./components/BenfitsTransport";
import CityTourCard from "./components/CityTourCard";

const CityTours = () => {
  const data = [
    {
      title: "Dubai City Tour Bus Rental Services",
      text: "Discover the best and most affordable way to explore Dubai with our Full-Day Private City Tour by Bus. Experience the city’s most iconic attractions — from its historic landmarks and vibrant souks to the golden Dubai Desert and modern architectural wonders. Marvel at world-famous sites like the Burj Khalifa, the stunning Dubai Fountain, and the luxurious Palm Jumeirah resort islands. Whether you’re drawn to Dubai’s rich heritage or its ultramodern skyline, our city tour offers the perfect balance of both. With Bin Umar Passenger Transport, you’ll travel in comfort and style. Our professional chauffeurs and modern buses ensure a relaxing, safe, and unforgettable journey through the heart of Dubai.",
      imgSrc: "/images/seats.jpeg",
    },
    {
      title: "Abu Dhabi City Tour Bus Rental Services",
      text: "Discover the charm of the UAE’s capital with our Abu Dhabi City Tour Bus Rental. As the largest city of the United Arab Emirates, Abu Dhabi is a stunning blend of modern architecture, cultural heritage, and natural beauty. Our comfortable and well-maintained buses take you on a guided journey to the city’s most famous landmarks — including the magnificent Sheikh Zayed Grand Mosque, the world-renowned Louvre Abu Dhabi, and the scenic Abu Dhabi Corniche. You’ll also have the chance to explore local markets, traditional houses, and cultural attractions that showcase the true spirit of the Emirates.",
      imgSrc: "/images/seat1.jpeg",
    },
    {
      title: "Sharjah City Tour and Sharjah Bus Rental",
      text: "Discover the cultural heart of the UAE with our Sharjah City Tour Bus Rental. Known as the Cultural Capital of the Arab World, Sharjah offers a perfect mix of history, heritage, and modern attractions. Explore iconic destinations such as the Sharjah Museum of Islamic Civilization, the Blue Souk, Al Noor Mosque, and the stunning Al Qasba waterfront — all from the comfort of our well-maintained, air-conditioned buses. With Bin Umar Passenger Transport, you’ll enjoy a smooth, informative, and enjoyable tour guided by experienced drivers who ensure your journey is safe and memorable.",
      imgSrc: "/images/seat4.jpeg",
    },
  ];

  return (
    <section>
      {/* 🔹 Hero Section */}
      <div
        className="relative bg-cover bg-center h-[75vh] sm:h-[70vh] md:h-[70vh] flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: "url('/images/services (2).jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-4 sm:px-6 md:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            City Tours in Dubai
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
            Experience the best and most affordable way to explore Dubai’s top
            attractions with our Full-Day Private Dubai City Tour...
          </p>
        </div>
      </div>

      {/* 🔹 Intro Text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 mt-12 sm:mt-16 md:mt-20 text-center md:text-left">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-cyan-700 mb-6">
          City Tour Bus Rental Services in Dubai
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto md:mx-0">
          Experience Dubai like never before with our exclusive city tours.
          Explore iconic landmarks, cultural gems, and breathtaking attractions
          in comfort and style. Whether you're a tourist or a resident, every
          journey with <strong>Bin Umar Passenger Transport</strong> turns
          sightseeing into an unforgettable adventure.
        </p>
      </div>

      {/* 🔹 Tour Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 mt-10 sm:mt-14 md:mt-16 space-y-16">
        {data.map((item, idx) => (
          <CityTourCard
            key={idx}
            title={item.title}
            text={item.text}
            imgSrc={item.imgSrc}
            reverse={idx % 2 === 1} // alternate layout
          />
        ))}
      </div>

      {/* 🔹 Benefits Section */}
      <BenfitsTransport />
    </section>
  );
};

export default CityTours;
