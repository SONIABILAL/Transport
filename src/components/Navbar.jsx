import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔹 Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* 🔹 Top White Bar */}
      <div
        className={`${
          scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="bg-white text-gray-700 border-b border-blue-600 py-2 text-sm">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4">
            {/* Left side */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <span className="font-semibold text-gray-800 text-xs sm:text-sm">
                TEL: <span className="text-gray-600">+971 54 736 6514</span>
              </span>

              {/* 🔗 Social Media Links */}
              <div className="flex space-x-3 text-gray-600 text-lg">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61570415354953&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaFacebookF />
                </a>

                {/* Instagram (add your link later) */}
                <a href="#" className="hover:text-blue-600">
                  <AiFillInstagram />
                </a>

                {/* Twitter (add your link later) */}
                <a href="#" className="hover:text-blue-600">
                  <IoLogoTwitter />
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-6 text-xs sm:text-sm font-medium">
              {/* ✅ Clickable Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=binumarptbr@gmail.com&su=Inquiry%20from%20Website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-700"
              >
                <CgMail className="text-blue-700 text-xl sm:text-2xl" />
                <span>Binumarptbr@gmail.com</span>
              </a>

              {/* ✅ Clickable Location (opens Google Maps) */}
              <a
                href="https://www.google.com/maps/place/4+Street+43,+Dubai,+United+Arab+Emirates"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-700"
              >
                <IoLocationSharp className="text-blue-700 text-xl sm:text-2xl" />
                <span>4 Street 43, Sector, Dubai, United Arab Emirates</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Navbar */}
      <nav
        className={`text-white font-semibold transition-all duration-700 ease-in-out ${
          scrolled ? "bg-blue-700 py-2 shadow-lg" : "bg-blue-700 py-3"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          {/* Left side (Logo + Name) */}
          <div className="flex items-center gap-3 transition-all duration-700">
            <img
              src="/images/transportLogo.jpeg"
              alt="Transport Logo"
              className="logo-img"
            />
            <h1 className="text-xl font-bold tracking-wide">Transport</h1>
          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            {menuOpen ? (
              <HiX
                className="text-3xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <HiMenu
                className="text-3xl cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>

          {/* Right side (Menu Links) */}
          <div
            className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-10 absolute md:static left-0 w-full md:w-auto bg-blue-800 md:bg-transparent transition-all duration-500 ease-in-out ${
              menuOpen
                ? "top-[100%] opacity-100 visible"
                : "top-[-500px] opacity-0 md:opacity-100 md:visible invisible"
            }`}
          >
            {[
              { name: "HOME", to: "/" },
              { name: "OUR SERVICE", to: "/services" },
              { name: "ABOUT US", to: "/about" },
              { name: "CITY TOURS", to: "/citytours" },
              { name: "CONTACT", to: "/contact" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-center md:inline pb-1 transition-all 
     ${
       isActive
         ? "md:border-b-2 md:border-white"
         : "md:hover:border-b-2 md:hover:border-white"
     }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
