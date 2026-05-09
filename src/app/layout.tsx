import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import CompareBar from "@/components/CompareBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Zantara AI | Dari Ide Ke Penghasilan",
  description: "Platform direktori AI premium untuk membantu Anda mewujudkan ide menjadi penghasilan nyata.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} bg-[#030712] text-[#f8fafc] antialiased`}>
        <AppProvider>
          <CustomCursor />
          <Navbar />
          <main>
            {children}
          </main>
          <CompareBar />
        </AppProvider>
      </body>
    </html>
  );
}
