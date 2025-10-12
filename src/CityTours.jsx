import BenfitsTransport from "./components/BenfitsTransport";
import CityTourCard from "./components/CityTourCard";

const CityTours = () => {
  const data = [
    {
      title: "Dubai City Tour Bus Rental",
      text: "The best and most affordable way to experience the key tourist sites in Dubai City Tour, including viewing the historical landmarks, the Dubai Desert, and both old and new tourist attractions, is with the full-day private Dubai City Tour package that we provide. Get the Dubai city tour by Bus with us! Dubai is a city and emirate in the United Arab Emirates. Additionally, it is known for luxury shopping, ultramodern architecture and a nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain. On artificial islands, the Palm, a resort with water and marine-animal parks. in farosh passenger transport company is the best way to explore both historic and modern side of Dubai.",
      imgSrc: "/images/tour1.webp",
    },
    {
      title: "Abu Dhabi City Tour Bus Rental",
      text: "Abu Dhabi is the capital and largest city of the United Arab Emirates, and is known for its modern skyline, cultural attractions, and natural beauty. A city tour bus rental can be a great way to see the sights and attractions of Abu Dhabi and learn about its history and culture.farosh Bus Rental company offer Abu Dhabi city tour bus rentals, which typically include stops at popular attractions such as the Sheikh Zayed Grand Mosque, the Louvre Abu Dhabi, and the Abu Dhabi Corniche. Some tours also include visits to local markets, traditional houses, and other cultural sites. Most Abu Dhabi city tour bus rentals are guided and include a tour guide who provides information about the city and its attractions. To book an Abu Dhabi city tour bus rental, you can contact with farosh Bus Rental",
      imgSrc: "/images/tour2.webp",
    },
    {
      title: "Sharjah City Tour and Sharjah Bus Rental",
      text: "Sharjah is the third largest city in the United Arab Emirates and is known for its rich history, cultural attractions, and natural beauty. A bus tour is a great way to see the city and learn about its landmarks and history Muskan Bus Rental company offer Sharjah bus rental tours, which typically include stops at popular attractions such as the Sharjah Museum of Islamic Civilization, the Sharjah Heritage Area, and the Sharjah Art Museum. Some tours also include visits to local markets, traditional houses, and other cultural sites. Most Sharjah bus tours are guided and include a tour guide who provides information about the city and its attractions.",
      imgSrc: "/images/tourplace.jpg",
    },
  ];

  return (
    <section>
      {/* 🔹 Hero Section */}
      <div
        className="relative bg-cover bg-center h-[70vh] flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: "url('./images/services (2).jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold mb-3">City Tours</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Discover the beauty, culture, and hidden gems of the city with our
            guided tours. From historic landmarks to modern attractions,
            experience the perfect mix of adventure and relaxation. Whether
            you're a visitor or a local, our city tour promises memories that
            last a lifetime.
          </p>
        </div>
      </div>

      {/* 🔹 Intro Text */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mt-20">
        <h1 className="font-bold text-4xl text-cyan-700">
          City Tour Bus Rental Services
        </h1>
        <p className="mt-10 leading-relaxed text-gray-700">
          City tour bus rental refers to the process of renting a bus
          specifically for use on a city tour. City tours in UAE are a popular
          way for tourists to see the sights and landmarks of a city, and a bus
          rental in UAE can provide an efficient and convenient way to get
          around. Farosh Bus Rental company offer city tour bus rentals in
          Dubai, Sharjah, Abu Dhabi, Al Ain, and more. Contact us for the best
          packages!
        </p>
      </div>

      {/* 🔹 Tour Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mt-16">
        {data.map((item, idx) => (
          <CityTourCard
            key={idx}
            title={item.title}
            text={item.text}
            imgSrc={item.imgSrc}
            reverse={idx % 2 === 1} // alternate layout
          />
        ))}
      </div>
      <BenfitsTransport />
    </section>
  );
};

export default CityTours;
