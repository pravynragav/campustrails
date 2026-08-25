import { NextResponse } from "next/server";
import { siteConfig } from "@/config/siteConfig";

const baseOffset = siteConfig.initialVisitorCount || 1500;
let localVisitCount = baseOffset + 12;

export async function GET(request: Request) {
  const namespace = siteConfig.visitorCounterNamespace || "campus-trails-27-mepco-v1";
  const { searchParams } = new URL(request.url);
  const increment = searchParams.get("increment") === "true";

  try {
    // Attempt using public counter API (counterapi.dev)
    const endpoint = increment
      ? `https://api.counterapi.dev/v1/${namespace}/visits/up`
      : `https://api.counterapi.dev/v1/${namespace}/visits`;

    const res = await fetch(endpoint, {
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();
      if (typeof data.count === "number") {
        // Total visits = base offset + external live count
        const totalVisits = baseOffset + data.count;
        return NextResponse.json({ visits: totalVisits, source: "counterapi" });
      }
    }
  } catch (err) {
    // If external service is unavailable, fallback gracefully
    console.warn("External visitor counter API unreachable, using fallback.");
  }

  // Fallback counter logic
  if (increment) {
    localVisitCount += 1;
  }

  return NextResponse.json({
    visits: localVisitCount,
    source: "local",
  });
}
