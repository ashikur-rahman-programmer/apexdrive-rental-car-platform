"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  // Hydration sync check logic (Server component clash skip trigger)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark" // Defaut deep black look thakbe
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
