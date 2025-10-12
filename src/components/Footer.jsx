import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-300 py-50 relative z-10 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <p className="text-sm leading-relaxed mb-4">
            <strong>Bin Umar passenger Transport</strong> By Rented Buses is one
            of the best Heavy Vehicles Rentals provider in Dubai.
          </p>
          <p className="text-sm">📞+971 54 736 6514</p>
          <p className="text-sm">📧Binumarptbr@gmail.com</p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold text-white mb-3 text-lg">COMPANY</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-cyan-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-700">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-700">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Fleets */}
        <div>
          <h3 className="font-bold text-white mb-3 text-lg">Our Fleets</h3>
          <ul className="space-y-2">
            <li>7 Seater Viano Mercedes</li>
            <li>Sprinter 18 seater</li>
            <li>23 Seater MiniBus Rental</li>
            <li>30 Seater Coaster for Rent</li>
            <li>37 Seater Luxury Bus for Rent</li>
            <li>50 Seater Bus Rent</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-bold text-white mb-3 text-lg">Our Services</h3>
          <ul className="space-y-2">
            <li>Airport Transfers</li>
            <li>City Tours</li>
            <li>Group Travel</li>
            <li>Events Transfers</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-40 pt-5 flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto">
        <p className="text-sm text-gray-400">
          Copyright © Bin Umar passenger Transport
        </p>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-3 md:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=61570415354953&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/971 54 736 6514"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
