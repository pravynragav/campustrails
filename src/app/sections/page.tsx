"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { SectionCard } from "@/components/SectionCard";
import { Filter, Layers } from "lucide-react";

export default function SectionsPage() {
  const [filter, setFilter] = useState<"all" | "active" | "coming-soon">("all");

  const filteredSections = siteConfig.sections.filter((section) => {
    if (filter === "active") return section.status === "active";
    if (filter === "coming-soon") return section.status === "coming-soon";
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f5f3ee] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-xs font-bold text-black/50">
          <Link href="/" className="hover:text-[#ed4b35] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#ed4b35]">Publication Sections</span>
        </div>

        {/* Page Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-black/10 pb-8">
          <div>
            <div className="mb-2 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ed4b35]">
              <Layers className="h-4 w-4" />
              <span>Campus Trails 27 Catalog</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-[#151515] md:text-6xl">
              PUBLICATION SECTIONS
            </h1>
            <p className="mt-3 max-w-2xl text-base text-black/60">
              Browse all article sections for Campus Trails 27. Submissions are currently open for active sections. Upcoming sections will open progressively.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 rounded-full bg-white p-1.5 border border-black/10 shadow-sm self-start md:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                filter === "all"
                  ? "bg-[#151515] text-white shadow-md"
                  : "text-black/60 hover:text-black"
              }`}
            >
              All Sections ({siteConfig.sections.length})
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                filter === "active"
                  ? "bg-[#ed4b35] text-white shadow-md"
                  : "text-black/60 hover:text-black"
              }`}
            >
              Active (
              {siteConfig.sections.filter((s) => s.status === "active").length})
            </button>
            <button
              onClick={() => setFilter("coming-soon")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                filter === "coming-soon"
                  ? "bg-[#151515] text-white shadow-md"
                  : "text-black/60 hover:text-black"
              }`}
            >
              Coming Soon (
              {
                siteConfig.sections.filter((s) => s.status === "coming-soon")
                  .length
              }
              )
            </button>
          </div>
        </div>

        {/* Section Cards Catalog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSections.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </div>

        {/* Informational Callout regarding Section Activation */}
        <div className="mt-16 rounded-3xl bg-white p-8 border border-black/10 shadow-sm text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed4b35]">
            Editorial Note
          </span>
          <h3 className="mt-2 text-xl font-bold text-[#151515]">
            Want to suggest or contribute to an upcoming section?
          </h3>
          <p className="mt-2 text-sm text-black/60 leading-relaxed">
            Upcoming sections are scheduled for activation during Phase 2 of Edition 27. When activated, each section will provide a dedicated submission form and guidelines.
          </p>
          <div className="mt-6">
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 rounded-full bg-[#151515] px-6 py-3 text-xs font-bold text-white hover:bg-[#ed4b35] transition-colors"
            >
              Submit to Main Article Collection Instead →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
