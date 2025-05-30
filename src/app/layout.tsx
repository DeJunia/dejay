import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Chango } from "next/font/google";
import "./globals.css";
import { Header, Sidebar, Footer, MbHeader } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',      
  display: 'swap',
})

const chango = Chango({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-chango',
})

export const metadata: Metadata = {
  title: "Dejay Driving School",
  description: "The best driving school in Ghana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${chango.variable} antialiased text-gray-800`}
      >
        <Header />
        <MbHeader />
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
