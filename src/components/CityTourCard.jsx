// 📄 src/components/CityTourCard.jsx

function CityTourCard({
  title,
  text,
  imgSrc,
  imgAlt = "tour image",
  reverse = false,
}) {
  return (
    <article
      className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 py-8 md:py-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">{text}</p>
      </div>
    </article>
  );
}

export default CityTourCard;
