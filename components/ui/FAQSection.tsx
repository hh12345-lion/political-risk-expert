import type { FAQ } from "@/lib/schema";

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="mt-10">
      {title ? (
        <h2 className="font-display text-xl font-semibold uppercase tracking-[0.04em] text-ink sm:text-2xl">
          {title}
        </h2>
      ) : null}
      <div className={title ? "mt-6 space-y-4" : "space-y-4"}>
        {faqs.map((faq, i) => (
          <div key={i} className="chamber-card p-5">
            <h3 className="font-display text-base font-semibold uppercase tracking-[0.03em] text-ink">
              {faq.question}
            </h3>
            <p className="mt-2 leading-relaxed text-mute">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
