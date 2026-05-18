"use client";

import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiInstagram,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ─── SOCIAL LINKS MATRIX ───
  const socials = [
    {
      id: 1,
      icon: <FiTwitter />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      id: 2,
      icon: <FiLinkedin />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    { id: 3, icon: <FiGithub />, href: "https://github.com", label: "GitHub" },
    {
      id: 4,
      icon: <FiInstagram />,
      href: "https://instagram.com",
      label: "Instagram",
    },
  ];

  // ─── USEFUL LINKS MATRIX ───
  const usefulLinks = [
    { id: 1, name: "Explore Fleet", href: "/explore-car" },
    { id: 2, name: "Available Cars", href: "/available-cars" },
    { id: 3, name: "How It Works", href: "#how-it-works" },
    { id: 4, name: "Why Choose Us", href: "#why-choose-us" },
    { id: 5, name: "Contact HQ", href: "#contact" },
  ];

  // ─── COMPLIANCE LINKS MATRIX ───
  const complianceLinks = [
    { id: 1, name: "Privacy Policy", href: "/privacy" },
    { id: 2, name: "Terms of Service", href: "/terms" },
    { id: 3, name: "Rental Agreement", href: "/agreement" },
  ];

  return (
    <footer className="w-full bg-secondary border-t border-white/[0.03] pt-16 pb-8 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle Background Accent Ring */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-radial-[circle,rgba(255,189,55,0.01)_0%,transparent_70%] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* ─── TOP SECTION: GRID MATRIX ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/[0.03]">
          {/* 🏢 COL 1: BRAND ARCHITECTURE (5-Cols) */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <span className="font-app text-xl font-bold tracking-[0.2em] text-light">
                APEX<span className="text-gold">DRIVE</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-light/50 font-normal leading-relaxed max-w-sm">
              Engineered for ultimate performance, absolute comfort, and
              effortless luxury. Access a world-class fleet with secure
              validation systems designed for the modern road.
            </p>

            {/* SOCIAL ICONS ENGINE */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-primary border border-white/[0.04] flex items-center justify-center text-light/60 text-sm transition-all duration-300 hover:border-gold/30 hover:text-gold hover:scale-105"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 🔗 COL 2: USEFUL LINKS (3-Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-app text-xs uppercase tracking-widest text-light font-bold">
              Useful Links
            </h3>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-light/50 font-normal transition-colors duration-300 hover:text-gold flex items-center gap-1 group"
                  >
                    <span className="w-0 h-[1px] bg-gold group-hover:w-2 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 📍 COL 3: CONTACT INFORMATION (4-Cols) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-app text-xs uppercase tracking-widest text-light font-bold">
              Contact Info
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-light/50">
                <FiMapPin className="text-gold text-base mt-0.5 flex-shrink-0" />
                <span>Gulshan, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm text-light/50">
                <FiPhone className="text-gold text-base flex-shrink-0" />
                <a
                  href="tel:+8801700000000"
                  className="hover:text-gold transition-colors duration-300"
                >
                  +880 1700-000000
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm text-light/50">
                <FiMail className="text-gold text-base flex-shrink-0" />
                <a
                  href="mailto:support@apexdrive.com"
                  className="hover:text-gold transition-colors duration-300"
                >
                  support@apexdrive.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── BOTTOM SECTION: SUB-FOOTER (Copyright & Compliance) ─── */}
        <div className="pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-light/30 font-normal">
          <div>
            &copy; {currentYear}{" "}
            <span className="text-light/40 font-medium font-app tracking-wider">
              APEXDRIVE
            </span>
            . All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {complianceLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="hover:text-gold transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
