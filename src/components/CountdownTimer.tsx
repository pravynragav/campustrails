"use client";

import React, { useState, useEffect } from "react";
import { Clock, Calendar, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const CountdownTimer: React.FC = () => {
  const targetDate = new Date("2026-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isExpired) {
    return (
      <div className="inline-flex items-center gap-2 rounded-2xl bg-rose-500/10 px-4 py-2 text-xs font-bold text-rose-600 border border-rose-500/20">
        <AlertCircle className="h-4 w-4" />
        <span>Submissions for CT27 Edition are now closed.</span>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-[#151515] p-6 text-white border border-white/10 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ed4b35] text-white shadow-md">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-black tracking-wide uppercase text-white">
              Submission Deadline
            </h4>
            <p className="text-xs text-white/50 flex items-center gap-1.5 mt-0.5 font-mono">
              <Calendar className="h-3 w-3 text-[#ed4b35]" />
              {siteConfig.submissionInfo.deadline}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 self-start sm:self-center rounded-full bg-[#ed4b35]/20 px-3 py-1 text-[11px] font-bold text-[#ed4b35] border border-[#ed4b35]/30">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ed4b35] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ed4b35]"></span>
          </span>
          Portal Active
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 text-center sm:gap-4">
        <div className="rounded-2xl bg-white/5 p-3 border border-white/5 backdrop-blur-sm">
          <span className="font-mono text-2xl sm:text-4xl font-black text-white block">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 mt-1 block">
            Days
          </span>
        </div>

        <div className="rounded-2xl bg-white/5 p-3 border border-white/5 backdrop-blur-sm">
          <span className="font-mono text-2xl sm:text-4xl font-black text-white block">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 mt-1 block">
            Hours
          </span>
        </div>

        <div className="rounded-2xl bg-white/5 p-3 border border-white/5 backdrop-blur-sm">
          <span className="font-mono text-2xl sm:text-4xl font-black text-white block">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 mt-1 block">
            Mins
          </span>
        </div>

        <div className="rounded-2xl bg-[#ed4b35]/15 p-3 border border-[#ed4b35]/30 backdrop-blur-sm">
          <span className="font-mono text-2xl sm:text-4xl font-black text-[#ed4b35] block">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#ed4b35]/80 mt-1 block">
            Secs
          </span>
        </div>
      </div>
    </div>
  );
};
