import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { StatusBadge } from "@/components/StatusBadge";
import { SubmitButton } from "@/components/SubmitButton";
import { SubmissionInfo } from "@/components/SubmissionInfo";
import {
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Sparkles,
} from "lucide-react";

interface SectionPageProps {
  params: Promise<{
    sectionId: string;
  }>;
}

export async function generateStaticParams() {
  return siteConfig.sections.map((section) => ({
    sectionId: section.id,
  }));
}

export async function generateMetadata({ params }: SectionPageProps) {
  const { sectionId } = await params;
  const section = siteConfig.sections.find((s) => s.id === sectionId);

  if (!section) {
    return {
      title: "Section Not Found | Campus Trails 27",
    };
  }

  return {
    title: `${section.title} | Campus Trails 27`,
    description: section.shortDescription,
  };
}

export default async function SectionDetailPage({ params }: SectionPageProps) {
  const { sectionId } = await params;
  const section = siteConfig.sections.find((s) => s.id === sectionId);

  if (!section) {
    notFound();
  }

  const isActive = section.status === "active";
  const formUrl = section.formUrl || siteConfig.articleCollectionForm;

  return (
    <div className="min-h-screen bg-[#f5f3ee] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-xs font-bold text-black/50">
          <Link href="/" className="hover:text-[#ed4b35] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/sections" className="hover:text-[#ed4b35] transition-colors">
            Sections
          </Link>
          <span>/</span>
          <span className="text-[#ed4b35]">{section.title}</span>
        </div>

        {/* Section Header Card */}
        <div className="overflow-hidden rounded-3xl bg-[#151515] p-8 md:p-14 text-[#f5f3ee] shadow-2xl border border-white/10 mb-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#ed4b35]">
                  {section.number}
                </span>
                <span className="h-px w-8 bg-white/20" />
                <StatusBadge status={section.status} size="md" />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                {section.categoryTag}
              </span>

              <h1 className="mt-2 text-4xl font-black tracking-tight text-white md:text-6xl">
                {section.title.toUpperCase()}
              </h1>

              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                {section.fullDescription}
              </p>

              {/* Conditional Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {isActive ? (
                  <>
                    <SubmitButton
                      formUrl={formUrl}
                      label={`Submit to ${section.title}`}
                      variant="primary"
                      size="lg"
                    />
                    <Link
                      href="/guidelines"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white hover:bg-white/20 transition-colors"
                    >
                      <span>Guidelines</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </>
                ) : (
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-amber-400/10 px-5 py-3.5 text-xs font-bold text-amber-400 border border-amber-400/20">
                    <Clock className="h-4 w-4" />
                    <span>Submissions for this section are coming soon</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Topics / Expectations Card */}
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10 backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed4b35] mb-4">
                {isActive ? "Expected Topics & Themes" : "What To Expect"}
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                {section.expectedTopics?.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#ed4b35] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/50">
                Status: {isActive ? "Open for Edition 27" : "Upcoming Release"}
              </div>
            </div>
          </div>
        </div>

        {/* Section Content & Submission Info */}
        {isActive ? (
          <div className="space-y-12">
            <SubmissionInfo
              info={section.submissionInfo || siteConfig.submissionInfo}
            />

            <div className="rounded-3xl bg-white p-8 border border-black/10 shadow-sm text-center">
              <h3 className="text-2xl font-black text-[#151515] mb-2">
                Ready to submit your contribution?
              </h3>
              <p className="text-sm text-black/60 max-w-xl mx-auto mb-6">
                Click the button below to open the configured Google Form for {section.title}.
              </p>
              <SubmitButton
                formUrl={formUrl}
                label={`Open Google Form for ${section.title}`}
                variant="primary"
                size="lg"
              />
            </div>
          </div>
        ) : (
          /* Coming Soon Section Banner (No Fake Submission Form) */
          <div className="rounded-3xl bg-white p-8 md:p-12 border border-black/10 shadow-sm">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-50 text-amber-500 border border-amber-200">
                <Clock className="h-8 w-8" />
              </div>

              <h2 className="text-3xl font-black text-[#151515]">
                {section.title} is Coming Soon
              </h2>

              <p className="mt-4 text-base leading-relaxed text-black/70">
                Submissions for <strong className="text-[#151515]">{section.title}</strong> are not open yet. Our editorial team is currently preparing the guidelines and submission form for this section.
              </p>

              <div className="mt-6 rounded-2xl bg-black/5 p-5 text-xs text-black/70 leading-relaxed border border-black/5 text-left">
                <p className="font-bold text-[#151515] mb-1 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#ed4b35]" />
                  Editorial Notice:
                </p>
                When this section opens, the editorial team will update the section status in <code className="font-mono text-[#ed4b35]">src/config/siteConfig.ts</code> from <code className="font-mono">"coming-soon"</code> to <code className="font-mono">"active"</code> and attach the Google Form link.
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/collection"
                  className="rounded-full bg-[#151515] px-6 py-3.5 text-xs font-bold text-white hover:bg-[#ed4b35] transition-colors"
                >
                  Submit to Main Article Collection Instead
                </Link>
                <Link
                  href="/sections"
                  className="rounded-full border border-black/20 bg-white px-6 py-3.5 text-xs font-bold text-[#151515] hover:bg-black/5 transition-colors"
                >
                  View Other Sections
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
