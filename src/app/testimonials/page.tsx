import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { PageHeader, Section, SectionHeading, Stars } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { testimonials, results } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials — What Parents and Students Say",
  description:
    "Read feedback from parents and students taught by TestPortal Virtual Academy. A 4.9 out of 5 parent rating across more than 300 students.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What families say"
        title="Feedback from parents and students"
        intro="The clearest measure of tuition is whether a parent would recommend it. Here is what the families we teach have said."
      />

      {/* Results */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <dl className="grid gap-px divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {results.map((r) => (
              <div key={r.label} className="px-4 py-9 text-center">
                <dd className="font-display text-4xl font-bold text-burgundy">
                  {r.value}
                </dd>
                <dt className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-navy">
                  {r.label}
                </dt>
                <p className="mt-1.5 text-xs text-muted">{r.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonials */}
      <Section tone="white">
        <SectionHeading
          eyebrow="In their own words"
          title="Trusted by more than 300 families"
          intro="Quotes are published with permission. Where a student is under eighteen, we identify them by year group only."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 0.07}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-shadow hover:shadow-lift">
                {/*
                  Placeholder badge: visible only in development, so a
                  half-filled testimonials page cannot reach production
                  unnoticed. Remove `placeholder: true` in lib/testimonials.ts
                  once the real quote is in.
                */}
                {t.placeholder && process.env.NODE_ENV === "development" && (
                  <span className="absolute right-4 top-4 rounded-full bg-gold px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-navy-deep">
                    Placeholder
                  </span>
                )}

                <Quote className="h-7 w-7 shrink-0 text-gold" aria-hidden />

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-6 border-t border-line pt-5">
                  <Stars count={t.rating} />
                  <p className="mt-3 text-sm font-bold text-navy">{t.author}</p>
                  <p className="text-xs text-muted">{t.relation}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pull quote */}
      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-10 w-10 text-gold" aria-hidden />
          <blockquote className="mt-7 font-display text-2xl font-medium leading-relaxed text-white sm:text-3xl">
            &ldquo;Test-Portal has helped me understand difficult topics and
            improve my grades with confidence.&rdquo;
          </blockquote>
          <div className="rule-brand mx-auto mt-8" />
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-gold">
            Year 11 Student
          </p>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
