import { Bruno_Ace, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const brunoAce = Bruno_Ace({
  variable: "--font-bruno-ace",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "ApexDrive - Rental Car Platform",
  description:
    "ApexDrive - Premium Rental Car Platform featuring a luxury fleet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${brunoAce.variable} bg-[#080807] text-[#FFFDF5] antialiased`}
      >
        <Providers>
          <div className="premium-bg-mesh absolute pointer-events-none" />

          <div>
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
