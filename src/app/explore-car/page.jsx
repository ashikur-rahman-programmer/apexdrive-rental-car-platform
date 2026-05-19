import CarCard from "@/components/ui/CarCard";
import { FiSearch } from "react-icons/fi";

const ExploreCar = async () => {
  const res = await fetch("http://localhost:8000/cars");
  const cars = await res.json();

  return (
    <section className="w-full bg-primary py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="relative z-10">
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
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-secondary border border-white/[0.04] p-4 rounded-2xl mb-10 w-full">
          {/* Search Input Box */}
          <div className="relative w-full md:max-w-xs flex items-center">
            <FiSearch className="absolute left-4 text-light/30 text-base pointer-events-none" />
            <input
              type="text"
              placeholder="Search by model or location..."
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-primary border border-white/[0.06] rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
            />
          </div>

          {/* Category Filter Pills (Horizontal Scrollable on Mobile)
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none snap-x">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap snap-shrink-0 border ${
                  selectedCategory === category
                    ? "bg-gold text-primary border-gold font-semibold shadow-[0_0_20px_rgba(255,189,55,0.15)]"
                    : "bg-primary text-light/50 border-white/[0.04] hover:text-light hover:border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div> */}
        </div>

        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCar;
