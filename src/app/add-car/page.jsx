"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const AddCar = () => {
  const router = useRouter();
  // const [loading, setLoading] = useState();

  const { data: session } = useSession();
  const user = session?.user;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const formattedData = {
      ...data,
      email: user?.email,
      dailyRentPrice: Number(data.dailyRentPrice),
      seatCapacity: Number(data.seatCapacity),
      availability: formData.get("availability") === "on",
    };

    const res = await fetch("http://localhost:8000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });

    if (res.ok) {
      toast.success("Car added successfully!");
      e.target.reset();
      router.refresh();
      router.push("/my-added-cars");
    }

    if (!res.ok) {
      toast.error("Something went wrong!");
    }

    const result = await res.json();
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
                Car Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Car Name"
                className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2">
                Daily Rent Price ($)
              </label>
              <input
                type="number"
                name="dailyRentPrice"
                required
                placeholder="Enter Price"
                className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2">
                Car Type
              </label>
              <select
                name="carType"
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
                Seat Capacity
              </label>
              <input
                type="number"
                name="seatCapacity"
                required
                placeholder="Seat no..."
                className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2">
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              required
              placeholder="Enter car image url"
              className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2">
              Pickup Location
            </label>
            <input
              type="text"
              name="location"
              required
              placeholder="Enter location"
              className="w-full bg-primary border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium tracking-wider text-light/50 uppercase flex items-center gap-2">
              Description
            </label>
            <textarea
              name="description"
              required
              rows={4}
              placeholder="Write premium descriptions about vehicle condition, features, etc..."
              className="w-full bg-primary border border-white/[0.06] rounded-xl p-4 text-sm text-light placeholder-light/20 focus:outline-none focus:border-gold/30 transition-colors duration-300 resize-none"
            />
          </div>

          <div className="flex items-center gap-3 bg-primary/40 border border-white/[0.03] p-4 rounded-xl w-fit">
            <input
              type="checkbox"
              id="availability"
              name="availability"
              className="w-4 h-4 rounded border-white/[0.06] bg-primary text-gold focus:ring-0 focus:ring-offset-0 cursor-pointer accent-gold"
            />
            <label
              htmlFor="availability"
              className="text-xs font-semibold uppercase tracking-wider text-light/70 cursor-pointer select-none flex items-center gap-2"
            >
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddCar;
