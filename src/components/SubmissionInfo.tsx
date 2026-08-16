import React from "react";
import { SubmissionDetails } from "@/config/siteConfig";
import { Calendar, Users, FileCheck, RefreshCw, Mail, FileText } from "lucide-react";

interface SubmissionInfoProps {
  info: SubmissionDetails;
  className?: string;
}

export const SubmissionInfo: React.FC<SubmissionInfoProps> = ({
  info,
  className = "",
}) => {
  return (
    <div
      className={`rounded-3xl border border-black/10 bg-white p-6 md:p-8 shadow-sm ${className}`}
    >
      <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ed4b35]">
            Submission Guidelines & Details
          </span>
          <h3 className="text-2xl font-black tracking-tight text-[#151515]">
            Submission Information
          </h3>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ed4b35]/10 text-[#ed4b35]">
          <FileText className="h-5 w-5" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Deadline */}
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/5 text-[#151515]">
            <Calendar className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-black/50">
              Submission Deadline
            </h4>
            <p className="mt-1 text-sm font-semibold text-[#151515]">
              {info.deadline}
            </p>
          </div>
        </div>

        {/* Eligible Contributors */}
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/5 text-[#151515]">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-black/50">
              Eligible Contributors
            </h4>
            <p className="mt-1 text-sm font-semibold text-[#151515]">
              {info.eligibleContributors}
            </p>
          </div>
        </div>

        {/* Submission Method */}
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/5 text-[#151515]">
            <FileCheck className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-black/50">
              Submission Method
            </h4>
            <p className="mt-1 text-sm font-semibold text-[#151515]">
              {info.submissionMethod}
            </p>
          </div>
        </div>

        {/* Review Process */}
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/5 text-[#151515]">
            <RefreshCw className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-black/50">
              Review Process
            </h4>
            <p className="mt-1 text-sm font-semibold text-[#151515]">
              {info.reviewProcess}
            </p>
          </div>
        </div>
      </div>

      {/* Accepted formats & Contact */}
      <div className="mt-8 grid gap-4 border-t border-black/10 pt-6 sm:grid-cols-2">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-black/50 mb-2">
            Accepted Formats
          </h4>
          <div className="flex flex-wrap gap-2">
            {info.acceptedFormats.map((format, idx) => (
              <span
                key={idx}
                className="rounded-lg bg-black/5 px-2.5 py-1 text-xs font-medium text-black/70"
              >
                {format}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-black/50 mb-2">
            Editorial Contact
          </h4>
          <a
            href={`mailto:${info.contactEmail}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#ed4b35] hover:underline"
          >
            <Mail className="h-4 w-4" />
            {info.contactEmail}
          </a>
        </div>
      </div>
    </div>
  );
};
