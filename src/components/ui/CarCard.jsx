"use client";

import Image from "next/image";
import Link from "next/link";
import { FiEye } from "react-icons/fi";
import { SlSpeedometer } from "react-icons/sl";
import {
  PiEngineLight,
  PiGearSixLight,
  PiCalendarBlankLight,
} from "react-icons/pi";

const CarCard = ({ car }) => {
  return (
    <div
      key={car._id}
      className="premium-card flex flex-col justify-between h-full group overflow-hidden bg-secondary border border-white/[0.04] rounded-2xl p-4 transition-all duration-300 hover:border-gold/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
    >
      <div>
        <div className="relative w-full aspect-[16/10] bg-[#1a1a1c]/60 rounded-xl overflow-hidden mb-4 flex items-center justify-center p-2">
          <span className="absolute top-3 left-3 z-10 text-[10px] font-medium tracking-wide bg-white/10 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/5">
            {car.carType}
          </span>

          <Image
            src={car.imageUrl}
            alt={car.name}
            width={400}
            height={250}
            className="object-cover w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-[1.04]"
          />

          {/* {!car.availability && (
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
              <span className="font-app text-xs font-bold tracking-widest text-gold border border-gold/30 bg-gold/5 px-4 py-2 rounded-xl uppercase">
                Not Available
              </span>
            </div>
          )} */}
        </div>

        <div className="space-y-1 mb-4">
          <h3 className="text-base font-semibold text-gold tracking-wide truncate">
            {car.name}
          </h3>
          <p className="text-xs text-light/50 truncate">{car.location}</p>
        </div>

        <p className="text-xs text-light/60 line-clamp-2 mb-4 leading-relaxed">
          {car.description}
        </p>

        <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-light/70 border-t border-white/[0.03] pt-3 mb-4">
          <div className="flex items-center gap-2 text-[11px]">
            <SlSpeedometer className="text-sm text-light/40" />
            <span className="truncate">{car.carType}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <PiEngineLight className="text-sm text-light/40" />
            <span className="truncate">{car.seatCapacity} Seats</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-white/[0.03] pt-3 mt-auto">
        <div className="flex flex-col">
          <span className="font-app text-sm sm:text-base font-bold text-light">
            ${car.dailyRentPrice.toLocaleString()}
          </span>
          <span className="text-[9px] text-light/40 uppercase tracking-wider -mt-1">
            Per Day
          </span>
        </div>

        <Link href={`/cars/${car._id}`} className="flex-1 max-w-[120px]">
          <button
            // disabled={!car.availability}
            className="w-full flex items-center justify-center gap-1.5 bg-gold text-primary font-semibold text-xs py-2.5 px-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#ffe2a4] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-gold"
          >
            <FiEye className="text-sm" />
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
