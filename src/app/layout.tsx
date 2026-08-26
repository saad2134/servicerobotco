import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Commercial Robotics Integrator | Service Robot Co.™",
  description: "Service Robot Co. selects, finances, deploys, and services commercial robots across all 50 US states. One partner from first robot to ongoing support.",
  openGraph: {
    title: "Commercial Robotics Integrator | Service Robot Co.™",
    description: "Service Robot Co. selects, finances, deploys, and services commercial robots across all 50 US states. One partner from first robot to ongoing support.",
    url: "https://servicerobotco.com",
    siteName: "Service Robot Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
