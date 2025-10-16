import React from "react";

const KiaRentalSection = () => {
  return (
    <section
      className="relative bg-center bg-cover text-white flex flex-col items-center justify-center mt-16 md:mt-20 mb-16 md:mb-20 py-20 sm:py-24"
      style={{
        backgroundImage: "url('/images/bg.webp')",
        backgroundAttachment: "fixed", // keep parallax on large screens only
      }}
    >
      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔹 Main Content */}
      <div className="relative z-10 text-center max-w-6xl px-4 sm:px-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-cyan-400 mb-6 sm:mb-8 leading-snug drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          Experience the Power of Luxury Travel
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-10 sm:mb-14 max-w-3xl mx-auto leading-relaxed">
          Discover why our 7-Seater KIA rental in Dubai is the ultimate choice
          for comfort, performance, and elegance. Perfect for families, business
          groups, or stylish explorers.
        </p>

        {/* 🔹 Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              title: "Unmatched Comfort",
              text: "Spacious interiors with plush seating designed for a smooth, relaxed journey.",
            },
            {
              title: "Premium Performance",
              text: "Engineered for Dubai’s roads, offering stability, safety, and refined power.",
            },
            {
              title: "Chauffeur Excellence",
              text: "Our professional drivers ensure punctuality and a five-star travel experience.",
            },
            {
              title: "24/7 Availability",
              text: "Book anytime, anywhere — we’re ready to drive you wherever you need to go.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KiaRentalSection;
