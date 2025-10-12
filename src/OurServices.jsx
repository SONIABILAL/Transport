import ServiceCard from "./components/ServiceCard"; // ✅ Import your card component

const OurServices = () => {
  // 🔹 Your service data
  const serviceData = [
    {
      image: "/images/bus5.jpeg",
      title: "Airport Transfers",
      description:
        "Seamlessly transition from air to ground with our impeccable airport transfer service. Relax as our professional chauffeurs whisk you away in comfort and style.",
    },
    {
      image: "/images/bus6.jpeg",
      title: "Hotel Transfer",
      description:
        "Elevate your stay with our luxurious hotel transfer service. Enjoy the convenience of door-to-door transportation by our expert drivers in Dubai.",
    },
    {
      image: "/images/seat3.jpeg",
      title: "City Tour",
      description:
        "Embark on a journey of discovery with our captivating city tour service. Explore Dubai’s landmarks, hidden gems, and culture from our premium vehicles.",
    },
    {
      image: "/images/business.jpeg",
      title: "Business Meeting Chauffeurs",
      description:
        "Arrive at your business meetings in style with our experienced chauffeurs. Punctual, discreet, and professional, our chauffeurs ensure a smooth and hassle-free experience, allowing you to focus on your agenda.",
    },
    {
      image: "/images/service4.jpg",
      title: "Corporate and Group Functions",
      description:
        "Impress your clients and colleagues with our professional chauffeur services for corporate and group functions. Whether it's a business conference, seminar, or team-building event, we ensure timely and reliable transportation for all attendees.",
    },
    {
      image: "/images/conference.png",
      title: "Conferences",
      description:
        "Make a lasting impression at your next conference with our dedicated chauffeur services. From airport transfers for keynote speakers to shuttle services for attendees, we handle all your transportation needs with efficiency and professionalism.",
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
          <h1 className="text-5xl font-bold mb-3">Our Services</h1>
          <p className="max-w-2xl mx-auto text-lg">
            At Bin Umar passenger Transport, we provide reliable, comfortable,
            and affordable transportation solutions across Dubai and the UAE.
            Whether you need city tours, airport transfers, staff transport, or
            private rentals, our modern fleet and experienced drivers ensure a
            smooth and safe journey every time.
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
