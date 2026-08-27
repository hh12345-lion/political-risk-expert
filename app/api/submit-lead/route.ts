import { NextResponse } from "next/server";
import { appendRow, isGoogleSheetsConfigured } from "@/lib/google-sheets";


function getSiteDomain(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://politicalriskexpert.com";
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return "politicalriskexpert.com";
  }
}
const BRAND_NAME = "Political Risk Expert";

function getLeadWebhookUrl(): string {
  return (
    process.env.Lead_notification_url ||
    process.env.LEAD_NOTIFICATION_URL ||
    ""
  ).trim();
}

type LeadPayload = {
  fullName?: unknown;
  full_name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  practiceArea?: unknown;
  practice_area?: unknown;
  riskType?: unknown;
  risk_type?: unknown;
  forum?: unknown;
  claimValue?: unknown;
  claim_value?: unknown;
  countries?: unknown;
  message?: unknown;
  urgency?: unknown;
  _gotcha?: unknown;
};

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  if (body._gotcha) {
    return NextResponse.json({ error: "Submission rejected." }, { status: 400 });
  }

  const fullName = sanitize(String(body.fullName ?? body.full_name ?? ""));
  const email = String(body.email ?? "")
    .toLowerCase()
    .trim();
  const phone = sanitize(String(body.phone ?? ""));
  const company = sanitize(String(body.company ?? ""));
  const practiceArea = sanitize(
    String(body.practiceArea ?? body.practice_area ?? "")
  );
  const riskType = sanitize(String(body.riskType ?? body.risk_type ?? ""));
  const forum = sanitize(String(body.forum ?? ""));
  const claimValue = sanitize(String(body.claimValue ?? body.claim_value ?? ""));
  const countries = sanitize(String(body.countries ?? ""));
  const message = sanitize(String(body.message ?? ""));
  const urgency = sanitize(String(body.urgency ?? ""));

  if (!fullName || !email || !company || !message) {
    return NextResponse.json(
      { error: "Name, email, law firm, and description are required." },
      { status: 400 }
    );
  }

  const sheetsConfigured = isGoogleSheetsConfigured();
  const webhookUrl = getLeadWebhookUrl();

  if (!sheetsConfigured && !webhookUrl) {
    return NextResponse.json(
      {
        error: "Lead storage not configured.",
        message:
          "Set GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID and/or Lead_notification_url.",
      },
      { status: 503 }
    );
  }

  const row = [
    new Date().toISOString(),
    fullName,
    company,
    email,
    phone,
    practiceArea,
    riskType,
    forum,
    claimValue,
    countries,
    message,
    urgency,
    BRAND_NAME,
  ];

  let sheetsOk = false;
  let webhookOk = false;

  if (sheetsConfigured) {
    try {
      await appendRow(row);
      sheetsOk = true;
    } catch (error) {
      const err = error as { message?: string; response?: { data?: unknown } };
      console.error("Google Sheets write failed:", {
        message: err?.message,
        details: err?.response?.data,
        timestamp: new Date().toISOString(),
      });
      // Sheets is the primary store — do not pretend success if it fails
      return NextResponse.json(
        {
          error: "Failed to save submission to Google Sheets.",
          message: err?.message ?? "Sheets append failed",
        },
        { status: 500 }
      );
    }
  }

  if (webhookUrl) {
    const outbound = {
      "Full Name": fullName,
      Email: email,
      "Phone Number": phone,
      "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
    };

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outbound),
      });
      webhookOk = res.ok;
      if (!res.ok) {
        console.error("Lead webhook rejected:", res.status);
      }
    } catch (error) {
      console.error("Lead webhook unreachable:", error);
    }

    // Webhook-only mode: must succeed
    if (!sheetsConfigured && !webhookOk) {
      return NextResponse.json({ error: "WEBHOOK_FAILED" }, { status: 502 });
    }
  }

  if (!sheetsOk && !webhookOk) {
    return NextResponse.json({ error: "Lead was not saved." }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    savedTo: sheetsOk ? "sheets" : "webhook",
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
  });
}
