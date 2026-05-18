import Banner from "@/components/shared/Banner";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
    </div>
    // <div className="min-h-screen font-sans select-none pb-24">
    //   {/* ──────────────────────────────────────────────────────────────
    //      1. HEADER / NAVBAR AREA
    //      ────────────────────────────────────────────────────────────── */}
    //   <Navbar />

    //   {/* ──────────────────────────────────────────────────────────────
    //      2. HERO CORE SECTION
    //      ────────────────────────────────────────────────────────────── */}
    //   <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-20 relative z-40">
    //     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    //       {/* Left Block Content Frame */}
    //       <div className="lg:col-span-7 flex flex-col justify-center">
    //         <h1
    //           className={`font-app text-4xl md:text-5xl lg:text-6xl text-[#FFFDF5] leading-[1.15] tracking-wide uppercase`}
    //         >
    //           Find Your Perfect Vehicle <br />
    //           <span className="text-[#FFBD37]">Fast & Hassle-Free</span>
    //         </h1>

    //         <p className="mt-6 text-gray-400 text-sm md:text-base max-w-xl leading-relaxed tracking-wide font-sans">
    //           A clean, modern marketplace designed for effortless browsing,
    //           verified listings, transparent communication, and fast
    //           transactions, built for buyers and sellers who value clarity and
    //           trust.
    //         </p>

    //         <div className="mt-8 flex items-start">
    //           <button className="bg-[#FFBD37] text-[#080807] font-bold px-6 py-4 rounded flex items-center gap-2 hover:scale-[1.02] transition-all text-xs uppercase tracking-widest shadow-lg shadow-[#FFBD37]/10">
    //             Book Your Vehicle Now
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth={2.5}
    //               stroke="currentColor"
    //               className="w-4 h-4"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>

    //       {/* Right Block Asset Framework Placeholder */}
    //       <div className="lg:col-span-5 relative w-full h-[320px] md:h-[480px] flex items-center justify-center">
    //         {/* Dynamic Ambient Mesh Glow Overlay Behind the Expected Car Object */}
    //         <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-transparent to-transparent z-10 pointer-events-none" />

    //         {/* Structural Box Emulating The Asymmetric Presentation Space */}
    //         <div className="w-full h-5/6 rounded-2xl bg-gradient-to-br from-[#161618] to-transparent border border-white/[0.02] flex flex-col items-center justify-center p-8 text-center border-dashed">
    //           <span className="text-4xl mb-3 animate-bounce">🏎️</span>
    //           <div
    //             className={`font-app text-[10px] text-[#FFBD37] tracking-widest uppercase mb-1`}
    //           >
    //             High-End Asset Container
    //           </div>
    //           <p className="text-xs text-gray-500 max-w-xs font-sans">
    //             Place your transparent car presentation layer here. It will
    //             blend flawlessly with the custom ambient back-glow.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* ──────────────────────────────────────────────────────────────
    //      3. FEATURES GRID SECTION (Image Overview Copy Rule Match)
    //      ────────────────────────────────────────────────────────────── */}
    //   <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 relative z-40">
    //     {/* Section Heading Label */}
    //     <div className="text-center mb-16">
    //       <h2
    //         className={`font-app text-2xl md:text-3xl uppercase tracking-widest text-[#FFFDF5]`}
    //       >
    //         Template <span className="text-[#FFBD37]">Features</span>
    //       </h2>
    //       <div className="w-12 h-[2px] bg-[#FFBD37] mx-auto mt-4 rounded-full"></div>
    //     </div>

    //     {/* Dynamic Matrix Layout Grid Component Mapping */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {features.map((feature) => (
    //         <div
    //           key={feature.id}
    //           className="premium-card p-6 flex flex-col items-start cursor-pointer group"
    //         >
    //           {/* Icon Container with Custom Hover Glow Engine Integration */}
    //           <div className="w-10 h-10 rounded-xl bg-[#FFBD37]/5 flex items-center justify-center text-lg text-[#FFBD37] mb-5 border border-[#FFBD37]/10 group-hover:bg-[#FFBD37] group-hover:text-[#080807] group-hover:scale-110 transition-all duration-300">
    //             {feature.icon}
    //           </div>

    //           {/* Feature Title - Bruno Ace Font */}
    //           <h3
    //             className={`font-app text-xs uppercase text-[#FFFDF5] tracking-wider mb-2 group-hover:text-[#FFBD37] transition-colors`}
    //           >
    //             {feature.title}
    //           </h3>

    //           {/* Feature Description - Smooth Inter Font */}
    //           <p className="text-xs text-gray-400 leading-relaxed font-sans">
    //             {feature.desc}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </section>
    // </div>
  );
}
