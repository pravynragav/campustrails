"use client";

import React, { useState } from "react";
import { ExternalLink, Info, AlertCircle, X, Check } from "lucide-react";

interface SubmitButtonProps {
  formUrl?: string;
  label?: string;
  variant?: "primary" | "secondary" | "outline" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  formUrl,
  label = "Submit Article",
  variant = "primary",
  className = "",
  size = "md",
}) => {
  const [showNotice, setShowNotice] = useState(false);
  const [copied, setCopied] = useState(false);

  // Check if formUrl is a placeholder
  const isPlaceholder =
    !formUrl ||
    formUrl.trim() === "" ||
    formUrl.includes("PLACEHOLDER") ||
    formUrl.includes("YOUR_FORM");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isPlaceholder) {
      e.preventDefault();
      setShowNotice(true);
    }
  };

  const copyConfigSnippet = () => {
    navigator.clipboard.writeText(
      `// Set in src/config/siteConfig.ts\narticleCollectionForm: "https://forms.google.com/YOUR_FORM_ID"`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles =
      "bg-[#ed4b35] hover:bg-[#d43d28] text-white shadow-lg shadow-[#ed4b35]/20 hover:-translate-y-0.5";
  } else if (variant === "secondary") {
    variantStyles =
      "bg-[#151515] hover:bg-black text-white hover:-translate-y-0.5";
  } else if (variant === "outline") {
    variantStyles =
      "border-2 border-[#151515] text-[#151515] hover:bg-[#151515] hover:text-white";
  } else if (variant === "dark") {
    variantStyles =
      "bg-white/10 hover:bg-white/20 text-white border border-white/20";
  }

  let sizeStyles = "px-6 py-3.5 text-sm";
  if (size === "sm") sizeStyles = "px-4 py-2 text-xs";
  if (size === "lg") sizeStyles = "px-8 py-4 text-base";

  return (
    <>
      <a
        href={formUrl || "#"}
        target={isPlaceholder ? "_self" : "_blank"}
        rel={isPlaceholder ? undefined : "noopener noreferrer"}
        onClick={handleClick}
        className={`group inline-flex items-center justify-center gap-3 rounded-full font-bold transition-all duration-300 ${variantStyles} ${sizeStyles} ${className}`}
      >
        <span>{label}</span>
        <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      {/* Interactive Modal when Google Form URL is set to placeholder */}
      {showNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-up">
          <div className="relative max-w-md w-full rounded-2xl bg-[#151515] p-6 text-[#f5f3ee] border border-white/15 shadow-2xl">
            <button
              onClick={() => setShowNotice(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ed4b35]/20 text-[#ed4b35]">
                <Info className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Central Google Form Link</h3>
                <p className="text-xs text-white/60">Campus Trails 27 Configuration</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/80 mb-4">
              This button is linked to the central Google Form URL in{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-[#ed4b35] font-mono">
                src/config/siteConfig.ts
              </code>
              .
            </p>

            <div className="rounded-xl bg-white/5 p-4 border border-white/10 text-xs text-white/70 mb-5 leading-6">
              <p className="font-semibold text-white mb-1 flex items-center gap-1.5">
                <AlertCircle className="h-3.5 w-3.5 text-amber-400" />
                Current Status:
              </p>
              The Google Form URL is currently set to a central placeholder. Replacing the URL in <span className="text-white font-mono">siteConfig.ts</span> will immediately activate live Google Form submissions across the website!
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={copyConfigSnippet}
                className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-semibold hover:bg-white/20 transition-colors text-white"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : null}
                <span>{copied ? "Snippet Copied to Clipboard!" : "Copy Configuration Code Snippet"}</span>
              </button>

              <button
                onClick={() => setShowNotice(false)}
                className="rounded-xl bg-[#ed4b35] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#d43d28] transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
