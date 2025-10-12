import React from "react";
import { FaCarSide, FaClock, FaUserShield, FaSmile } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="relative mt-20 py-20 y-900 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-cyan-400 animate-fadeIn">
          Why Choose{" "}
          <span className="text-white">Bin Umar Passenger Transport?</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 animate-fadeIn delay-200">
          We believe every journey should be safe, comfortable, and on time.
          That’s why thousands of passengers trust us for their daily and
          special travel needs.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-800/50  backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <FaCarSide className="text-cyan-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Luxury & Comfort</h3>
            <p className="text-gray-400">
              Experience top-notch comfort with our premium, well-maintained
              fleet.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <FaClock className="text-cyan-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">On-Time Service</h3>
            <p className="text-gray-400">
              We value your time — every ride arrives and departs on schedule.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <FaUserShield className="text-cyan-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe & Secure Travel</h3>
            <p className="text-gray-400">
              Your safety is our top priority. All drivers are trained and
              verified.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <FaSmile className="text-cyan-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
            <p className="text-gray-400">
              Our clients love the comfort, service, and reliability we deliver.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent animate-pulse-slow"></div>
    </section>
  );
};

export default WhyChooseUs;
