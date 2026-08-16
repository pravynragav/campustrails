"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { SubmitButton } from "./SubmitButton";
import { MessageSquare, Quote, Sparkles, Send } from "lucide-react";

export const OneQuestionVoices: React.FC = () => {
  const sectionData = siteConfig.sections.find(
    (s) => s.id === "one-question-many-voices"
  );
  const formUrl =
    sectionData?.formUrl || siteConfig.articleCollectionForm;

  return (
    <section className="rounded-3xl bg-[#151515] p-8 md:p-14 text-[#f5f3ee] border border-white/10 shadow-2xl overflow-hidden relative">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ed4b35]/10 blur-3xl" />

      {/* Header */}
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-white/15 pb-8">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-[#ed4b35]">03</span>
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
            Different perspectives from students and faculty across all departments at Mepco Schlenk Engineering College.
          </p>
        </div>

        <SubmitButton
          formUrl={formUrl}
          label="Answer Current Prompt"
          variant="primary"
          size="md"
        />
      </div>

      {/* Current Question Banner */}
      <div className="mb-10 rounded-2xl bg-white/10 p-6 md:p-8 border border-white/15 backdrop-blur-md">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ed4b35]">
          Current Active Prompt
        </span>
        <h3 className="mt-2 text-xl font-bold leading-relaxed text-white md:text-2xl">
          "{siteConfig.oneQuestionPrompt}"
        </h3>
      </div>

      {/* Grid of Voices / Student Responses */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.oneQuestionResponses.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between rounded-2xl bg-white/5 p-6 border border-white/10 hover:border-[#ed4b35]/40 transition-all hover:-translate-y-1"
          >
            <div>
              <Quote className="h-6 w-6 text-[#ed4b35]/60 mb-3" />
              <p className="text-sm leading-relaxed text-white/80 italic">
                "{item.quote}"
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-md ${item.avatarColor}`}
              >
                {item.author.charAt(0)}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{item.author}</h4>
                <p className="text-[11px] text-white/50">
                  {item.department} · {item.yearOrRole}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-white/5 p-6 border border-white/10 text-xs text-white/70">
        <span>
          Have your own answer or advice to share for this prompt?
        </span>
        <SubmitButton
          formUrl={formUrl}
          label="Submit Your Response"
          variant="dark"
          size="sm"
        />
      </div>
    </section>
  );
};
