import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegacyBehavior from "@/components/layout/LegacyBehavior";
import CookieConsent from "@/components/layout/CookieConsent";

export const metadata = {
  title: "DGL IT Services | Strategic Innovation & Technology",
  description: "DGL IT Services",
};

export default function RootLayout({ children }) {
  return (
    <html className="light" lang="en">
      <body className="bg-background text-on-surface font-body-md overflow-x-hidden">
        <Header />
        {children}
        <Footer />
        <LegacyBehavior />
        <CookieConsent />
      </body>
    </html>
  );
}
