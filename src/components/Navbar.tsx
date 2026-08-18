"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/10 bg-[#f5f3ee]/95 shadow-sm backdrop-blur-md"
          : "bg-[#f5f3ee]/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Brand Logo & Crest */}
        <Link href="/" className="group flex items-center gap-3 text-lg font-black tracking-tighter text-[#151515]">
          <div className="relative flex h-10 w-10 overflow-hidden rounded-xl border border-black/10 shadow-sm bg-white transition-transform group-hover:scale-105">
            <img
              src={siteConfig.collegeLogoPath}
              alt="Campus Trails 27 Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1 leading-none">
              <span>CAMPUS TRAILS</span>
              <span className="text-[#ed4b35] transition-transform duration-300 group-hover:scale-125">.</span>
              <span className="ml-0.5 text-xs font-mono font-bold text-[#ed4b35]">27</span>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-widest text-black/40 mt-1">
              Mepco Schlenk Engg. College
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-widest md:flex">
          {siteConfig.navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-black/70 hover:text-black ${
                  isActive ? "active text-[#ed4b35] font-black" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Action Pill Badge */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/collection"
            className="group flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-bold text-[#151515] transition-all duration-300 hover:border-[#ed4b35] hover:bg-[#151515] hover:text-white shadow-sm"
          >
            <span>CT27 *</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-[#151515] transition-colors hover:bg-black/10 md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-20 z-40 border-b border-black/10 bg-[#f5f3ee] p-6 shadow-xl backdrop-blur-xl md:hidden animate-fade-up">
          <div className="flex flex-col gap-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ed4b35]">
              Navigation
            </span>
            {siteConfig.navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-black tracking-tight transition-colors ${
                    isActive ? "text-[#ed4b35]" : "text-[#151515] hover:text-[#ed4b35]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-4 border-t border-black/10 pt-5">
              <p className="text-xs text-black/50 mb-3">
                {siteConfig.institution}
              </p>
              <Link
                href="/collection"
                className="flex items-center justify-center gap-2 rounded-full bg-[#ed4b35] py-3 text-xs font-bold text-white shadow-md"
              >
                <span>Contribute to CT27</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
