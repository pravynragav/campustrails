"use client";

import React, { useEffect, useState } from "react";
import { Eye, TrendingUp } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface VisitorCountBadgeProps {
  variant?: "hero" | "nav" | "footer";
  className?: string;
}

export const VisitorCountBadge: React.FC<VisitorCountBadgeProps> = ({
  variant = "nav",
  className = "",
}) => {
  // Default fallback starting count so it's ALWAYS visible immediately
  const [visits, setVisits] = useState<number>(siteConfig.initialVisitorCount || 1500);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getVisits() {
      try {
        const hasVisitedSession = sessionStorage.getItem("ct27_visited");
        const incrementFlag = !hasVisitedSession ? "?increment=true" : "";
        const res = await fetch(`/api/visitor-count${incrementFlag}`);
        const data = await res.json();

        if (!hasVisitedSession) {
          sessionStorage.setItem("ct27_visited", "true");
        }

        if (typeof data.visits === "number" && data.visits > 0) {
          setVisits(data.visits);
        }
      } catch (err) {
        console.error("Error loading visitor count:", err);
      } finally {
        setLoading(false);
      }
    }

    getVisits();
  }, []);

  // 1. HERO VARIANT (Prominent pill badge at the top of the homepage)
  if (variant === "hero") {
    return (
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-1.5 text-xs font-bold text-[#151515] shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:bg-white ${className}`}
        title="Live Website Visitor Count"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ed4b35] opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ed4b35]"></span>
        </span>
        <Eye className="h-4 w-4 text-[#ed4b35]" />
        <span className="font-mono text-sm font-extrabold text-[#151515]">
          {visits.toLocaleString()}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-black/50">
          Total Visitors
        </span>
      </div>
    );
  }

  // 2. FOOTER VARIANT (Dark theme badge at the bottom of the page)
  if (variant === "footer") {
    return (
      <div
        className={`inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-mono text-white/90 backdrop-blur-sm ${className}`}
        title="Total Website Visitors"
      >
        <Eye className="h-3.5 w-3.5 text-[#ed4b35]" />
        <span>{visits.toLocaleString()} views</span>
      </div>
    );
  }

  // 3. NAVBAR VARIANT (Top Header Navigation bar)
  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-[#151515] shadow-xs backdrop-blur-sm transition-all hover:bg-white ${className}`}
      title="Live Website Visitor Count"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ed4b35] opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ed4b35]"></span>
      </span>
      <Eye className="h-3.5 w-3.5 text-[#ed4b35]" />
      <span className="font-mono font-extrabold">{visits.toLocaleString()}</span>
      <span className="text-[10px] uppercase tracking-wider text-black/50 hidden sm:inline">
        views
      </span>
    </div>
  );
};
