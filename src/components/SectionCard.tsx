import React from "react";
import Link from "next/link";
import { SectionItem } from "@/config/siteConfig";
import { StatusBadge } from "./StatusBadge";
import {
  BookOpen,
  Users,
  MessageSquare,
  PenTool,
  Cpu,
  GraduationCap,
  ArrowUpRight,
  Clock,
} from "lucide-react";

interface SectionCardProps {
  section: SectionItem;
  className?: string;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  section,
  className = "",
}) => {
  const isActive = section.status === "active";

  // Select appropriate icon
  const getIcon = () => {
    switch (section.id) {
      case "main-article-collection":
        return <BookOpen className="h-6 w-6 text-white" />;
      case "campus-life":
        return <Users className="h-6 w-6 text-white" />;
      case "student-voices":
        return <MessageSquare className="h-6 w-6 text-white" />;
      case "creative-corner":
        return <PenTool className="h-6 w-6 text-white" />;
      case "tech-research":
        return <Cpu className="h-6 w-6 text-white" />;
      case "alumni-chronicles":
        return <GraduationCap className="h-6 w-6 text-white" />;
      default:
        return <BookOpen className="h-6 w-6 text-white" />;
    }
  };

  return (
    <Link
      href={`/sections/${section.id}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#1e1e1e] p-7 text-[#f5f3ee] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#ed4b35]/50 hover:shadow-2xl hover:shadow-[#ed4b35]/10 ${
        !isActive ? "opacity-85" : ""
      } ${className}`}
    >
      {/* Subtle graphic background gradient */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#ed4b35]/5 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-sm font-bold text-[#ed4b35]">
            {section.number}
          </span>
          <StatusBadge status={section.status} />
        </div>

        {/* Icon Circle */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#ed4b35]/20 group-hover:border-[#ed4b35]/30">
          {getIcon()}
        </div>

        {/* Category Tag */}
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          {section.categoryTag}
        </span>

        {/* Section Title */}
        <h3 className="mt-1 text-2xl font-black tracking-tight text-white group-hover:text-[#ed4b35] transition-colors">
          {section.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm leading-relaxed text-white/60 line-clamp-3">
          {section.shortDescription}
        </p>
      </div>

      {/* Card Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-wider">
        <span className="text-white/40 group-hover:text-white transition-colors">
          {isActive ? "View Section & Submit" : "View Section Info"}
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#ed4b35] group-hover:text-white group-hover:translate-x-1">
          {isActive ? (
            <ArrowUpRight className="h-4 w-4" />
          ) : (
            <Clock className="h-4 w-4 text-amber-400 group-hover:text-white" />
          )}
        </div>
      </div>
    </Link>
  );
};
