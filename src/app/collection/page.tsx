import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { SubmitButton } from "@/components/SubmitButton";
import { SubmissionInfo } from "@/components/SubmissionInfo";
import { StatusBadge } from "@/components/StatusBadge";
import {
  BookOpen,
  PenTool,
  FileCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Image as ImageIcon,
  Languages,
  Mail,
  Award,
  UserCheck,
} from "lucide-react";

export const metadata = {
  title: "Main Article Collection | Campus Trails 27",
  description:
    "Submit your Tamil & English stories, poems, campus photography, and drawings for the Main Article Collection of Campus Trails 27 at Mepco Schlenk Engineering College.",
};

export default function MainCollectionPage() {
  const collectionSection = siteConfig.sections.find(
    (s) => s.id === "main-article-collection"
  )!;

  const formUrl = collectionSection.formUrl || siteConfig.articleCollectionForm;

  return (
    <div className="min-h-screen bg-[#f5f3ee] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-xs font-bold text-black/50">
          <Link href="/" className="hover:text-[#ed4b35] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#ed4b35]">Main Article Collection</span>
        </div>

        {/* Hero Banner Header */}
        <div className="overflow-hidden rounded-3xl bg-[#151515] p-8 md:p-14 text-[#f5f3ee] shadow-2xl border border-white/10 mb-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#ed4b35]">01</span>
                <span className="h-px w-8 bg-white/20" />
                <StatusBadge status="active" size="md" />
              </div>

              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                MAIN ARTICLE
                <br />
                <span className="text-[#ed4b35]">COLLECTION.</span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                {collectionSection.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <SubmitButton
                  formUrl={formUrl}
                  label="Submit Article via Google Form"
                  variant="primary"
                  size="lg"
                />
                <Link
                  href="/guidelines"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white hover:bg-white/20 transition-colors"
                >
                  <span>Article Guidelines</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Topics & Submission Formats Card */}
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10 backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed4b35] mb-4">
                Accepted Submission Types
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <Languages className="h-4 w-4 text-[#ed4b35] shrink-0" />
                  <span>Tamil Poems & Stories (கவிதைகள் & கதைகள்)</span>
                </li>
                <li className="flex items-center gap-3">
                  <PenTool className="h-4 w-4 text-[#ed4b35] shrink-0" />
                  <span>English Fiction, Micro-fiction & Poetry</span>
                </li>
                <li className="flex items-center gap-3">
                  <ImageIcon className="h-4 w-4 text-[#ed4b35] shrink-0" />
                  <span>Campus Photography & Nature Shots</span>
                </li>
                <li className="flex items-center gap-3">
                  <PenTool className="h-4 w-4 text-[#ed4b35] shrink-0" />
                  <span>Handmade Drawings, Sketches & Digital Art</span>
                </li>
              </ul>

              <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/50 space-y-1">
                <div>Patron: {siteConfig.patron}</div>
                <div>Faculty In-Charge: {siteConfig.facultyInCharge}</div>
                <div>Official Contact: <a href={`mailto:${siteConfig.contactEmail}`} className="text-[#ed4b35] hover:underline font-mono">{siteConfig.contactEmail}</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Information Section */}
        <div className="mb-12">
          <SubmissionInfo
            info={collectionSection.submissionInfo || siteConfig.submissionInfo}
          />
        </div>

        {/* Guidelines Quick Checklist */}
        <div className="rounded-3xl bg-white p-8 border border-black/10 shadow-sm">
          <h2 className="text-2xl font-black text-[#151515] mb-4">
            Before You Submit
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-black/5 p-5">
              <h3 className="font-bold text-[#151515] text-sm mb-2 flex items-center gap-2">
                <Languages className="h-4 w-4 text-[#ed4b35]" />
                Language & Medium
              </h3>
              <p className="text-xs text-black/60 leading-relaxed">
                Submissions can be in Tamil or English. High-resolution photographs (JPG/PNG) and digital/scanned drawings are welcomed.
              </p>
            </div>

            <div className="rounded-2xl bg-black/5 p-5">
              <h3 className="font-bold text-[#151515] text-sm mb-2 flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-[#ed4b35]" />
                Word Count & Format
              </h3>
              <p className="text-xs text-black/60 leading-relaxed">
                Recommended length for articles: 500 to 2,000 words in .docx, .pdf, image, or shared Google Docs link format.
              </p>
            </div>

            <div className="rounded-2xl bg-black/5 p-5">
              <h3 className="font-bold text-[#151515] text-sm mb-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#ed4b35]" />
                Editorial Review
              </h3>
              <p className="text-xs text-black/60 leading-relaxed">
                Submissions are reviewed under the guidance of Faculty In-Charge Dr. J. Senthilkumar. Selected entries will be published in Edition 27.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <SubmitButton
              formUrl={formUrl}
              label="Proceed to Google Form Submission"
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
