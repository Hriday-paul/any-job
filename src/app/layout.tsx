import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import NextJsTopLoader from "@/components/Shared/NextJsTopLoader";

const Figtree = localFont({
  src: "../font/Figtree-Regular.ttf",
  variable: "--font-figtree",
  weight: "100 400 900",
});

export const metadata: Metadata = {
  title: "Any Job",
  description: "Find skilled people, professionals and contractors effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Figtree.variable} antialiased`}
      >
        <NextJsTopLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
