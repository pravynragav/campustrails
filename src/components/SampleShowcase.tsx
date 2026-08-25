"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Languages,
  ImageIcon,
  Sparkles,
  Smile,
  ChevronRight,
  Quote,
  Feather,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface SampleWork {
  id: string;
  category: "tamil" | "english" | "photography" | "comics";
  categoryLabel: string;
  title: string;
  author: string;
  deptAndYear: string;
  excerptOrDesc: string;
  fullContent?: string;
  image?: string;
}

const sampleWorks: SampleWork[] = [
  {
    id: "1",
    category: "tamil",
    categoryLabel: "Tamil Poetry (தமிழ் கவிதை)",
    title: "வகுப்பறை விடியல் (Classroom Dawn)",
    author: "கே. கார்த்திக்",
    deptAndYear: "2nd Year, ECE",
    excerptOrDesc:
      "கரும்பலகை எழுதிய கணக்குகள் மறந்தாலும், நண்பர்கள் சிரித்த அந்த காலை வேளை நினைவில் நிலைத்து நிற்கும்...",
    fullContent: `கரும்பலகை எழுதிய கணக்குகள் மறந்தாலும்,
நண்பர்கள் சிரித்த அந்த காலை வேளை நினைவில் நிலைத்து நிற்கும்.
மழைக்கால மெப்கோ பாதையில்,
குடையோடு பகிர்ந்த ஒரு தேநீர் துளி,
பொறியியல் வாழ்வின் பொன்னான கவிதை!`,
  },
  {
    id: "2",
    category: "english",
    categoryLabel: "English Fiction & Micro-story",
    title: "The Midnight Circuit Debugger",
    author: "R. Vaishnavi",
    deptAndYear: "3rd Year, CSE",
    excerptOrDesc:
      "At 2:00 AM in the computer lab, one trailing semicolon was all that stood between total victory and infinite recursion...",
    fullContent: `The green terminal cursor blinked rhythmically in the quiet library basement. 147 lines of code, three cups of black coffee, and a deadline ticking down to dawn. When the simulation finally rendered standard output without error, we didn't just pass the module — we discovered the joy of problem solving together.`,
  },
  {
    id: "3",
    category: "photography",
    categoryLabel: "Campus Photography & Sketches",
    title: "Golden Hour at Central Library Walkway",
    author: "S. Praveen",
    deptAndYear: "4th Year, Mechanical",
    excerptOrDesc:
      "Capturing the golden sunset reflections on the green campus trees along Mepco's iconic main entrance pathway.",
    image: "/pic/clg.jpeg",
  },
  {
    id: "4",
    category: "comics",
    categoryLabel: "404: Seriousness Not Found (Student Comics)",
    title: "The Viva Voce Chronicles",
    author: "M. Harish & Team",
    deptAndYear: "3rd Year, EEE",
    excerptOrDesc:
      "Panel 1: External Examiner asks a deep theoretical equation.\nPanel 2: Student nods with supreme confidence.\nPanel 3: 'Sir, options A, B, C or D?'",
    fullContent: `Panel 1: [External Examiner]: "Can you explain the frequency response of a low pass filter?"\nPanel 2: [Student]: Nods thoughtfully, adjusting spectacles.\nPanel 3: [Student]: "Sir, if we pass it, does it low-key mean we passed the lab?"\nPanel 4: [Examiner & Student]: Laughing together!`,
  },
];

export const SampleShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "tamil" | "english" | "photography" | "comics">("all");
  const [selectedSample, setSelectedSample] = useState<SampleWork | null>(null);

  const filteredSamples =
    activeTab === "all"
      ? sampleWorks
      : sampleWorks.filter((item) => item.category === activeTab);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
        <div>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#ed4b35] mb-3">
            <Sparkles className="h-4 w-4" />
            <span>Inspiration & Sample Submissions</span>
          </div>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-[#151515] md:text-6xl">
            SAMPLE WORKS <span className="text-[#ed4b35]">&</span> EXCERPTS
          </h2>
          <p className="mt-3 text-base text-black/60 max-w-xl">
            Take inspiration from selected student submissions across literature, Tamil poetry, photography, and creative comics.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab("all")}
            className={`rounded-full px-4 py-2 transition-all ${
              activeTab === "all"
                ? "bg-[#151515] text-white shadow-md"
                : "bg-white border border-black/10 text-black/70 hover:bg-black/5"
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => setActiveTab("tamil")}
            className={`rounded-full px-4 py-2 transition-all ${
              activeTab === "tamil"
                ? "bg-[#ed4b35] text-white shadow-md"
                : "bg-white border border-black/10 text-black/70 hover:bg-black/5"
            }`}
          >
            Tamil (தமிழ்)
          </button>
          <button
            onClick={() => setActiveTab("english")}
            className={`rounded-full px-4 py-2 transition-all ${
              activeTab === "english"
                ? "bg-[#151515] text-white shadow-md"
                : "bg-white border border-black/10 text-black/70 hover:bg-black/5"
            }`}
          >
            English Stories
          </button>
          <button
            onClick={() => setActiveTab("photography")}
            className={`rounded-full px-4 py-2 transition-all ${
              activeTab === "photography"
                ? "bg-[#151515] text-white shadow-md"
                : "bg-white border border-black/10 text-black/70 hover:bg-black/5"
            }`}
          >
            Photos & Art
          </button>
          <button
            onClick={() => setActiveTab("comics")}
            className={`rounded-full px-4 py-2 transition-all ${
              activeTab === "comics"
                ? "bg-[#151515] text-white shadow-md"
                : "bg-white border border-black/10 text-black/70 hover:bg-black/5"
            }`}
          >
            Comics & Humour
          </button>
        </div>
      </div>

      {/* Grid of Samples */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredSamples.map((sample) => (
          <div
            key={sample.id}
            onClick={() => setSelectedSample(sample)}
            className="group cursor-pointer flex flex-col justify-between rounded-3xl bg-white p-6 border border-black/10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#ed4b35]/40"
          >
            <div>
              <span className="inline-block rounded-full bg-[#ed4b35]/10 px-3 py-1 text-[10px] font-bold text-[#ed4b35] border border-[#ed4b35]/20 mb-4">
                {sample.categoryLabel}
              </span>

              {sample.image && (
                <div className="mb-4 h-40 w-full overflow-hidden rounded-2xl border border-black/10">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <h3 className="text-xl font-black text-[#151515] group-hover:text-[#ed4b35] transition-colors">
                {sample.title}
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-black/60 line-clamp-3">
                {sample.excerptOrDesc}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 text-xs font-semibold text-black/50">
              <div>
                <span className="font-bold text-[#151515] block">{sample.author}</span>
                <span className="text-[10px]">{sample.deptAndYear}</span>
              </div>
              <span className="text-[#ed4b35] font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                Read →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Full Excerpt Modal */}
      {selectedSample && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm animate-fade-in">
          <div className="max-w-xl w-full rounded-3xl bg-white p-8 text-[#151515] shadow-2xl border border-black/10 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-5">
              <span className="rounded-full bg-[#ed4b35]/10 px-3 py-1 text-xs font-bold text-[#ed4b35]">
                {selectedSample.categoryLabel}
              </span>
              <button
                onClick={() => setSelectedSample(null)}
                className="rounded-full bg-black/5 px-3 py-1 text-xs font-bold hover:bg-black/10"
              >
                Close ✕
              </button>
            </div>

            <h3 className="text-2xl font-black text-[#151515]">{selectedSample.title}</h3>
            <p className="text-xs text-black/50 font-semibold mt-1">
              By {selectedSample.author} ({selectedSample.deptAndYear})
            </p>

            {selectedSample.image && (
              <div className="my-5 overflow-hidden rounded-2xl border border-black/10">
                <img
                  src={selectedSample.image}
                  alt={selectedSample.title}
                  className="w-full object-cover"
                />
              </div>
            )}

            <div className="mt-5 rounded-2xl bg-[#f5f3ee] p-5 border border-black/5 whitespace-pre-line text-sm leading-relaxed font-medium text-black/80 italic">
              <Quote className="h-5 w-5 text-[#ed4b35] mb-2" />
              {selectedSample.fullContent || selectedSample.excerptOrDesc}
            </div>

            <div className="mt-6 flex justify-end">
              <a
                href={siteConfig.articleCollectionForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ed4b35] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#d43d28]"
              >
                <span>Submit Work Like This</span>
                <Feather className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
