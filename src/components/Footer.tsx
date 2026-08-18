import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Mail, ArrowUpRight, Award, UserCheck, Shield } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black/10 bg-[#151515] text-[#f5f3ee]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.1fr]">
          {/* Main Brand & Leadership Info */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-xl font-black tracking-tighter text-white"
            >
              <img
                src={siteConfig.collegeLogoPath}
                alt="Campus Trails 27 Logo"
                className="h-9 w-9 rounded-xl border border-white/20 object-cover"
              />
              <div className="flex items-baseline gap-1">
                <span>CAMPUS TRAILS</span>
                <span className="text-[#ed4b35]">.</span>
                <span className="ml-1 font-mono text-sm text-[#ed4b35]">27</span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>

            {/* Patron & Faculty Leadership */}
            <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs">
              <div className="flex items-center gap-2 text-white/80">
                <Award className="h-4 w-4 text-[#ed4b35]" />
                <span className="font-bold">Patron:</span>
                <span className="text-white/60">{siteConfig.patron}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <UserCheck className="h-4 w-4 text-[#ed4b35]" />
                <span className="font-bold">Faculty In-Charge:</span>
                <span className="text-white/60">{siteConfig.facultyInCharge}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed4b35] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/collection"
                  className="hover:text-white transition-colors"
                >
                  Main Article Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/sections"
                  className="hover:text-white transition-colors"
                >
                  Publication Sections (11 Catalog Items)
                </Link>
              </li>
              <li>
                <Link
                  href="/guidelines"
                  className="hover:text-white transition-colors"
                >
                  Submission Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Submissions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed4b35] mb-4">
              Editorial Contact
            </h4>
            
            <div className="rounded-2xl bg-white/5 p-4 border border-white/10 mb-4">
              <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-1">
                Official CT Email
              </span>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-2 font-mono text-sm font-bold text-[#ed4b35] hover:underline"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contactEmail}
              </a>
            </div>

            <Link
              href="/collection"
              className="group inline-flex items-center gap-2 rounded-full bg-[#ed4b35] px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#d43d28]"
            >
              <span>Submit Article via Google Form</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <div className="font-bold text-white/70">
            CAMPUS TRAILS<span className="text-[#ed4b35]"> 27</span> · {siteConfig.institution}
          </div>

          <div>
            Patron: {siteConfig.patron} · Faculty In-Charge: {siteConfig.facultyInCharge}
          </div>

          <div>© {siteConfig.year} Campus Trails 27. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};
