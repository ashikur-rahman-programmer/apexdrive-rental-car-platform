"use client";

import Image from "next/image";
import Link from "next/link";
import { FiEye } from "react-icons/fi";
import { SlSpeedometer } from "react-icons/sl";
import { PiEngineLight } from "react-icons/pi";
import { motion } from "framer-motion";

const CarCard = ({ car }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="premium-card flex flex-col justify-between h-full group overflow-hidden bg-secondary border border-white/[0.04] rounded-2xl p-4 transition-all duration-300 hover:border-gold/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
    >
      <div>
        {/* Media Container */}
        <div className="relative w-full aspect-[16/10] bg-[#1a1a1c]/60 rounded-xl overflow-hidden mb-4 flex items-center justify-center p-2">
          <span className="absolute top-3 left-3 z-10 text-[10px] font-medium tracking-wide bg-black/40 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/5 uppercase">
            {car.carType}
          </span>

          <Image
            src={car.imageUrl}
            alt={car.name}
            width={400}
            height={250}
            className="object-cover w-full h-full rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />

          {!car.availability && (
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-20">
              <span className="font-app text-xs font-bold tracking-widest text-gold border border-gold/30 bg-gold/5 px-4 py-2 rounded-xl uppercase">
                Not Available
              </span>
            </div>
          )}
        </div>

        {/* Title & Metadata */}
        <div className="space-y-1 mb-3">
          <h3 className="text-base font-semibold text-gold tracking-wide truncate">
            {car.name}
          </h3>
          <p className="text-xs text-light/50 truncate font-medium">
            {car.location}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs text-light/60 line-clamp-2 mb-4 leading-relaxed h-8">
          {car.description}
        </p>

        {/* Technical Specs */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-light/70 border-t border-white/[0.03] pt-3 mb-4">
          <div className="flex items-center gap-2 text-[11px] font-medium">
            <SlSpeedometer className="text-sm text-gold/60" />
            <span className="truncate">{car.carType}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-medium">
            <PiEngineLight className="text-sm text-gold/60" />
            <span className="truncate">{car.seatCapacity || "4"} Seats</span>
          </div>
        </div>
      </div>

      {/* Footer / Action section */}
      <div className="flex items-center justify-between gap-2 border-t border-white/[0.03] pt-3 mt-auto">
        <div className="flex flex-col">
          <span className="font-app text-sm sm:text-base font-bold text-light tracking-wide">
            ${car.dailyRentPrice?.toLocaleString()}
          </span>
          <span className="text-[9px] text-light/40 uppercase tracking-widest font-semibold -mt-0.5">
            Per Day
          </span>
        </div>

        <Link href={`/explore-car/${car._id}`} className="flex-1 max-w-[130px]">
          <motion.button
            whileTap={car.availability ? { scale: 0.96 } : undefined}
            disabled={!car.availability}
            className="w-full flex items-center justify-center gap-1.5 bg-gold text-primary font-bold text-xs py-2.5 px-3 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-[#ffe2a4] disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-gold uppercase tracking-wider"
          >
            <FiEye className="text-sm shrink-0" />
            Details
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CarCard;
