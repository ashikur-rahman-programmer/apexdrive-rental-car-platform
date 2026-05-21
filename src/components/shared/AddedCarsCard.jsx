"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiCalendar,
  FiDollarSign,
  FiMapPin,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import UpdateCarModal from "./UpdateCarModal";
import DeleteAlert from "./DeleteAlert";

export default function AddedCarsCard({ cars }) {
  const router = useRouter();

  // 🗑️ গাড়ি ডিলিট করার ফাংশন (উইথ কনফার্মেশন)
  // const handleDelete = async (carId) => {
  //   const confirmDelete = window.confirm(
  //     "Are you sure you want to delete this car listing?",
  //   );
  //   if (!confirmDelete) return;

  //   const res = await fetch(`http://127.0.0.1:5000/cars/${carId}`, {
  //     method: "DELETE",
  //   });
  //   const data = await res.json();

  //   if (data.deletedCount > 0) {
  //     toast.success("Car listing deleted successfully!");
  //     router.refresh(); // সার্ভার কম্পোনেন্টের ডাটা রিফ্রেশ করবে
  //   } else {
  //     toast.error("Failed to delete the car.");
  //   }
  // };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <div
          key={car._id}
          className="group border border-white/[0.05] bg-secondary rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-gold/20 transition-all duration-300 flex flex-col"
        >
          {/* কার ইমেজ ও টাইপ ট্যাগ */}
          <div className="relative h-48 w-full overflow-hidden bg-primary">
            <Image
              src={
                car.image ||
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500"
              }
              alt={car.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-3 right-3 bg-primary/80 backdrop-blur-md border border-white/[0.08] text-gold font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md">
              {car.carType || "Luxury"}
            </span>
            <span
              className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                car.availability === "Available" || car.availability === true
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "bg-red-500/10 text-red-400 border border-red-500/20"
              }`}
            >
              {car.availability === "Available" || car.availability === true
                ? "Available"
                : "Booked"}
            </span>
          </div>

          {/* কার ডিটেইলস বডি */}
          <div className="p-5 flex flex-col flex-grow">
            <div className="flex justify-between items-start gap-2 mb-2">
              <h3 className="uppercase text-lg font-bold text-light tracking-wide group-hover:text-gold transition-colors">
                {car.name}
              </h3>
              <div className="flex items-center text-gold font-mono font-bold text-lg">
                <FiDollarSign className="text-sm shrink-0" />
                {car.dailyRentPrice}
                <span className="text-[10px] text-light/40 font-sans font-normal lowercase ml-0.5">
                  /day
                </span>
              </div>
            </div>

            {/* ডেসক্রিপশন */}
            <p className="text-light/50 text-xs line-clamp-2 mb-4 flex-grow">
              {car.description ||
                "No description provided for this premium vehicle."}
            </p>

            {/* লোকেশন এবং ডেট ইনফো */}
            <div className="space-y-2 border-t border-white/[0.04] pt-4 mb-5">
              <div className="flex items-center gap-2 text-light/40 text-xs">
                <FiMapPin className="text-gold text-sm shrink-0" />
                <span>{car.location || "Not Specified"}</span>
              </div>
              <div className="flex items-center gap-2 text-light/40 text-xs">
                <FiCalendar className="text-gold/60 text-sm shrink-0" />
                <span>
                  Added:{" "}
                  {car.createdAt
                    ? new Date(car.createdAt).toLocaleDateString()
                    : "Recent"}
                </span>
              </div>
            </div>

            {/* অ্যাকশন বাটনসমূহ (Update & Delete) */}
            <div className="flex items-center gap-3 mt-auto">
              {/* আপডেট রুট */}
              <UpdateCarModal car={car} />

              {/* ডিলিট বাটন */}
              <DeleteAlert carId={car._id} carName={car.name} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
