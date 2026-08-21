import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import { Hanken_Grotesk, Inter } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-hanken-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "DGL IT Services | Strategic Innovation & Technology",
  description: "DGL IT Services",
};

export default function RootLayout({ children }) {
  return (
    <html className={`light ${hankenGrotesk.variable} ${inter.variable}`} lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/material-symbols-outlined-subset.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md overflow-x-hidden">
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
