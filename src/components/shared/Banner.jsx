"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden px-4 py-8 md:py-12">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 w-full">
        {/* Left Content Column */}
        <div className="flex flex-col items-start gap-4 sm:gap-5 text-left w-full max-w-2xl justify-self-start">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-gold flex items-center gap-2 bg-gold/5 px-3 py-1.5 rounded-full border border-gold/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            THE ULTIMATE FLEET ARCHITECTURE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-app text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-light uppercase flex flex-col"
          >
            <span>DRIVE THE ELITE</span>
            <span className="bg-gradient-to-r from-gold via-[#ffe2a4] to-gold bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,189,55,0.15)]">
              EXPERIENCE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-light/70 font-normal leading-relaxed tracking-wide"
          >
            Engineered for ultimate performance, absolute comfort, and
            effortless luxury. Access a world-class fleet with secure JWT
            protection, seamless bookings, and a high-performance system
            designed for the modern road.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="pt-2 w-full sm:w-auto"
          >
            <Link href="/explore-car" className="w-full sm:w-auto">
              <motion.button
                whileTap={{ scale: 0.96 }}
                className="group relative flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/5 bg-secondary px-6 py-3.5 font-app text-xs font-semibold uppercase tracking-widest text-gold transition-all duration-500 hover:scale-[1.03] hover:bg-gold hover:text-primary"
              >
                Explore Car
                <FiArrowUpRight className="text-sm transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="flex justify-center lg:justify-end relative items-center group w-full mb-4 lg:mb-0"
        >
          <div className="relative z-10 w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[650px]">
            <Image
              src="/assets/banner.png"
              alt="ApexDrive Luxury Fleet"
              width={750}
              height={500}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
