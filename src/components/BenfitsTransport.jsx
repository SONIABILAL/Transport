import React from "react";
import { FaBus } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { CgViewComfortable } from "react-icons/cg";

const BenfitsTransport = () => {
  return (
    <section className="w-full md:w-1/2 ml-auto bg-blue-700 text-white py-10 px-8 relative z-20 -mb-20">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
          Experience the Comfort and Convenience of Our Luxury Bus Rentals.
        </h2>
        <h3 className="text-lg md:text-2xl mt-2 opacity-90">
          Your Journey Starts Here!
        </h3>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
            <FaBus className="text-3xl" />
            <h2 className="text-xl font-semibold">Maintained Buses</h2>
          </div>
          <p className="text-sm opacity-90">
            Our Maintenance Team keeps track of your fleet in good shape.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
            <MdOutlineSecurity className="text-3xl" />
            <h2 className="text-xl font-semibold">Safety and Security</h2>
          </div>
          <p className="text-sm opacity-90">
            All our buses follow RTA precautions regarding Safety and Security.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
            <CgViewComfortable className="text-3xl" />
            <h2 className="text-xl font-semibold">Ease and Comfort</h2>
          </div>
          <p className="text-sm opacity-90">
            The Buses we offer are clean and comfortable for traveling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenfitsTransport;
