import React from "react";

const Contact = () => {
  return (
    <section>
      {/* 🔹 Top Banner Section with Background Image */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: "url('/images/seat3.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold mb-3">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Bin Umar passenger Transport — Your trusted partner for reliable
            transportation solutions.
          </p>
        </div>
      </div>

      {/* 🔹 Bottom Contact Section */}
      <div className="bg-white py-16 px-6 md:px-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-cyan-800">
          Please fill the form below.
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Side - Form */}
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name*"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <input
              type="email"
              placeholder="Email*"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <textarea
              rows="4"
              placeholder="Message*"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-700 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          {/* Right Side - Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 uppercase">
                Before Contacting Us
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Discover why our chauffeur service is the best choice for luxury
                transportation. Enjoy professional drivers, a premium fleet, and
                transparent pricing for all your travel needs!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 uppercase">
                Contact Information
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                4 Street 43, Sector, Dubai, United Arab Emirates
              </p>
              <p className="mt-2 text-blue-600 font-medium">
                📞 +971 54 736 6514
              </p>
              <p>Everyday 24/7 Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
