"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import ThemeToggle from "../ui/ThemeToggle";
import { FiArrowUpRight } from "react-icons/fi";
import { useSession } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = useSession();
  const user = session?.user;

  console.log(user);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-b-gray-700 bg-background/70 backdrop-blur-lg">
      <header className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href={"/"}>
          <div
            className={`font-app text-xl md:text-3xl font-bold tracking-wider color-primary cursor-pointer`}
          >
            Apex<span className="text-[#FFBD37]">Drive</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/explore-car">Explore Car</NavLink>
          </li>
          <li>
            <NavLink href="/add-car">Add Car</NavLink>
          </li>
          <li>
            <NavLink href="/my-bookings">My Bookings</NavLink>
          </li>
        </ul>

        {/* Desktop Right Side (Login + Theme Toggle) */}
        <ul className="hidden items-center gap-5 md:flex">
          <li>
            <ThemeToggle />
          </li>
          <li className="text-light hover:text-gold transition">
            <Link href="/login">
              <button className="group relative flex cursor-pointer items-center gap-1.5 rounded-md border border-white/5 bg-secondary px-4 py-2.5 font-app text-xs font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold hover:text-primary active:scale-95">
                Login
                <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Link>
          </li>
        </ul>

        {/* 📱 Mobile Controls Container (Toggle Button + Hamburger Side by Side) */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile-এ সরাসরি হেডারে থিম চেঞ্জ করার বাটন */}
          <ThemeToggle />

          {/* Mobile Menu Open/Close Button */}
          <button
            className="text-yellow-400 hover:text-yellow-300 transition cursor-pointer p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col gap-3 p-4">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/explore-car">Explore Car</NavLink>
            </li>
            <li>
              <NavLink href="/add-car">Add Car</NavLink>
            </li>
            <li>
              <NavLink href="/my-bookings">My Bookings</NavLink>
            </li>

            {/* Mobile Dropdown Bottom (Only Login Link as Toggle is now outside) */}

            <li className="text-light hover:text-gold transition pt-2 border-t border-white/[0.05]">
              <Link href="/login">
                <button className="group relative flex cursor-pointer items-center gap-1.5 rounded-md border border-white/5 bg-secondary px-4 py-2.5 font-app text-xs font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold hover:text-primary active:scale-95">
                  Login
                  <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
