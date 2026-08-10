import type { FAQ } from "@/lib/schema";

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="mt-10">
      {title ? (
        <h2 className="font-display text-xl tracking-tight text-ink sm:text-2xl">{title}</h2>
      ) : null}
      <div className={title ? "mt-6 border-t border-line" : "border-t border-line"}>
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-line py-5">
            <h3 className="font-display text-base text-ink">
              <span className="mr-3 text-xs tabular-nums text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              {faq.question}
            </h3>
            <p className="mt-2 pl-8 text-mute leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
