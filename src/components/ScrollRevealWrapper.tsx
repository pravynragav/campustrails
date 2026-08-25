"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade-left" | "fade-right" | "scale-up" | "blur-in" | "text-line-mask";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export const ScrollRevealWrapper: React.FC<ScrollRevealProps> = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 850,
  className = "",
  threshold = 0.12,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  if (variant === "text-line-mask") {
    return (
      <div ref={ref} className={`text-line-wrap ${isVisible ? "reveal" : ""} ${className}`}>
        <div
          style={{
            transitionDuration: `${duration}ms`,
            transitionDelay: `${delay}ms`,
            transitionTimingFunction: "cubic-bezier(0.24, 1, 0.36, 1)",
          }}
          className="text-line-inner"
        >
          {children}
        </div>
      </div>
    );
  }

  const getVariantStyles = () => {
    if (!isVisible) {
      switch (variant) {
        case "fade-up":
          return "opacity-0 translate-y-14";
        case "fade-left":
          return "opacity-0 -translate-x-14";
        case "fade-right":
          return "opacity-0 translate-x-14";
        case "scale-up":
          return "opacity-0 scale-90";
        case "blur-in":
          return "opacity-0 blur-md scale-95";
        default:
          return "opacity-0 translate-y-14";
      }
    }

    return "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0";
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.24, 1, 0.36, 1)",
      }}
      className={`transition-all duration-700 ease-out ${getVariantStyles()} ${className}`}
    >
      {children}
    </div>
  );
};
