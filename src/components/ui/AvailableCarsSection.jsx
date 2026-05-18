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

// 💡 ডেটাবেজ বা API থেকে আসা এক্সাম্পল ডেটা স্ট্রাকচার (Minimum 6 Cars)
const mockCarsData = [
  {
    _id: "car_01",
    name: "Alfa Romeo 4C Coupe",
    subtitle: "Quad-Motor AWD, Large Pack",
    category: "Performance",
    price: 80000,
    mileage: "20 Miles",
    fuelType: "Electric",
    transmission: "Automatic",
    year: 2024,
    image: "/assets/car1.png", // আপনার পাবলিক ফোল্ডারের পাথ দিন
  },
  {
    _id: "car_02",
    name: "Audi RS 6 Avant",
    subtitle: "4.0 V8 TFSI, quattro AWD",
    category: "Performance",
    price: 125000,
    mileage: "20 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    year: 2023,
    image: "/assets/car2.png",
  },
  {
    _id: "car_03",
    name: "Volvo XC90 Recharge",
    subtitle: "T8 AWD Plug-in Hybrid",
    category: "Performance",
    price: 78000,
    mileage: "100 Miles",
    fuelType: "Plug-in Hybrid",
    transmission: "Automatic",
    year: 2024,
    image: "/assets/car3.png",
  },
  {
    _id: "car_04",
    name: "Lucid Air Crossover",
    subtitle: "Dual-Motor AWD, Extended Range",
    category: "Super Car",
    price: 105000,
    mileage: "20 Miles",
    fuelType: "Electric",
    transmission: "Automatic",
    year: 2025,
    image: "/assets/car4.png",
  },
  {
    _id: "car_05",
    name: "Mercedes-AMG GT 63 S",
    subtitle: "4.0L V8 Bi-turbo 4MATIC+",
    category: "Performance",
    price: 170000,
    mileage: "5,000 Miles",
    fuelType: "Petrol",
    transmission: "AMG Speedshift",
    year: 2022,
    image: "/assets/car5.png",
  },
  {
    _id: "car_06",
    name: "McLaren 570S Coupe",
    subtitle: "3.8L Twin-Turbo V8",
    category: "Super Car",
    price: 88000,
    mileage: "50 Miles",
    fuelType: "Petrol",
    transmission: "Dual-Clutch",
    year: 2019,
    image: "/assets/car6.png",
  },
];

const AvailableCarsSection = () => {
  const cars = mockCarsData;
  return (
    <section className="w-full bg-primary py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* ─── SECTION HEADER ─── */}
        <div className="text-center flex flex-col items-center gap-2 mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 select-none">
            Available Cars
          </span>
          <h2 className="font-app text-3xl sm:text-4xl font-bold tracking-tight text-light uppercase mt-3 leading-tight">
            Explore Our Premium Fleet <br />
            <span className="bg-gradient-to-r from-gold via-[#ffe2a4] to-gold bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,189,55,0.15)]">
              Ready To Drive
            </span>
          </h2>
          <p className="max-w-xl text-sm text-light/60 mt-2 font-normal leading-relaxed">
            Choose from our highly-maintained ultimate fleet architecture.
            Secured with seamless booking validation, high performance, and
            absolute luxury.
          </p>
        </div>

        {/* ─── CARS GRID SYSTEM ─── */}
        {/* Mobile: 1, Tablet: 2, Small Desktop: 3, Large Desktop: 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
          {cars.map((car) => (
            <div
              key={car._id}
              className="premium-card flex flex-col justify-between h-full group overflow-hidden bg-secondary border border-white/[0.04] rounded-2xl p-4 transition-all duration-300 hover:border-gold/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Card Main Area */}
              <div>
                {/* Image Container */}
                <div className="relative w-full aspect-[16/10] bg-[#1a1a1c]/60 rounded-xl overflow-hidden mb-4 flex items-center justify-center p-2">
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 z-10 text-[10px] font-medium tracking-wide bg-white/10 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/5">
                    {car.category}
                  </span>

                  <Image
                    src={car.image}
                    alt={car.name}
                    width={400}
                    height={250}
                    className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Info Text Area */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-base font-semibold text-gold tracking-wide truncate">
                    {car.name}
                  </h3>
                  <p className="text-xs text-light/50 truncate">
                    {car.subtitle}
                  </p>
                </div>

                {/* Features Specs Matrix */}
                <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-light/70 border-t border-white/[0.03] pt-3 mb-4">
                  <div className="flex items-center gap-2 text-[11px]">
                    <SlSpeedometer className="text-sm text-light/40" />
                    <span className="truncate">{car.mileage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <PiEngineLight className="text-sm text-light/40" />
                    <span className="truncate">{car.fuelType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <PiGearSixLight className="text-sm text-light/40" />
                    <span className="truncate">{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <PiCalendarBlankLight className="text-sm text-light/40" />
                    <span className="truncate">{car.year}</span>
                  </div>
                </div>
              </div>

              {/* Price & View Details Footer Area */}
              <div className="flex items-center justify-between gap-2 border-t border-white/[0.03] pt-3 mt-auto">
                <span className="font-app text-sm sm:text-base font-bold text-light bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.02]">
                  ${car.price.toLocaleString()}
                </span>

                <Link
                  href={`/cars/${car._id}`}
                  className="flex-1 max-w-[120px]"
                >
                  <button className="w-full flex items-center justify-center gap-1.5 bg-gold text-primary font-semibold text-xs py-2 px-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#ffe2a4] active:scale-95">
                    <FiEye className="text-sm" />
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableCarsSection;
