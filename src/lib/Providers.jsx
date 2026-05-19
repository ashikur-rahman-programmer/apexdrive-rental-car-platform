"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  // মাউন্টেড স্টেট চেকের এই অংশটুকু সম্পূর্ণ ফেলে দিন।
  // এটি ছাড়াই next-themes এখন হাইড্রেশন এরর হ্যান্ডেল করতে পারে।

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark" // Default deep black look thakbe
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
