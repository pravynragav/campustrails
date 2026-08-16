import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campus Trails 27 | Student Publication - Mepco Schlenk Engineering College",
  description:
    "Official article collection and student publication portal for Campus Trails 27 at Mepco Schlenk Engineering College. Submit stories, research, creative writing, and campus experiences.",
  keywords: [
    "Campus Trails 27",
    "Mepco Schlenk Engineering College",
    "Student Publication",
    "College Magazine",
    "Article Submission",
    "Mepco",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#f5f3ee] text-[#151515] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
