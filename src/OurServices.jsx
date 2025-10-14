import ServiceCard from "./components/ServiceCard"; // ✅ Import your card component

const OurServices = () => {
  // 🔹 Your service data
  const serviceData = [
    {
      image: "/images/bus5.jpeg",
      title: "Airport Transfers",
      description:
        "Enjoy a seamless journey from the airport to your destination with our reliable transfer service. Sit back and relax as our professional chauffeurs ensure a smooth, stylish, and comfortable ride — right on time, every time.",
    },
    {
      image: "/images/bus6.jpeg",
      title: "Hotel Transfer",
      description:
        "Enhance your Dubai experience with our luxurious hotel transfer service. Enjoy door-to-door convenience, punctual pickups, and smooth rides with our professional chauffeurs — ensuring you arrive relaxed and on time, every time",
    },
    {
      image: "/images/seat3.jpeg",
      title: "City Tour",
      description:
        "Embark on an unforgettable journey through Dubai with our premium city tour service. Discover iconic landmarks, hidden gems, and the rich culture of the city — all from the comfort of our modern, luxury vehicles.",
    },
    {
      image: "/images/business.jpeg",
      title: "Business Meeting Chauffeurs",
      description:
        "Make a lasting impression by arriving at your meetings in comfort and style. Our professional chauffeurs are punctual, discreet, and highly experienced — ensuring a smooth, stress-free ride so you can stay focused on what matters most: your business.",
    },
    {
      image: "/images/service4.jpg",
      title: "Corporate and Group Functions",
      description:
        "Impress your clients and colleagues with our professional chauffeur services for corporate and group functions. Whether it's a business conference, seminar, or team-building event, we ensure timely and reliable transportation for all attendees.",
    },
    {
      image: "/images/conference.png",
      title: "Executive Conference Transportation",
      description:
        "Ensure a flawless experience at your next conference with our reliable chauffeur services. From seamless airport transfers for keynote speakers to comfortable shuttle transport for attendees, Bin Umar Passenger Transport delivers efficiency, professionalism, and comfort at every step.",
    },
  ];

  return (
    <section>
      {/* 🔹 Top Banner Section */}
      <div
        className="relative bg-cover bg-center h-[70vh] flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: "url('/images/bus4.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold mb-3">
            Explore Our Premium Transport Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            At <strong>Bin Umar Passenger Transport</strong>, we deliver
            reliable, comfortable, and affordable transportation solutions
            across Dubai and the UAE. Whether you’re booking a city tour,
            airport transfer, staff transport, or private rental, our modern
            fleet and professional drivers ensure every journey is safe, smooth,
            and on time.
          </p>
        </div>
      </div>

      {/* 🔹 Services Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* 🔹 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      {/* last part */}

      <div
        className="relative bg-cover bg-center h-[70vh] flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: "url('/images/serviceBack.jpg')",
        }}
      >
        <h1 className="text-5xl font-bold ">OR ANYWHERE YOU NEED US TO TAKE</h1>
        <p className="mt-3 leading-relaxed text-xl">
          not only taking to night parties wedding casion birthdays but we also
          take you to anywhere you want to go
        </p>
        <h2 className="text-3xl font-bold mt-5">CALL NOW +971 54 736 6514</h2>
      </div>
    </section>
  );
};

export default OurServices;
