import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971 54 736 6514"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+971 54 736 6514"
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
        title="Call Now"
      >
        <FiPhoneCall className="text-2xl" />
      </a>
    </div>
  );
};

export default FloatingButton;
