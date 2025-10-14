const About = () => {
  return (
    <section className="pb-20">
      {/* 🔹 Top Banner Section */}
      <div
        className="relative bg-cover bg-center h-[70vh] flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: "url('/images/about (2).jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold mb-3 tracking-wide">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            <strong>Bin Umar Passenger Transport</strong> is a trusted provider
            of luxury and reliable transportation services across Dubai and the
            UAE. We offer safe, comfortable, and well-maintained buses for group
            travel, city tours, events, and corporate transfers — ensuring every
            journey is smooth, punctual, and stress-free.
          </p>
        </div>
      </div>

      {/* 🔹 About Company Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mt-20 space-y-24">
        {/* 🔸 Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl leading-snug text-cyan-800 mb-4 font-semibold">
              About Bin Umar Passenger Transport
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              <strong>Bin Umar Passenger Transport</strong> provides reliable
              and professional bus rental services across Dubai and the UAE. Our
              diverse fleet of well-maintained vehicles and skilled drivers
              ensures every journey is safe, comfortable, and on time. Whether
              it’s a corporate transfer, school trip, or group travel, we
              deliver transportation solutions you can truly depend on.
            </p>
            <ul className="space-y-2 ml-6 list-disc text-gray-700">
              <li>Wide range of luxury and standard buses</li>
              <li>Professional and punctual transport services</li>
              <li>Highly skilled, experienced drivers</li>
              <li>24/7 service availability</li>
              <li>Affordable rental rates</li>
              <li>20+ years of dedicated service</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <img
              src="/images/bus8.jpeg"
              alt="Transport Bus"
              className="w-full h-[450px] object-cover rounded-3xl shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-3xl bg-black/20 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* 🔸 Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative group md:order-1 order-2 mb-16">
            <img
              src="/images/bus7.jpeg"
              alt="Luxury Bus"
              className="w-full h-[450px] object-cover rounded-3xl shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-3xl bg-black/20 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center md:order-2 order-1">
            <h2 className="text-4xl md:text-5xl leading-snug text-cyan-800 mb-4 font-semibold">
              Our Mission
            </h2>
            <h3 className="text-2xl md:text-3xl mb-4 text-gray-800">
              Your safety is our top priority.
            </h3>
            <div className="leading-relaxed text-lg text-gray-700 space-y-3">
              <p>
                <span className="text-cyan-700 font-semibold">
                  Well-Maintained Fleet:
                </span>{" "}
                Our vehicles undergo regular inspection to ensure optimal
                performance and reliability.
              </p>
              <p>
                <span className="text-cyan-700 font-semibold">
                  Professional Drivers:
                </span>{" "}
                Highly trained and courteous drivers dedicated to your safety
                and comfort.
              </p>
              <p>
                <span className="text-cyan-700 font-semibold">
                  Safety Standards:
                </span>{" "}
                All our buses comply with UAE transport regulations and safety
                protocols.
              </p>
              <p>
                <span className="text-cyan-700 font-semibold">
                  Clean & Sanitized Vehicles:
                </span>{" "}
                We maintain the highest hygiene standards with regular cleaning
                and sanitization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
