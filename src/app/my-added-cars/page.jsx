import Link from "next/link";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { FiPlus, FiCalendar, FiDollarSign } from "react-icons/fi";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { ImBlocked } from "react-icons/im";
import AddedCarsCard from "@/components/shared/AddedCarsCard";
// import AddedCarsCard from "@/components/shared/AddedCarsCard";
// import DeleteButton from "./DeleteButton";

const MyAddedCarsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const res = await fetch(`http://localhost:8000/my-cars?email=${user.email}`, {
    cache: "no-store",
  });
  const cars = await res.json();

  return (
    <section className="w-full bg-primary min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 border-b border-white/[0.05] pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10">
              Manager
            </span>
            <h2 className="font-app text-2xl sm:text-3xl font-bold tracking-tight text-light uppercase mt-3">
              My Added{" "}
              <span className="bg-gradient-to-r from-gold via-[#ffe2a4] to-gold bg-clip-text text-transparent">
                Cars
              </span>
            </h2>
            <p className="text-light/40 text-xs mt-1">
              Total fleet size: {cars.length} cars available
            </p>
          </div>

          <Link
            href="/add-car"
            className="bg-gold text-primary font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-[#ffe2a4] transition-all"
          >
            <FiPlus className="text-sm" /> Add New Car
          </Link>
        </div>

        {cars.length === 0 ? (
          <div className="w-full border border-white/[0.04] bg-secondary rounded-3xl p-12 text-center flex flex-col items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/[0.05] text-gold text-xl mb-4">
              <ImBlocked />
            </div>
            <h3 className="text-lg font-bold text-light uppercase tracking-wide">
              No Cars Added Yet
            </h3>
            <p className="text-light/40 text-xs max-w-sm mt-2 mb-6">
              You haven't listed any vehicles for rental yet.
            </p>
            <Link
              href="/add-car"
              className="border border-gold/30 text-gold font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-xl hover:bg-gold hover:text-primary transition-all"
            >
              List a Car
            </Link>
          </div>
        ) : (
          <AddedCarsCard cars={cars} />
        )}
      </div>
    </section>
  );
};

export default MyAddedCarsPage;
