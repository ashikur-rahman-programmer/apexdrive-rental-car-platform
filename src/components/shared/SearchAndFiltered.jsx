"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";

const SearchAndFiltered = ({ searchQuery, selectedType }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (searchValue) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", searchValue);
    router.push(`?${params.toString()}`);
  };

  const handleTypeFilter = (type) => {
    const params = new URLSearchParams(searchParams);
    params.set("type", type);
    router.push(`?${params.toString()}`);
  };

  const carTypes = ["All", "SUV", "Sedan", "Luxury", "Electric", "Sport"];

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-secondary border border-white/[0.04] p-4 rounded-2xl mb-10 w-full">
      <form
        method="GET"
        className="relative w-full md:max-w-xs flex items-center"
      >
        <FiSearch className="absolute left-4 text-light/30 text-base pointer-events-none" />
        <input
          type="text"
          name="search"
          defaultValue={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by car name..."
          className="w-full bg-primary border border-white/[0.06] rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
        />

        {selectedType !== "All" && (
          <input type="hidden" name="type" value={selectedType} />
        )}
      </form>

      <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none snap-x">
        {carTypes.map((type) => {
          return (
            <button
              key={type}
              type="button"
              onClick={() => handleTypeFilter(type)}
              className={`px-4 py-2.5 rounded-xl text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap snap-shrink-0 border ${
                selectedType === type
                  ? "bg-gold text-primary border-gold font-semibold shadow-[0_0_20px_rgba(255,189,55,0.15)]"
                  : "bg-primary text-light/50 border-white/[0.04] hover:text-light hover:border-white/10"
              }`}
            >
              {type}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SearchAndFiltered;
