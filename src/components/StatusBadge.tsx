import React from "react";

interface StatusBadgeProps {
  status: "active" | "coming-soon";
  className?: string;
  size?: "sm" | "md";
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className = "",
  size = "sm",
}) => {
  const isSmall = size === "sm";

  if (status === "active") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-[#ed4b35]/10 text-[#ed4b35] font-semibold border border-[#ed4b35]/30 ${
          isSmall ? "px-2.5 py-0.5 text-[11px]" : "px-3.5 py-1 text-xs"
        } ${className}`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ed4b35] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ed4b35]"></span>
        </span>
        Open for Submissions
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-white/10 text-white/70 font-medium border border-white/15 ${
        isSmall ? "px-2.5 py-0.5 text-[11px]" : "px-3.5 py-1 text-xs"
      } ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80"></span>
      Coming Soon
    </span>
  );
};
