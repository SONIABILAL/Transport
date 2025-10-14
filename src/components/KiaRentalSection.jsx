import React from "react";

const KiaRentalSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-screen text-white flex flex-col items-center justify-center mt-20 mb-20 py-24"
      style={{
        backgroundImage: "url('/images/bg.webp')", // replace with your image
      }}
    >
      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔹 Main Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] mb-8">
          Experience the Power of Luxury Travel
        </h1>
        <p className="text-lg text-gray-200 mb-14">
          Discover why our 7-Seater KIA rental in Dubai is the ultimate choice
          for comfort, performance, and elegance. Perfect for families, business
          groups, or stylish explorers.
        </p>

        {/* 🔹 Feature Boxes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:bg-cyan-500/20 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
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
