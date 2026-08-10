"use client";

import { useState, useMemo } from "react";
import type { GlossaryTerm } from "@/data/glossary";

export function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.toLowerCase().trim();
    if (!query) return terms;
    return terms.filter(
      (t) =>
        t.term.toLowerCase().includes(query) || t.definition.toLowerCase().includes(query)
    );
  }, [q, terms]);

  return (
    <>
      <label htmlFor="glossary-search" className="sr-only">
        Search glossary
      </label>
      <input
        id="glossary-search"
        type="search"
        placeholder="Search terms…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="mb-8 w-full max-w-md border border-line bg-paper px-4 py-3 min-h-[48px] text-ink focus:border-meridian focus:outline-none focus:ring-1 focus:ring-meridian"
      />
      <dl className="border-t border-line">
        {filtered.map((t, i) => (
          <div
            key={t.slug}
            id={t.slug}
            className="scroll-mt-28 grid gap-2 border-b border-line/70 py-5 sm:grid-cols-[2.5rem_1fr]"
          >
            <span className="font-display text-xs tabular-nums text-brass sm:pt-1" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <dt className="font-display text-base text-ink">{t.term}</dt>
              <dd className="mt-2 text-mute leading-relaxed">{t.definition}</dd>
            </div>
          </div>
        ))}
      </dl>
    </>
  );
}
