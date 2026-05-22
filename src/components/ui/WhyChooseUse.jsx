"use client";

import { FiShield, FiClock, FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FiShield className="text-2xl text-gold" />,
      title: "Secure JWT Protection",
      description:
        "Your data and bookings are fully shielded with enterprise-grade JSON Web Token authentication, ensuring absolute security.",
    },
    {
      id: 2,
      icon: <FiClock className="text-2xl text-gold" />,
      title: "Seamless Bookings",
      description:
        "No complicated paperwork. Rent your dream vehicle instantly with our high-performance, frictionless booking engine.",
    },
    {
      id: 3,
      icon: <FiCheckCircle className="text-2xl text-gold" />,
      title: "Verified Luxury Fleet",
      description:
        "Every single vehicle in our ultimate fleet architecture undergoes rigorous multi-point quality and performance checks.",
    },
    {
      id: 4,
      icon: <FiTrendingUp className="text-2xl text-gold" />,
      title: "Transparent Pricing",
      description:
        "No hidden charges, no surprises. Experience effortless luxury with honest, upfront pricing built on pure trust.",
    },
  ];

  return (
    <section className="w-full bg-primary py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Ambient Gradient Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-radial-[circle,rgba(255,189,55,0.015)_0%,transparent_70%] pointer-events-none" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-2 mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10 select-none">
            Why Choose Us
          </span>
          <h2 className="font-app text-3xl sm:text-4xl font-bold tracking-tight text-light uppercase mt-3 leading-tight">
            Why Rent With <br />
            <span className="bg-gradient-to-r from-gold via-[#ffe2a4] to-gold bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,189,55,0.15)]">
              ApexDrive?
            </span>
          </h2>
          <p className="max-w-xl text-sm text-light/60 mt-2 font-normal leading-relaxed">
            Engineered for ultimate performance, absolute comfort, and
            effortless luxury on every single mile.
          </p>
        </div>

        {/* Interactive Feature Architecture Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="premium-card bg-secondary border border-white/[0.04] rounded-2xl p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:border-gold/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] group"
            >
              {/* Animated Icon Ring Shield */}
              <div className="p-3 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center shadow-[0_4px_20px_rgba(255,189,55,0.05)] group-hover:scale-105 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300">
                {feature.icon}
              </div>

              {/* Text Configuration Meta */}
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-light tracking-wide uppercase font-app group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-light/60 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
