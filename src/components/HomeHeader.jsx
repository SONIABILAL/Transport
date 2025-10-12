import React from "react";

const HomeHeader = () => {
  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/home.jfif')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 w-full sm:w-4/5 md:w-4/5 lg:w-1/2 h-full">
          {/* 🔹 Heading with Modern Gradient Animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-snug animate-fadeIn">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent animate-shimmer">
              Bin Umar Passenger Transport
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 animate-fadeIn delay-200">
            Welcome to your trusted passenger transport service! We provide
            comfortable rides, experienced drivers, and stress-free journeys —
            every time you travel with us. Our modern fleet and professional
            chauffeurs ensure every journey is smooth, safe, and on time.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 animate-fadeIn delay-500">
            — Bin Umar Passenger Transport —
          </h2>
        </div>
      </section>
    </>
  );
};

export default HomeHeader;
