import Image from "next/image";
import {
  FiGrid,
  FiUsers,
  FiMapPin,
  FiFileText,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

const CarDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/cars/${id}`, {
    cache: "no-store",
  });
  const car = await res.json();

  if (!car) {
    return (
      <div className="min-h-screen bg-primary flex justify-center items-center text-light">
        <p className="text-xl font-semibold">Car not found!</p>
      </div>
    );
  }

  return (
    <section className="w-full bg-primary py-12 px-4 sm:px-6 lg:px-8 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl bg-secondary border border-white/[0.04] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative overflow-hidden">
        <div className="w-full h-[300px] sm:h-[400px] lg:h-full relative rounded-2xl overflow-hidden border border-white/[0.06]">
          <Image
            src={car.imageUrl}
            alt={car.name}
            fill
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span
              className={`text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full border flex items-center gap-2 backdrop-blur-md ${
                car.availability
                  ? "bg-green-500/10 text-green-400 border-green-500/20"
                  : "bg-red-500/10 text-red-400 border-red-500/20"
              }`}
            >
              {car.availability ? <FiCheckCircle /> : <FiXCircle />}
              {car.availability ? "Available" : "Unavailable"}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 select-none inline-block">
              Luxury Rental
            </span>
            <h1 className="font-app text-3xl sm:text-4xl font-bold tracking-tight text-light uppercase mt-3">
              {car.name}
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/50 border border-white/[0.03] p-4 rounded-xl flex items-center gap-3">
              <FiGrid className="text-gold text-xl shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-light/40">
                  Category
                </p>
                <p className="text-sm font-semibold text-light/90">
                  {car.carType}
                </p>
              </div>
            </div>

            <div className="bg-primary/50 border border-white/[0.03] p-4 rounded-xl flex items-center gap-3">
              <FiUsers className="text-gold text-xl shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-light/40">
                  Capacity
                </p>
                <p className="text-sm font-semibold text-light/90">
                  {car.seatCapacity} Seats
                </p>
              </div>
            </div>

            <div className="bg-primary/50 border border-white/[0.03] p-4 rounded-xl flex items-center gap-3 col-span-2">
              <FiMapPin className="text-gold text-xl shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-light/40">
                  Location
                </p>
                <p className="text-sm font-semibold text-light/90">
                  {car.location}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2">
              <FiFileText className="text-gold" /> Overview
            </h3>
            <p className="text-sm text-light/70 leading-relaxed bg-primary/30 border border-white/[0.02] p-4 rounded-xl max-h-[150px] overflow-y-auto custom-scrollbar">
              {car.description}
            </p>
          </div>

          <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-light/40">
                Daily Rate
              </p>
              <div className="flex items-baseline text-light">
                <span className="text-2xl font-bold text-gold">$</span>
                <span className="text-4xl font-extrabold tracking-tight text-light ml-0.5">
                  {car.dailyRentPrice}
                </span>
                <span className="text-xs text-light/40 ml-1">/ day</span>
              </div>
            </div>

            {/* 👑 বুকিং বাটন কম্পোনেন্ট পাসিং
            <BookNowBtn
              carId={car._id}
              carName={car.name}
              availability={car.availability}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
