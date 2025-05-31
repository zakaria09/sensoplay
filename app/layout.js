import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sensoplay",
  keywords: [
    "Sensoplay",
    "toys for non-verbal individuals",
    "inclusive toys",
    "autism-friendly toys",
    "sensory toys",
    "non-verbal communication",
  ],
  authors: [{ name: "Sensoplay Team" }],
  creator: "Sensoplay",
  publisher: "Sensoplay",
  openGraph: {
    title: "Sensoplay - Toys for Non-Verbal Individuals",
    description:
      "Sensoplay creates innovative, engaging, and inclusive toys for non-verbal individuals, helping them express themselves in fun and meaningful ways.",
    url: "https://sensoplay.com",
    siteName: "Sensoplay",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sensoplay - Toys for Non-Verbal Individuals",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensoplay - Toys for Non-Verbal Individuals",
    description:
      "Sensoplay creates innovative, engaging, and inclusive toys for non-verbal individuals, helping them express themselves in fun and meaningful ways.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <footer className="bg-white text-slate-900 py-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Sensoplay. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
