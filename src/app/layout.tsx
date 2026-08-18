import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";

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
    "Official article collection and student publication portal for Campus Trails 27 at Mepco Schlenk Engineering College. Submit Tamil & English stories, poems, campus photography, drawings, and research.",
  keywords: [
    "Campus Trails 27",
    "Campus Trails",
    "Campus Trails Mepco",
    "Mepco Schlenk Engineering College",
    "Mepco Student Publication",
    "Mepco College Magazine",
    "Campus Chronicles Mepco",
    "Mepco Article Submission",
    "Mepco Schlenk",
    "Sivakasi Engineering College Publication",
  ],
  authors: [{ name: "Mepco Schlenk Engineering College Editorial Board" }],
  creator: "Mepco Schlenk Engineering College",
  publisher: "Campus Trails 27",
  openGraph: {
    title: "Campus Trails 27 | Student Publication - Mepco Schlenk Engineering College",
    description:
      "Official article collection and student publication portal for Campus Trails 27 at Mepco Schlenk Engineering College.",
    siteName: "Campus Trails 27",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/pic/clg.jpeg",
        width: 1200,
        height: 630,
        alt: "Mepco Schlenk Engineering College Campus Trails 27",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Campus Trails 27 | Student Publication - Mepco Schlenk Engineering College",
    description:
      "Submit stories, Tamil & English literature, photography, and drawings for Campus Trails 27.",
    images: ["/pic/clg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "-2cxVpCkTUpHg9HQSVHro72coYcfiRBZwKyJtqsc4pQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.institution,
    alternateName: "Mepco Schlenk Engineering College",
    url: "https://campustrails.vercel.app",
    logo: "https://campustrails.vercel.app/pic/ct-logo.png",
    department: {
      "@type": "Organization",
      name: "Campus Trails 27 Editorial Board",
      email: siteConfig.contactEmail,
    },
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-[#f5f3ee] text-[#151515] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
