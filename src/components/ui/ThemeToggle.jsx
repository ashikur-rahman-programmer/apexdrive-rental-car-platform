"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 👑 Exact hydration and script tags engine injection tracking block
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center cursor-pointer relative overflow-hidden group shadow-sm bg-secondary text-gold border-white/5"
      aria-label="Toggle Website Theme"
    >
      <span className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none bg-gradient-to-tr from-gold to-transparent mix-blend-overlay" />

      <div className="relative z-10 text-lg transition-transform duration-500 group-hover:rotate-[15deg]">
        {isDark ? (
          <FiSun className="w-[18px] h-[18px] text-gold animate-[spin_30s_linear_infinite]" />
        ) : (
          <FiMoon className="w-[18px] h-[18px] text-gold" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
