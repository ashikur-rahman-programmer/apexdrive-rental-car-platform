"use client";

import { FiSearch, FiCalendar, FiKey } from "react-icons/fi";

const HowItWorks = () => {
  // ─── STEP PROCESS MATRIX ───
  const steps = [
    {
      id: "01",
      icon: <FiSearch className="text-xl text-gold" />,
      title: "Browse & Select",
      description:
        "Explore our ultra-premium fleet architecture. Filter by category, speed, or lifestyle to find your perfect vehicle mismatch.",
    },
    {
      id: "02",
      icon: <FiCalendar className="text-xl text-gold" />,
      title: "Instant Validation",
      description:
        "Pick your preferred schedule. Our high-performance booking engine handles secure JWT validation for instant confirmation.",
    },
    {
      id: "03",
      icon: <FiKey className="text-xl text-gold" />,
      title: "Hit The Road",
      description:
        "Receive your premium access codes or keys. Step into absolute comfort and experience luxury engineered for the modern road.",
    },
  ];

  return (
    <section className="w-full bg-primary py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Subtle Linear Mesh or Radial Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-radial-[circle,rgba(255,189,55,0.01)_0%,transparent_65%] pointer-events-none" />

      <div className=" relative z-10">
        {/* ─── SECTION HEADER ─── */}
        <div className="text-center flex flex-col items-center gap-2 mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 select-none">
            Process Engine
          </span>
          <h2 className="font-app text-3xl sm:text-4xl font-bold tracking-tight text-light uppercase mt-3 leading-tight">
            How It{" "}
            <span className="bg-gradient-to-r from-gold via-[#ffe2a4] to-gold bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,189,55,0.15)]">
              Works?
            </span>
          </h2>
          <p className="max-w-xl text-sm text-light/60 mt-2 font-normal leading-relaxed">
            Three simple architecture steps to transition you from browsing to
            your premium driving experience.
          </p>
        </div>

        {/* ─── STEPS GRID SYSTEM WITH CONNECTORS ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center group"
            >
              {/* ─── DESKTOP CONNECTING LINES (Hidden on Mobile) ─── */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[1px] border-t border-dashed border-white/[0.08] group-hover:border-gold/20 transition-colors duration-500 z-0" />
              )}

              {/* Step Number Top Float */}
              <span className="absolute -top-12 text-5xl font-extrabold text-white/[0.02] tracking-wider select-none font-app group-hover:text-gold/[0.04] transition-colors duration-500">
                {step.id}
              </span>

              {/* Icon Node Container */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-secondary border border-white/[0.04] flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)] group-hover:border-gold/30 group-hover:shadow-[0_0_25px_rgba(255,189,55,0.1)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {/* Outer pulsing thin ring on hover */}
                <div className="absolute inset-0 rounded-2xl border border-gold/0 group-hover:scale-110 group-hover:border-gold/10 transition-all duration-500" />
                {step.icon}
              </div>

              {/* Title & Description Info */}
              <div className="space-y-2 max-w-xs relative z-10">
                <h3 className="text-base font-semibold text-light uppercase tracking-wide font-app">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-light/50 font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
