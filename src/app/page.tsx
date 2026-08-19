import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { SubmitButton } from "@/components/SubmitButton";
import { SectionCard } from "@/components/SectionCard";
import { StatusBadge } from "@/components/StatusBadge";
import {
  ArrowRight,
  Sparkles,
  FileText,
  ShieldCheck,
  Building2,
  ChevronRight,
  PenTool,
  Languages,
  ImageIcon,
  Award,
  UserCheck,
} from "lucide-react";

export default function Home() {
  const mainCollection = siteConfig.sections.find(
    (s) => s.id === "main-article-collection"
  )!;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f3ee] text-[#151515]">
      {/* Side Rotated Editorial Labels */}
      <div className="pointer-events-none absolute left-6 top-48 hidden select-none text-[11px] font-bold uppercase tracking-[0.3em] text-black/25 lg:block writing-mode-vertical rotate-180">
        EST. 2026 ———— CT27
      </div>
      <div className="pointer-events-none absolute right-6 top-48 hidden select-none text-[11px] font-bold uppercase tracking-[0.3em] text-black/25 lg:block writing-mode-vertical">
        MEPCO SCHLENK ENGINEERING COLLEGE
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Subtle Grid Background Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:50px_50px]" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          {/* Header Badges */}
          <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#ed4b35]">
            <span className="h-px w-8 bg-[#ed4b35]" />
            <span>Campus Trails 27</span>
            <span className="rounded-full bg-[#ed4b35]/10 px-3 py-1 text-[10px] text-[#ed4b35] border border-[#ed4b35]/20">
              {siteConfig.institution}
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Left Content */}
            <div>
              <h1 className="animate-fade-up text-[clamp(3.5rem,8.5vw,8.5rem)] font-black leading-[0.88] tracking-[-0.06em] text-[#151515]">
                STORIES
                <br />
                FROM OUR
                <br />
                <span className="text-[#ed4b35]">CAMPUS.</span>
              </h1>

              <p className="mt-8 max-w-lg text-lg leading-relaxed text-black/60 md:text-xl">
                A collection of voices, ideas, experiences and moments that make our campus what it is.
              </p>

              {/* Languages & Formats Pills */}
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-black/70">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-black/10 shadow-sm">
                  <Languages className="h-3.5 w-3.5 text-[#ed4b35]" />
                  Tamil (கவிதைகள் & கதைகள்)
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-black/10 shadow-sm">
                  <PenTool className="h-3.5 w-3.5 text-[#ed4b35]" />
                  English Stories & Poetry
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-black/10 shadow-sm">
                  <ImageIcon className="h-3.5 w-3.5 text-[#ed4b35]" />
                  Photographs & Drawings
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/sections"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#151515] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#ed4b35] hover:shadow-xl hover:shadow-[#ed4b35]/20 hover:-translate-y-0.5"
                >
                  <span>Explore Sections</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/collection"
                  className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/70 px-6 py-4 text-xs font-bold uppercase tracking-wider text-black/80 backdrop-blur-sm transition-all hover:bg-white hover:border-black/40"
                >
                  Main Article Collection
                </Link>
              </div>
            </div>

            {/* Right Stylized Outline "27" Graphic with Rotating Text Badge */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative flex items-center justify-center">
                {/* Giant Outline 27 */}
                <div className="relative select-none font-black text-[240px] sm:text-[320px] leading-none text-black/[0.04] tracking-tighter">
                  27
                  {/* Subtle institutional icon overlay inside 27 */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-25">
                    <Building2 className="h-40 w-40 text-[#ed4b35]" />
                  </div>
                </div>

                {/* Rotating Circular Text Logo Badge */}
                <div className="absolute -bottom-6 left-2 sm:-bottom-8 sm:left-4 flex h-36 w-36 items-center justify-center rounded-full bg-white/95 shadow-2xl border border-black/10 backdrop-blur-md">
                  <div className="relative flex h-full w-full items-center justify-center">
                    <svg className="h-full w-full animate-spin-slow p-2.5" viewBox="0 0 100 100">
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="text-[9.5px] font-bold uppercase tracking-[0.25em] fill-[#ed4b35]">
                        <textPath href="#circlePath">
                          VOICES • IDEAS • STORIES • EXPERIENCES •
                        </textPath>
                      </text>
                    </svg>
                    <div className="absolute flex h-11 w-11 items-center justify-center rounded-full bg-[#151515] text-white shadow-md">
                      <Sparkles className="h-5 w-5 text-[#ed4b35]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE BANNER */}
      <div className="border-y border-black/10 bg-[#151515] py-3.5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.3em] text-[#f5f3ee]">
          STORIES&nbsp;&nbsp;•&nbsp;&nbsp;PEOPLE&nbsp;&nbsp;•&nbsp;&nbsp;IDEAS&nbsp;&nbsp;•&nbsp;&nbsp;EXPERIENCES&nbsp;&nbsp;•&nbsp;&nbsp;CAMPUS CHRONICLES&nbsp;&nbsp;•&nbsp;&nbsp;TAMIL & ENGLISH LITERATURE&nbsp;&nbsp;•&nbsp;&nbsp;MEPCO SCHLENK ENGINEERING COLLEGE&nbsp;&nbsp;•&nbsp;&nbsp;CAMPUS TRAILS 27&nbsp;&nbsp;•&nbsp;&nbsp;STORIES&nbsp;&nbsp;•&nbsp;&nbsp;PEOPLE&nbsp;&nbsp;•&nbsp;&nbsp;IDEAS&nbsp;&nbsp;•&nbsp;&nbsp;EXPERIENCES&nbsp;&nbsp;•&nbsp;&nbsp;
        </div>
      </div>

      {/* FEATURED MAIN ARTICLE COLLECTION BANNER ONLY */}
      <section id="collection" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="overflow-hidden rounded-3xl bg-[#151515] text-[#f5f3ee] shadow-2xl border border-white/10">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Visual Header Left */}
            <div className="relative min-h-[240px] bg-gradient-to-br from-[#ed4b35]/20 to-[#1e1e1e] p-8 md:p-12 flex flex-col justify-between border-b border-white/10 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#ed4b35]">01</span>
                <span className="h-px w-8 bg-white/20" />
                <StatusBadge status="active" />
              </div>

              <div className="my-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ed4b35] text-white shadow-lg shadow-[#ed4b35]/30">
                  <PenTool className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                  MAIN ARTICLE
                  <br />
                  <span className="text-[#ed4b35]">COLLECTION</span>
                </h3>
              </div>

              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                ACTIVE EDITION 27 PORTAL
              </span>
            </div>

            {/* Content Right */}
            <div className="p-8 md:p-14 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ed4b35]">
                  Currently Open for Submissions
                </span>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">
                  Have a story worth sharing?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                  Submit your article, idea, Tamil/English poem, story, photograph, or drawing and become part of Campus Trails 27.
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
                  <span className="rounded-full bg-white/10 px-3.5 py-1.5">Tamil Poems & Stories (கவிதைகள் & கதைகள்)</span>
                  <span className="rounded-full bg-white/10 px-3.5 py-1.5">English Literature</span>
                  <span className="rounded-full bg-white/10 px-3.5 py-1.5">Photographs</span>
                  <span className="rounded-full bg-white/10 px-3.5 py-1.5">Drawings & Artwork</span>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <SubmitButton
                  formUrl={mainCollection.formUrl}
                  label="Contribute Now"
                  variant="primary"
                  size="lg"
                />
                <Link
                  href="/guidelines"
                  className="text-xs font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors"
                >
                  Read Submission Guidelines →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS CATALOG GRID */}
      <section id="sections" className="bg-[#151515] text-[#f5f3ee] py-20 md:py-28 border-t border-black/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#ed4b35]">
                02 / Explore Catalog
              </p>
              <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">
                SECTIONS CATALOG
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/50 bg-white/10 px-4 py-2 rounded-full border border-white/10">
                12 Publication Categories
              </span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.sections.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT & LEADERSHIP SECTION */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ed4b35]">
              03 / About
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.045em] text-[#151515] md:text-6xl">
              A publication made
              <br />
              <span className="text-black/30">by the campus,</span>
              <br />
              for the campus.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-black/60 md:text-lg">
              Campus Trails brings together the stories, perspectives, creativity, research, literature, and experiences that make student life at Mepco Schlenk Engineering College memorable. Every contribution becomes a part of our collective campus story.
            </p>

            {/* Patron & Leadership Card */}
            <div className="mt-8 rounded-2xl bg-white p-6 border border-black/10 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-[#ed4b35]" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/40 block">Patron</span>
                  <span className="text-sm font-black text-[#151515]">{siteConfig.patron}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-black/10 pt-3">
                <UserCheck className="h-5 w-5 text-[#ed4b35]" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/40 block">Faculty In-Charge</span>
                  <span className="text-sm font-black text-[#151515]">{siteConfig.facultyInCharge}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-black/10 pt-3">
                <FileText className="h-5 w-5 text-[#ed4b35]" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/40 block">Official CT Email</span>
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-xs font-mono font-bold text-[#ed4b35] hover:underline">
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right College Photo Card */}
          <div className="overflow-hidden rounded-3xl border border-black/10 shadow-xl bg-[#151515] text-[#f5f3ee]">
            <div className="relative h-72 w-full overflow-hidden">
              <img
                src={siteConfig.collegeImagePath}
                alt="Mepco Schlenk Engineering College Campus"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
            </div>
            <div className="p-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ed4b35]">
                Mepco Schlenk Engineering College
              </span>
              <h3 className="mt-1 text-2xl font-black text-white">
                Sivakasi, Tamil Nadu
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Autonomous Institution affiliated to Anna University. Dedicated to engineering excellence, student research, and holistic publication projects like Campus Trails 27.
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono text-white/40">
                <span>EDITION 27</span>
                <span>EST. 1984</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}