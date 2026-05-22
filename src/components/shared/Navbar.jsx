"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import ThemeToggle from "../ui/ThemeToggle";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCheckSquare,
  FiLogOut,
  FiPlusCircle,
} from "react-icons/fi";
import { authClient, useSession } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import Image from "next/image";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data: session, isPending } = useSession();

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    setIsMenuOpen(false);
    window.location.href = "/login";
    toast.success("Logout successfully! please login again.");
  };

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
        <ul className="hidden items-center gap-5 md:flex suppressHydrationWarning={true}">
          <li>
            <ThemeToggle />
          </li>

          {isPending ? (
            <Spinner color="warning" />
          ) : user ? (
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center focus:outline-none cursor-pointer"
              >
                <Image
                  src={
                    user.image ||
                    `https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png`
                  }
                  alt={user.name}
                  width={60}
                  height={60}
                  className="h-10 w-10 rounded-full border border-gold/40 object-cover p-[2px] transition hover:border-gold"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-52 origin-top-right rounded-2xl border border-white/[0.06] bg-secondary p-2 shadow-2xl backdrop-blur-xl z-50">
                  <div className="px-3 py-1.5 border-b border-white/[0.04] mb-1">
                    <p className="text-xs font-semibold text-light truncate">
                      {user.name}
                    </p>
                  </div>

                  <ul className="space-y-0.5">
                    <li>
                      <Link
                        href="/add-car"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-light/70 hover:text-gold hover:bg-white/[0.02] rounded-xl transition-all"
                      >
                        <FiPlusCircle className="text-gold" /> Add Car
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/my-bookings"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-light/70 hover:text-gold hover:bg-white/[0.02] rounded-xl transition-all"
                      >
                        <FiCheckSquare className="text-gold" /> My Bookings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/my-added-cars"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-light/70 hover:text-gold hover:bg-white/[0.02] rounded-xl transition-all"
                      >
                        <FiBriefcase className="text-gold" /> My Added Cars
                      </Link>
                    </li>
                    <li className="pt-1 border-t border-white/[0.04] mt-1">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-red-400 hover:bg-red-500/5 rounded-xl transition-all cursor-pointer"
                      >
                        <FiLogOut /> Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <li className="text-light hover:text-gold transition">
              <Link href="/login">
                <button className="group relative flex cursor-pointer items-center gap-1.5 rounded-md border border-white/5 bg-secondary px-4 py-2.5 font-app text-xs font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold hover:text-primary active:scale-95">
                  Login
                  <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </Link>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

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
              <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/explore-car" onClick={() => setIsMenuOpen(false)}>
                Explore Car
              </NavLink>
            </li>
            <li>
              <NavLink href="/add-car" onClick={() => setIsMenuOpen(false)}>
                Add Car
              </NavLink>
            </li>
            <li>
              <NavLink href="/my-bookings" onClick={() => setIsMenuOpen(false)}>
                My Bookings
              </NavLink>
            </li>

            {isPending ? (
              <Spinner color="success" />
            ) : user ? (
              <>
                <li className="pt-2 border-t border-white/[0.05]">
                  <NavLink
                    href="/my-added-cars"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Added Cars
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 rounded-md bg-red-500/10 px-4 py-2.5 font-app text-xs font-semibold uppercase tracking-widest text-red-400 transition cursor-pointer"
                  >
                    <FiLogOut /> Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="text-light hover:text-gold transition pt-2 border-t border-white/[0.05]">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <button className="group relative flex cursor-pointer items-center gap-1.5 rounded-md border border-white/5 bg-secondary px-4 py-2.5 font-app text-xs font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold hover:text-primary active:scale-95">
                    Login
                    <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
