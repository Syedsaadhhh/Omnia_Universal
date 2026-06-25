import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(120).optional().default(""),
  interest: z.string().trim().min(2).max(120),
  message: z.string().trim().min(20).max(4000),
  consent: z.literal("true"),
  website: z.string().max(0).optional().default(""),
});

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 4;

function getIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function rateLimited(ip: string) {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" };
    return entities[character];
  });
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") || request.nextUrl.protocol.replace(":", "");
  const expected = configured || (host ? `${protocol}://${host}` : request.nextUrl.origin);
  if (!origin) return process.env.NODE_ENV !== "production";
  try { return new URL(origin).origin === new URL(expected).origin; } catch { return false; }
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) return NextResponse.json({ message: "Request origin was not accepted." }, { status: 403 });
  if (rateLimited(getIp(request))) return NextResponse.json({ message: "Too many attempts. Please wait a few minutes and try again." }, { status: 429 });
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) return NextResponse.json({ message: "Unsupported request format." }, { status: 415 });

  try {
    const raw = await request.json();
    if (typeof raw.website === "string" && raw.website.length > 0) return NextResponse.json({ message: "Message received." });
    const parsed = schema.safeParse(raw);
    if (!parsed.success) return NextResponse.json({ message: "Please review the form fields and try again." }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) {
      console.error("Contact form environment variables are not configured.");
      return NextResponse.json({ message: "The contact channel is not configured yet. Please email us directly." }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const data = parsed.data;
    const safe = {
      name: escapeHtml(data.name), email: escapeHtml(data.email),
      company: escapeHtml(data.company || "Not provided"), interest: escapeHtml(data.interest),
      message: escapeHtml(data.message).replace(/\n/g, "<br />"),
    };

    const result = await resend.emails.send({
      from, to, replyTo: data.email,
      subject: `[Omnia inquiry] ${data.interest} — ${data.name}`,
      text: [`Name: ${data.name}`, `Email: ${data.email}`, `Company: ${data.company || "Not provided"}`, `Interest: ${data.interest}`, "", data.message].join("\n"),
      html: `<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;background:#090b12;color:#edf2ff;padding:32px;border-radius:18px"><div style="font-size:12px;letter-spacing:.18em;color:#67e8f9;margin-bottom:14px">OMNIA SEC AI LABS / NEW INQUIRY</div><h1 style="font-size:26px;margin:0 0 24px">${safe.interest}</h1><table style="width:100%;border-collapse:collapse;margin-bottom:24px;color:#c5cce0"><tr><td>Name</td><td>${safe.name}</td></tr><tr><td>Email</td><td>${safe.email}</td></tr><tr><td>Company</td><td>${safe.company}</td></tr></table><div style="padding:20px;background:#111522;border:1px solid #252a3a;border-radius:14px;line-height:1.7">${safe.message}</div></div>`,
    });

    if (result.error) {
      console.error("Resend delivery error:", result.error);
      return NextResponse.json({ message: "Delivery failed. Please try again or email us directly." }, { status: 502 });
    }
    return NextResponse.json({ message: "Inquiry transmitted. Expect a personal reply, not an automated sales sequence." });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ message: "Something went wrong while sending your message." }, { status: 500 });
  }
}
