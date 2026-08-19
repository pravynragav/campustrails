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
  Gamepad2,
  Award,
  HelpCircle,
  Film,
  Smile,
  Heart,
  History,
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
        return <BookOpen className="h-6 w-6" />;
      case "interactive-ct":
        return <Gamepad2 className="h-6 w-6" />;
      case "campus-chronicles":
      case "campus-life":
        return <Users className="h-6 w-6" />;
      case "one-question-many-voices":
      case "student-voices":
        return <MessageSquare className="h-6 w-6" />;
      case "diy-creative-corner":
      case "creative-corner":
        return <PenTool className="h-6 w-6" />;
      case "what-i-learned":
      case "tech-research":
        return <Cpu className="h-6 w-6" />;
      case "a-year-in-mepco":
        return <Award className="h-6 w-6" />;
      case "book-movie-reviews":
        return <Film className="h-6 w-6" />;
      case "seriousness-not-found":
        return <Smile className="h-6 w-6" />;
      case "everyday-heroes":
        return <Heart className="h-6 w-6" />;
      case "how-well-do-you-know-mepco":
        return <HelpCircle className="h-6 w-6" />;
      case "scenes-from-the-past":
      case "alumni-chronicles":
        return <History className="h-6 w-6" />;
      default:
        return <BookOpen className="h-6 w-6" />;
    }
  };

  return (
    <Link
      href={`/sections/${section.id}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#1e1e1e] p-7 text-[#f5f3ee] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#ed4b35]/50 hover:shadow-2xl hover:shadow-[#ed4b35]/20 ${
        !isActive ? "opacity-85" : ""
      } ${className}`}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold text-[#ed4b35]">
              {section.number}
            </span>
            <span className="h-px w-4 bg-white/20" />
          </div>
          <StatusBadge status={section.status} />
        </div>

        {/* Clean Glass Icon Box with Hover Fill */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:bg-[#ed4b35] group-hover:border-[#ed4b35] group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#ed4b35]/25">
          {getIcon()}
        </div>

        {/* Category Tag */}
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/60 transition-colors">
          {section.categoryTag}
        </span>

        {/* Section Title */}
        <h3 className="mt-1 text-2xl font-black tracking-tight text-white group-hover:text-[#ed4b35] transition-colors">
          {section.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors line-clamp-3">
          {section.shortDescription}
        </p>
      </div>

      {/* Card Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-wider">
        <span className="text-white/40 group-hover:text-white transition-colors">
          {isActive ? "View Section & Submit" : "Upcoming Section"}
        </span>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-[#ed4b35] group-hover:translate-x-1 shadow-sm">
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
