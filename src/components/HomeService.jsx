import BenfitsTransport from "./BenfitsTransport";
import KiaRentalSection from "./KiaRentalSection";
// import KiaRentalSection from "./KiaRentalSection";

const HomeService = () => {
  return (
    <section className="mt-24">
      {/* ✅ Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* 🔹 Left Side - Image Grid */}
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
              Luxury 50-Seater KIA Bus Rental in Dubai
            </h1>

            <p className="leading-relaxed text-gray-600">
              Welcome to <strong>Bin Umar Passenger Transport</strong> — your
              trusted partner for premium transportation services in Dubai. Our
              spacious 7-seater KIA rental offers the perfect blend of comfort,
              safety, and modern style, making it ideal for corporate events,
              airport transfers, and city tours. Enjoy a smooth, reliable, and
              luxurious travel experience every time you ride with us.
            </p>

            <p className="mt-5 leading-relaxed text-gray-600">
              Experience smooth, comfortable, and premium travel with our modern
              fleet of well-maintained vehicles. Our professional chauffeurs
              deliver safe, punctual, and stress-free rides, allowing you to sit
              back, relax, and enjoy your time in Dubai. Book your journey today
              with <strong>Bin Umar Passenger Transport</strong> — where comfort
              meets reliability.
            </p>
          </div>
        </div>
      </div>
      {/* <KiaRentalSection /> */}
      <KiaRentalSection />

      <BenfitsTransport />
    </section>
  );
};

export default HomeService;
