import React from "react";

const Contact = () => {
  return (
    <section>
      {/* 🔹 Top Banner Section */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex flex-col justify-center items-center text-white text-center px-4 sm:px-8"
        style={{
          backgroundImage: "url('/images/seat3.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Get in Touch with Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Get in touch with <strong>Bin Umar Passenger Transport</strong>,
            your trusted partner for safe, reliable, and comfortable
            transportation solutions across Dubai and the UAE.
          </p>
        </div>
      </div>

      {/* 🔹 Google Map Section */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl mb-6 mt-10 text-cyan-700 font-bold">
        Our Location
      </h2>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Bin Umar Passenger Transport Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14437.462570229437!2d55.29569869999999!3d25.2769871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f4ab5dff1%3A0x5c16a6f4f02f5d90!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1696342380000!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* 🔹 Contact Section */}
      <div className="bg-white py-14 px-6 sm:px-10 lg:px-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10 text-cyan-800">
          Please fill the form below
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Side - Form */}
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name*"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition"
            />
            <input
              type="email"
              placeholder="Email*"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition"
            />
            <textarea
              rows="4"
              placeholder="Message*"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-700 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </form>

          {/* Right Side - Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 uppercase text-cyan-700">
                Before Contacting Us
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Discover why our chauffeur service is the best choice for luxury
                transportation. Enjoy professional drivers, a premium fleet, and
                transparent pricing for all your travel needs!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 uppercase text-cyan-700">
                Contact Information
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                4 Street 43, Sector, Dubai, United Arab Emirates
              </p>
              <p className="mt-3 text-blue-600 font-medium text-base">
                📞 +971 54 736 6514
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Everyday 24/7 Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
