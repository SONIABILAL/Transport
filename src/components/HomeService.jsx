import React from "react";
import BenfitsTransport from "./BenfitsTransport";

const HomeService = () => {
  return (
    <section className="mt-24">
      {/* ✅ Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* 🔹 Left Side - Image Grid (Fixed sizes & alignment) */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./images/bus1.jpeg"
              alt="bus1"
              className="w-full h-64 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src="./images/bus2.jpeg"
              alt="bus2"
              className="w-full h-64 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src="./images/bus5.jpeg"
              alt="bus3"
              className="col-span-2 w-full h-64 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* 🔹 Right Side - Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-800">
              50 Seater Buses KIA Rental in Dubai
            </h1>

            <p className="leading-relaxed text-gray-600">
              Welcome to <strong>Bin Umar Passenger Transport</strong>, your
              trusted provider of luxury transportation services in Dubai. Our
              7-seater KIA rental combines comfort, safety, and style for your
              every journey — whether it’s a corporate meeting, airport
              transfer, or city tour.
            </p>

            <p className="mt-5 leading-relaxed text-gray-600">
              Experience smooth, comfortable, and premium travel with our modern
              fleet. Our skilled chauffeurs ensure a hassle-free ride so you can
              relax and enjoy your time in Dubai. Book your ride today with{" "}
              <strong>Bin Umar Passenger Transport</strong>.
            </p>
          </div>
        </div>

        {/* 🔹 Why Choose Section */}
        <div className="mt-12">
          <h1 className="text-4xl md:text-5xl text-cyan-800 font-semibold mb-6">
            Why Choose Our 7 Seater KIA Rental in Dubai?
          </h1>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-3">
              <h2 className="font-semibold text-lg text-cyan-700 md:w-48 shrink-0">
                1. Seating Capacity:
              </h2>
              <p className="text-gray-700">
                Spacious 7-seater vehicles with premium interiors designed for
                comfort and class, perfect for families and corporate groups.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <h2 className="font-semibold text-lg text-cyan-700 md:w-48 shrink-0">
                2. Comfortable Interiors:
              </h2>
              <p className="text-gray-700">
                Relax in plush seating and ample legroom while enjoying a smooth
                and quiet ride.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <h2 className="font-semibold text-lg text-cyan-700 md:w-48 shrink-0">
                3. Experienced Drivers:
              </h2>
              <p className="text-gray-700">
                Our professional chauffeurs ensure punctuality, safety, and a
                pleasant travel experience throughout your journey.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <h2 className="font-semibold text-lg text-cyan-700 md:w-48 shrink-0">
                4. Advanced Features:
              </h2>
              <p className="text-gray-700">
                Enjoy modern amenities like climate control, premium audio
                systems, and spacious interiors.
              </p>
            </div>
          </div>
        </div>

        {/* 🔹 Booking Section */}
        <div className="mt-10">
          <h2 className="text-2xl text-cyan-800 font-semibold">
            Book Our 7 Seater KIA Rental in Dubai!
          </h2>
          <p className="text-gray-700 mt-4">
            Contact <strong>Bin Umar Passenger Transport</strong> today for
            reliable, stylish, and comfortable transportation across Dubai. Let
            us make your journey stress-free and enjoyable.
          </p>
        </div>
      </div>

      <BenfitsTransport />
    </section>
  );
};

export default HomeService;
