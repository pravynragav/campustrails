import { NextResponse } from "next/server";
import { siteConfig } from "@/config/siteConfig";

export async function GET() {
  const csvUrl = siteConfig.googleSheetCsvUrl || process.env.NEXT_PUBLIC_SHEET_CSV_URL;

  if (!csvUrl || csvUrl.trim() === "") {
    return NextResponse.json({
      count: null,
      configured: false,
      message: "Google Sheet CSV URL not configured yet. Publish your responses Google Sheet to Web as CSV and add the URL in siteConfig.ts or NEXT_PUBLIC_SHEET_CSV_URL.",
    });
  }

  try {
    // Fetch CSV with revalidation (cache for 60s to prevent spamming Google Sheets)
    const response = await fetch(csvUrl, {
      next: { revalidate: 60 },
      headers: {
        "User-Agent": "CampusTrails27-Counter/1.0",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const csvText = await response.text();

    // Parse CSV lines (split by newlines and exclude empty lines)
    const lines = csvText
      .split(/\r?\n/)
      .filter((line) => line.trim().length > 0);

    // Header line is line 0, so actual response count is lines.length - 1
    const count = Math.max(0, lines.length - 1);

    return NextResponse.json({
      count,
      configured: true,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching Google Form submission count:", error);
    return NextResponse.json(
      {
        count: null,
        configured: true,
        error: "Failed to fetch response count from Google Sheet.",
      },
      { status: 500 }
    );
  }
}
