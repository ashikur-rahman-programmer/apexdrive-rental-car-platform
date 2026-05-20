import SearchAndFiltered from "@/components/shared/SearchAndFiltered";
import CarCard from "@/components/ui/CarCard";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const ExploreCar = async ({ searchParams }) => {
  const params = await searchParams;

  const searchQuery = params?.search || "";
  const selectedType = params?.type || "All";

  const res = await fetch(
    `http://localhost:8000/cars?search=${searchQuery}&type=${selectedType}`,
    { cache: "no-cache" },
  );
  const cars = await res.json();

  return (
    <section className="w-full bg-primary py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center flex flex-col items-center gap-2 mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 select-none">
            Our Marketplace
          </span>
          <h2 className="font-app text-3xl sm:text-4xl font-bold tracking-tight text-light uppercase mt-3">
            Explore Our <br />
            <span className="bg-gradient-to-r from-gold via-[#ffe2a4] to-gold bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,189,55,0.15)]">
              Elite Fleet
            </span>
          </h2>
        </div>

        {/* ─── SEARCH & FILTER CONTROL BAR ─── */}
        <SearchAndFiltered
          searchQuery={searchQuery}
          selectedType={selectedType}
        />

        {cars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 lg:gap-6 w-full">
            {cars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <div className="w-full bg-secondary border border-white/[0.04] rounded-2xl py-16 text-center">
            <p className="text-sm text-light/40">
              No vehicles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreCar;
