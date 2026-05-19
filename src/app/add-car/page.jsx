"use client";
import {
  FiCheckCircle,
  FiDollarSign,
  FiFileText,
  FiGrid,
  FiImage,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";

const AddCar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="w-full bg-primary py-16 px-4 sm:px-6 relative overflow-hidden flex justify-center items-center">
      <div className="w-full max-w-3xl bg-secondary border border-white/[0.04] p-6 sm:p-10 rounded-3xl relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="text-center flex flex-col items-center gap-2 mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 select-none">
            Management
          </span>
          <h2 className="font-app text-2xl sm:text-3xl font-bold tracking-tight text-light uppercase mt-2">
            Add New{" "}
            <span className="bg-gradient-to-r from-gold via-[#ffe2a4] to-gold bg-clip-text text-transparent">
              Car Listing
            </span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2">
                {/* <FiCar className="text-gold" /> */}
                Car Name
              </label>
              <input
                type="text"
                name="name"
                required
                // value={formData.name}
                // onChange={handleChange}
                placeholder="e.g. Rolls-Royce Phantom"
                className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2">
                <FiDollarSign className="text-gold" /> Daily Rent Price ($)
              </label>
              <input
                type="number"
                name="dailyRentPrice"
                required
                // value={formData.dailyRentPrice}
                // onChange={handleChange}
                placeholder="e.g. 500"
                className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2">
                <FiGrid className="text-gold" /> Car Type
              </label>
              <select
                name="carType"
                // value={formData.carType}
                // onChange={handleChange}
                className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light focus:outline-none focus:border-gold/30 transition-colors duration-300 cursor-pointer"
              >
                <option value="SUV" className="bg-secondary text-light">
                  SUV
                </option>
                <option value="Sedan" className="bg-secondary text-light">
                  Sedan
                </option>
                <option value="Luxury" className="bg-secondary text-light">
                  Luxury
                </option>
                <option value="Electric" className="bg-secondary text-light">
                  Electric
                </option>
                <option value="Sport" className="bg-secondary text-light">
                  Sport
                </option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2">
                <FiUsers className="text-gold" /> Seat Capacity
              </label>
              <input
                type="number"
                name="seatCapacity"
                required
                // value={formData.seatCapacity}
                // onChange={handleChange}
                placeholder="e.g. 5"
                className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2">
              <FiImage className="text-gold" /> Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              required
              // value={formData.imageUrl}
              // onChange={handleChange}
              placeholder="https://i.postimg.cc/... or https://i.ibb.co/..."
              className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2">
              <FiMapPin className="text-gold" /> Pickup Location
            </label>
            <input
              type="text"
              name="location"
              required
              // value={formData.location}
              // onChange={handleChange}
              placeholder="e.g. Gulshan, Dhaka"
              className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2">
              <FiFileText className="text-gold" /> Description
            </label>
            <textarea
              name="description"
              required
              rows={4}
              // value={formData.description}
              // onChange={handleChange}
              placeholder="Write premium descriptions about vehicle condition, features, etc..."
              className="w-full bg-primary border border-white/[0.06] rounded-xl p-4 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300 resize-none"
            />
          </div>

          <div className="flex items-center gap-3 bg-primary/40 border border-white/[0.03] p-4 rounded-xl w-fit">
            <input
              type="checkbox"
              id="availability"
              name="availability"
              // checked={formData.availability}
              // onChange={handleChange}
              className="w-4 h-4 rounded border-white/[0.06] bg-primary text-gold focus:ring-0 focus:ring-offset-0 cursor-pointer accent-gold"
            />
            <label
              htmlFor="availability"
              className="text-xs font-semibold uppercase tracking-wider text-light/70 cursor-pointer select-none flex items-center gap-2"
            >
              {/* <FiCheckCircle
                className={
                  formData.availability ? "text-gold" : "text-light/30"
                }
              />{" "} */}
              Available for Rent
            </label>
          </div>

          <div className="pt-4 border-t border-white/[0.03]">
            <button
              type="submit"
              // disabled={loading}
              className="w-full sm:w-auto min-w-[160px] bg-gold text-primary font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-[#ffe2a4] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(255,189,55,0.15)]"
            >
              {/* {loading ? "Submitting..." : "Submit Listing"} */}
              hey
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddCar;
