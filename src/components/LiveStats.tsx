"use client";

import React, { useEffect, useState } from "react";
import { Users, FileCheck, Eye, RefreshCw, Sparkles, CheckCircle2, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface StatsData {
  visitors: number | null;
  submissions: number | null;
  submissionsConfigured: boolean;
  loading: boolean;
}

export const LiveStats: React.FC = () => {
  const [stats, setStats] = useState<StatsData>({
    visitors: null,
    submissions: null,
    submissionsConfigured: false,
    loading: true,
  });

  const fetchStats = async () => {
    try {
      // 1. Fetch Visitor Count (increment only once per browser session)
      const hasVisitedSession = sessionStorage.getItem("ct27_visited");
      const incrementFlag = !hasVisitedSession ? "?increment=true" : "";
      
      const visitorRes = await fetch(`/api/visitor-count${incrementFlag}`);
      const visitorData = await visitorRes.json();
      if (!hasVisitedSession) {
        sessionStorage.setItem("ct27_visited", "true");
      }

      // 2. Fetch Google Form Submissions Count
      const submissionsRes = await fetch("/api/submissions-count");
      const submissionsData = await submissionsRes.json();

      setStats({
        visitors: visitorData.visits ?? null,
        submissions: submissionsData.count ?? null,
        submissionsConfigured: Boolean(submissionsData.configured && submissionsData.count !== null),
        loading: false,
      });
    } catch (err) {
      console.error("Failed to load live stats:", err);
      setStats((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="w-full rounded-3xl bg-white border border-black/10 p-6 md:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ed4b35]">
            <Sparkles className="h-4 w-4" />
            <span>Live Activity Tracker</span>
          </div>
          <h3 className="mt-1 text-2xl font-black text-[#151515]">
            Campus Engagement & Stats
          </h3>
        </div>

        <button
          onClick={fetchStats}
          disabled={stats.loading}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f5f3ee] px-4 py-2 text-xs font-semibold text-black/70 hover:bg-black/5 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${stats.loading ? "animate-spin text-[#ed4b35]" : ""}`} />
          <span>Refresh Stats</span>
        </button>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {/* Visitor Counter Card */}
        <div className="group relative overflow-hidden rounded-2xl bg-[#f5f3ee] p-5 border border-black/5 transition-all hover:shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-black/50">
              Total Visitors
            </span>
            <div className="rounded-xl bg-[#ed4b35]/10 p-2.5 text-[#ed4b35]">
              <Eye className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-4">
            <div className="text-4xl font-black text-[#151515]">
              {stats.loading ? (
                <span className="inline-block h-8 w-20 animate-pulse rounded bg-black/10" />
              ) : stats.visitors !== null ? (
                stats.visitors.toLocaleString()
              ) : (
                "150+"
              )}
            </div>
            <p className="mt-1 text-xs text-black/60 font-medium">
              People who have visited Campus Trails 27
            </p>
          </div>
        </div>

        {/* Submissions Counter Card */}
        <div className="group relative overflow-hidden rounded-2xl bg-[#f5f3ee] p-5 border border-black/5 transition-all hover:shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-black/50">
              Form Responses
            </span>
            <div className="rounded-xl bg-[#151515] p-2.5 text-white">
              <FileCheck className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-4">
            <div className="text-4xl font-black text-[#151515]">
              {stats.loading ? (
                <span className="inline-block h-8 w-20 animate-pulse rounded bg-black/10" />
              ) : stats.submissionsConfigured && stats.submissions !== null ? (
                stats.submissions.toLocaleString()
              ) : (
                <span className="text-xl font-bold text-amber-600">Pending URL</span>
              )}
            </div>

            {stats.submissionsConfigured ? (
              <p className="mt-1 text-xs text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Live connected to Google Form responses
              </p>
            ) : (
              <p className="mt-1 text-xs text-black/60 font-medium flex items-center gap-1">
                <HelpCircle className="h-3.5 w-3.5 text-amber-500" />
                Add published Google Sheet CSV link in siteConfig
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
