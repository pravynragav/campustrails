import Link from "next/link";
import { ArrowLeft, Layers, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#f5f3ee] px-5 py-20 text-[#151515] text-center">
      <div className="rounded-3xl bg-white p-8 md:p-14 border border-black/10 shadow-lg max-w-lg w-full">
        <span className="font-mono text-6xl font-black text-[#ed4b35]">404</span>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-[#151515]">
          Page or Section Not Found
        </h1>
        <p className="mt-3 text-sm text-black/60 leading-relaxed">
          The publication section or page you are looking for does not exist or has been moved in Campus Trails 27.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#151515] px-6 py-3.5 text-xs font-bold text-white hover:bg-[#ed4b35] transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/sections"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-6 py-3.5 text-xs font-bold text-[#151515] hover:bg-black/5 transition-colors"
          >
            <Layers className="h-4 w-4" />
            <span>Browse All Sections</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
