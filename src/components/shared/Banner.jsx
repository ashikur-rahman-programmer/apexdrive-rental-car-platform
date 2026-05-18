"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Banner = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden px-4 py-8 md:py-12">
      <div className=" flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 w-full ">
        {/* ─── LEFT COLUMN: TEXT CONTENT ─── */}
        <div className="flex flex-col items-start gap-4 sm:gap-5 text-left w-full max-w-2xl justify-self-start">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-gold flex items-center gap-2 bg-gold/5 px-3 py-1.5 rounded-full border border-gold/10">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            THE ULTIMATE FLEET ARCHITECTURE
          </span>

          {/* Strict 2-Line Headline Structure */}
          <h1 className="font-app text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-light uppercase flex flex-col">
            <span>DRIVE THE ELITE</span>
            <span className="bg-gradient-to-r from-gold via-[#ffe2a4] to-gold bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,189,55,0.15)]">
              EXPERIENCE
            </span>
          </h1>

          <p className="text-sm sm:text-base text-light/70 font-normal leading-relaxed tracking-wide">
            Engineered for ultimate performance, absolute comfort, and
            effortless luxury. Access a world-class fleet with secure JWT
            protection, seamless bookings, and a high-performance system
            designed for the modern road.
          </p>

          <div className="pt-2 w-full sm:w-auto">
            <Link href="/explore-car" className="w-full sm:w-auto">
              <button className="group relative flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/5 bg-secondary px-6 py-3.5 font-app text-xs font-semibold uppercase tracking-widest text-gold transition-all duration-500 hover:scale-[1.03] hover:bg-gold hover:text-primary active:scale-95 ">
                Explore Car
                <FiArrowUpRight className="text-sm transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: CAR IMAGE ─── */}
        <div className="flex justify-center lg:justify-end relative items-center group w-full mb-4 lg:mb-0">
          <div className="relative z-10 w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[650px]">
            <Image
              src="/assets/banner.png"
              alt="ApexDrive Luxury Fleet"
              width={750}
              height={500}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
