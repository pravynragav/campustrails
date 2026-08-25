"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { SubmitButton } from "./SubmitButton";
import { Sparkles, Send, CheckCircle } from "lucide-react";

export const OneQuestionVoices: React.FC = () => {
  const sectionData = siteConfig.sections.find(
    (s) => s.id === "one-question-many-voices"
  );
  const formUrl = sectionData?.formUrl || siteConfig.articleCollectionForm;

  const [activePromptIndex, setActivePromptIndex] = useState<number>(0);

  return (
    <section className="rounded-3xl bg-[#151515] p-8 md:p-14 text-[#f5f3ee] border border-white/10 shadow-2xl overflow-hidden relative">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ed4b35]/10 blur-3xl" />

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-white/15 pb-8">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#ed4b35]">02</span>
            <span className="h-px w-8 bg-white/20" />
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ed4b35]/20 px-3 py-1 text-xs font-bold text-[#ed4b35] border border-[#ed4b35]/30">
              <Sparkles className="h-3.5 w-3.5" />
              Interactive Website Section
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
            ONE QUESTION, MANY VOICES
          </h2>
          <p className="mt-2 text-sm text-white/60 max-w-xl">
            Select an edition prompt below and share your personal perspective or story directly via the Google Form.
          </p>
        </div>

        <SubmitButton
          formUrl={formUrl}
          label="Answer Selected Prompt"
          variant="primary"
          size="md"
        />
      </div>

      {/* Interactive Prompt Switcher Tabs */}
      <div className="rounded-2xl bg-white/10 p-6 md:p-8 border border-white/15 backdrop-blur-md">
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ed4b35]">
            Select a Prompt to Answer
          </span>
          <span className="text-xs font-mono text-white/50">
            Prompt {activePromptIndex + 1} of {siteConfig.oneQuestionPrompts.length}
          </span>
        </div>

        <div className="space-y-3">
          {siteConfig.oneQuestionPrompts.map((question, idx) => {
            const isSelected = idx === activePromptIndex;

            return (
              <button
                key={idx}
                onClick={() => setActivePromptIndex(idx)}
                className={`w-full text-left transition-all duration-300 flex items-start gap-3.5 rounded-xl p-4 border text-sm md:text-base font-semibold ${
                  isSelected
                    ? "bg-[#ed4b35] border-[#ed4b35] text-white shadow-lg shadow-[#ed4b35]/20 scale-[1.01]"
                    : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold ${
                    isSelected ? "bg-white text-[#ed4b35]" : "bg-[#ed4b35]/20 text-[#ed4b35]"
                  }`}
                >
                  0{idx + 1}
                </span>
                <span className="flex-1">{question}</span>
                {isSelected && <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-white/5 p-6 border border-white/10 text-xs text-white/70">
        <div className="flex items-center gap-3">
          <Send className="h-4 w-4 text-[#ed4b35]" />
          <span>
            Selected Question: <strong className="text-white">"{siteConfig.oneQuestionPrompts[activePromptIndex]}"</strong>
          </span>
        </div>
        <SubmitButton
          formUrl={formUrl}
          label="Submit Your Answer"
          variant="primary"
          size="sm"
        />
      </div>
    </section>
  );
};
