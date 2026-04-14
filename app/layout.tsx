import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Microballoon Mix Converter",
  description:
    "Convert legacy microballoon resin formulas into the updated mix instantly with this calculator.",
  keywords: [
    "microballoon converter",
    "resin mix calculator",
    "epoxy microballoons",
    "mix ratio tool",
    "density calculator",
  ],
  openGraph: {
    title: "Microballoon Mix Converter",
    description:
      "Quickly translate old microballoon resin recipes into the new formulation with precise ratios.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Microballoon Mix Converter",
    description:
      "Instantly update microballoon resin mixes with this conversion calculator.",
  },
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
