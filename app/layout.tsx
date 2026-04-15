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

const SITE_URL = "https://microballoons.com";
const DEFAULT_PREVIEW_IMAGE = "/logo-whitebk.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Microballoons.com — Premium Silane-Coated Glass Microspheres",
    template: "%s | Microballoons.com",
  },
  description:
    "Premium silane-coated glass microballoons for resin baits, model building, and lightweight filler mixes. Stronger bonding, easier sanding, flawless finish.",
  keywords: [
    "microballoons",
    "glass microspheres",
    "silane-coated microballoons",
    "resin filler",
    "micro balloons",
    "lightweight filler",
    "epoxy microballoons",
    "bait making supplies",
  ],
  openGraph: {
    siteName: "Microballoons.com",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    images: [
      {
        url: DEFAULT_PREVIEW_IMAGE,
        alt: "Microballoons.com — Premium Silane-Coated Glass Microspheres",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_PREVIEW_IMAGE],
  },
  icons: {
    icon: "/logo.webp",
  },
  alternates: {
    canonical: SITE_URL,
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
