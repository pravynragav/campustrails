import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { SubmitButton } from "@/components/SubmitButton";
import {
  BookOpen,
  FileCheck,
  ShieldCheck,
  HelpCircle,
  PenTool,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Article Guidelines | Campus Trails 27",
  description:
    "Official article writing and submission guidelines for Campus Trails 27 at Mepco Schlenk Engineering College.",
};

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-[#f5f3ee] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-xs font-bold text-black/50">
          <Link href="/" className="hover:text-[#ed4b35] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#ed4b35]">Guidelines</span>
        </div>

        {/* Page Header */}
        <div className="overflow-hidden rounded-3xl bg-[#151515] p-8 md:p-14 text-[#f5f3ee] shadow-2xl border border-white/10 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed4b35]">
              Campus Trails 27 Standard Operating Procedures
            </span>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-white md:text-6xl">
              ARTICLE GUIDELINES
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
              Everything you need to know about preparing, writing, formatting, and submitting your work for publication in Campus Trails 27 at Mepco Schlenk Engineering College.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <SubmitButton
                formUrl={siteConfig.articleCollectionForm}
                label="Submit Article via Google Form"
                variant="primary"
                size="md"
              />
            </div>
          </div>
        </div>

        {/* Guidelines Sections */}
        <div className="space-y-12">
          {/* 1. Article Categories & Requirements */}
          <div className="rounded-3xl bg-white p-8 md:p-10 border border-black/10 shadow-sm">
            <div className="mb-6 flex items-center gap-3 border-b border-black/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ed4b35]/10 text-[#ed4b35]">
                <PenTool className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ed4b35]">
                  Section 01
                </span>
                <h2 className="text-2xl font-black text-[#151515]">
                  Article Categories & Formats
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-black/5 p-6 border border-black/5">
                <h3 className="font-bold text-[#151515] text-base mb-2">
                  Feature Articles & Essays
                </h3>
                <p className="text-xs text-black/70 leading-relaxed mb-4">
                  In-depth explorations of campus topics, personal journeys, societal developments, or educational perspectives.
                </p>
                <div className="text-xs font-semibold text-[#ed4b35]">
                  Length: 800 - 2,000 words
                </div>
              </div>

              <div className="rounded-2xl bg-black/5 p-6 border border-black/5">
                <h3 className="font-bold text-[#151515] text-base mb-2">
                  Campus Stories & Event Reports
                </h3>
                <p className="text-xs text-black/70 leading-relaxed mb-4">
                  Coverage of symposiums, sports meets, cultural fests, club activities, and departmental initiatives.
                </p>
                <div className="text-xs font-semibold text-[#ed4b35]">
                  Length: 500 - 1,200 words
                </div>
              </div>

              <div className="rounded-2xl bg-black/5 p-6 border border-black/5">
                <h3 className="font-bold text-[#151515] text-base mb-2">
                  Technical & Research Spotlights
                </h3>
                <p className="text-xs text-black/70 leading-relaxed mb-4">
                  Simplifying complex engineering projects, research achievements, hackathon experiences, or tech breakthroughs.
                </p>
                <div className="text-xs font-semibold text-[#ed4b35]">
                  Length: 600 - 1,500 words
                </div>
              </div>

              <div className="rounded-2xl bg-black/5 p-6 border border-black/5">
                <h3 className="font-bold text-[#151515] text-base mb-2">
                  Opinion & Creative Pieces
                </h3>
                <p className="text-xs text-black/70 leading-relaxed mb-4">
                  Thoughtful commentary, op-eds, creative narratives, and short reflections written in English or Tamil.
                </p>
                <div className="text-xs font-semibold text-[#ed4b35]">
                  Length: 400 - 1,000 words
                </div>
              </div>
            </div>
          </div>

          {/* 2. Formatting & File Standards */}
          <div className="rounded-3xl bg-white p-8 md:p-10 border border-black/10 shadow-sm">
            <div className="mb-6 flex items-center gap-3 border-b border-black/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ed4b35]/10 text-[#ed4b35]">
                <FileCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ed4b35]">
                  Section 02
                </span>
                <h2 className="text-2xl font-black text-[#151515]">
                  Formatting & File Standards
                </h2>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-black/80">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#ed4b35] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#151515]">File Formats:</strong> We accept Microsoft Word documents (<code className="font-mono">.docx</code>), Portable Document Format (<code className="font-mono">.pdf</code>), or accessible Google Docs share links with view permissions enabled.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#ed4b35] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#151515]">Typography:</strong> Please format body text in standard 11pt or 12pt font (Geist, Inter, Arial, or Times New Roman) with 1.15 line spacing.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#ed4b35] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#151515]">Title & Author Info:</strong> Include the Article Title, Author Name(s), Department, Roll/Register Number, and Email ID at the top of your document.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#ed4b35] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#151515]">Images & Media:</strong> If your article includes high-resolution images, charts, or photographs, attach them in the Google Form submission field.
                </div>
              </li>
            </ul>
          </div>

          {/* 3. Editorial & Ethics Policy */}
          <div className="rounded-3xl bg-white p-8 md:p-10 border border-black/10 shadow-sm">
            <div className="mb-6 flex items-center gap-3 border-b border-black/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ed4b35]/10 text-[#ed4b35]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ed4b35]">
                  Section 03
                </span>
                <h2 className="text-2xl font-black text-[#151515]">
                  Editorial & Ethics Policy
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-sm text-black/80">
              <p>
                Campus Trails 27 is committed to fostering constructive, inspiring, and authentic student journalism at Mepco Schlenk Engineering College.
              </p>
              <div className="rounded-2xl bg-amber-50 p-5 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Plagiarism & Integrity:</strong> Submissions must be original student work. Uncredited copying or plagiarism will lead to immediate rejection by the editorial board.
                </div>
              </div>
            </div>
          </div>

          {/* 4. Frequently Asked Questions */}
          <div className="rounded-3xl bg-white p-8 md:p-10 border border-black/10 shadow-sm">
            <div className="mb-6 flex items-center gap-3 border-b border-black/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ed4b35]/10 text-[#ed4b35]">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#ed4b35]">
                  Section 04
                </span>
                <h2 className="text-2xl font-black text-[#151515]">
                  Frequently Asked Questions (FAQs)
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-sm">
              <div>
                <h3 className="font-bold text-[#151515]">
                  Who can submit articles to Campus Trails 27?
                </h3>
                <p className="mt-1 text-black/70 text-xs leading-relaxed">
                  Submissions are open to all undergraduate and postgraduate students, research scholars, faculty members, and alumni of Mepco Schlenk Engineering College.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#151515]">
                  How are articles submitted?
                </h3>
                <p className="mt-1 text-black/70 text-xs leading-relaxed">
                  Submissions are handled exclusively via Google Forms. Clicking any "Submit Article" or "Contribute" button on this website will redirect you to the official Google Form where you can upload your draft.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#151515]">
                  What happens after I submit my article?
                </h3>
                <p className="mt-1 text-black/70 text-xs leading-relaxed">
                  Our student editorial team reviews all submissions for clarity, relevance, and formatting. Selected authors are notified via email prior to publication.
                </p>
              </div>
            </div>
          </div>

          {/* Submission CTA Footer */}
          <div className="rounded-3xl bg-[#151515] p-8 md:p-12 text-[#f5f3ee] text-center shadow-xl">
            <h2 className="text-3xl font-black text-white">
              Ready to submit your article?
            </h2>
            <p className="mt-3 text-sm text-white/70 max-w-lg mx-auto">
              If your manuscript is formatted and ready, proceed to our central Google Form to submit your article for Edition 27.
            </p>
            <div className="mt-8 flex justify-center">
              <SubmitButton
                formUrl={siteConfig.articleCollectionForm}
                label="Open Google Form Submission"
                variant="primary"
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
