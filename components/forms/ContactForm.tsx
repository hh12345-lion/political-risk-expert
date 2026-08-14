"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { PRACTICE_AREAS } from "@/data/contact-options";

const inputClass =
  "w-full min-w-0 max-w-full border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-mute/50 focus:border-meridian focus:outline-none focus:ring-1 focus:ring-meridian min-h-[48px]";
const labelClass =
  "mb-1.5 block font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-ink";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      practiceArea: String(data.get("practice_area") ?? "").trim(),
      riskType: "",
      forum: "",
      claimValue: "",
      countries: "",
      message: String(data.get("message") ?? "").trim(),
      urgency: "",
      _gotcha: String(data.get("_gotcha") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) router.push("/thank-you");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 w-full max-w-lg space-y-5">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="min-w-0">
        <label className={labelClass} htmlFor="name">
          Name *
        </label>
        <input id="name" name="name" required autoComplete="name" className={inputClass} />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="company">
          Firm *
        </label>
        <input
          id="company"
          name="company"
          required
          autoComplete="organization"
          className={inputClass}
        />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="practice_area">
          Matter type
        </label>
        <select id="practice_area" name="practice_area" className={inputClass}>
          <option value="">Select if known</option>
          {PRACTICE_AREAS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="message">
          Brief *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${inputClass} min-h-[112px]`}
          placeholder="Forum, host state, and the political risk at issue."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[48px] w-full items-center justify-center bg-ink px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-meridian disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Enquire"}
      </button>

      {status === "error" && (
        <p className="text-sm text-signal" role="alert">
          Something went wrong. Email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}
