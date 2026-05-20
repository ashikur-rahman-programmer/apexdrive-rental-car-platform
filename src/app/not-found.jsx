"use client";

import Link from "next/link";
import { FiHome, FiArrowRight } from "react-icons/fi";

const NotFound = () => {
  return (
    <section className="w-full bg-primary min-h-[calc(100vh-64px)] flex justify-center items-center px-4 sm:px-6 relative overflow-hidden">
      {/* 🌌 ব্যাকগ্রাউন্ড লাক্সারি গ্লো ইফেক্ট */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gold/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="w-full max-w-lg bg-secondary border border-white/[0.04] p-8 sm:p-12 rounded-3xl relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-center flex flex-col items-center backdrop-blur-md">
        {/* 👑 টপ ব্যাজ */}
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 select-none">
          Error Code: 404
        </span>

        {/* დიდი 404 টাইটেল */}
        <h1 className="font-app text-7xl sm:text-9xl font-extrabold tracking-tighter mt-6 select-none bg-gradient-to-b from-light via-light/80 to-transparent bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="font-app text-xl sm:text-2xl font-bold tracking-tight text-light uppercase mt-2">
          Lost In{" "}
          <span className="bg-gradient-to-r from-gold via-[#ffe2a4] to-gold bg-clip-text text-transparent">
            The Drift?
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-light/50 max-w-xs sm:max-w-sm mt-4 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* 🔗 অ্যাকশন বাটন গ্রুপ */}
        <div className="w-full flex items-center justify-center gap-4 mt-10">
          <Link href="/" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:bg-[#ffe2a4] active:scale-95 shadow-[0_4px_20px_rgba(255,189,55,0.15)]">
              <FiHome className="text-sm" /> Back To Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
