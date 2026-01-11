import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Chango } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/Layout/mainLayout";
import { AuthProvider } from "@/context/AuthContext";
import Providers from "@/lib/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const chango = Chango({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chango",
});

import { Toaster as Sonner } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://dejaydrivingsch.vercel.app"),
  title: "Dejay Driving School",
  description:
    "Start your driving journey today. Professional instructors, modern vehicles, and personalized lessons to help you become a confident driver.",
  keywords:
    "dejay driving school, driving school, school, dejay, Ghana, Ghana driving school, Ghana school, best driving school in Ghana, driving school in Ghana ",
  openGraph: {
    title: "Dejay Driving School",
    description:
      "Start your driving journey today. Professional instructors, modern vehicles, and personalized lessons to help you become a confident driver.",
    url: "https://dejaydrivingsch.vercel.app",
    siteName: "Dejay",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "../assets/logo/logo.jpg",
        width: 500,
        height: 500,
        alt: "Dejay Driving School",
      },
      {
        url: "../../public/img.jpg",
        width: 500,
        height: 500,
        alt: "Dejay Driving School",
      },
      {
        url: "/img.jpg",
        width: 500,
        height: 500,
        alt: "Dejay Driving School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@veagy_studio",
    title: "Dejay Driving School",
    description:
      "Start your driving journey today. Professional instructors, modern vehicles, and personalized lessons to help you become a confident driver.",
    images: ["../assets/logo/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="y55MTSoIa-KHUFqwzzB2jiYH7lkAR50cMWoIiennuTY"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${chango.variable} antialiased text-gray-800 font-inter`}
      >
        <Providers>
          <Sonner />
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
