import type { Metadata } from "next";
import Image from "next/image";
import { Quote, GraduationCap, Globe2 } from "lucide-react";
import { Section, SectionHeading, Button } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { director } from "@/lib/director";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet the Director — Olufemi Adebayo",
  description:
    "A welcome from Olufemi Adebayo, Director of TestPortal Virtual Academy — mathematics educator, researcher and academic mentor.",
  alternates: { canonical: "/director" },
};

export default function DirectorPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-navy pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-burgundy/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-14">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
              <div
                aria-hidden
                className="absolute inset-0 -m-5 rounded-[2rem] bg-gold/15 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] bg-cream p-2.5 shadow-2xl ring-1 ring-gold/40">
                <Image
                  src={director.image}
                  alt={`${director.name}, ${director.title} of ${site.name}`}
                  width={900}
                  height={1200}
                  priority
                  className="w-full rounded-[1.35rem] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="lg:col-span-7">
            <p className="eyebrow text-gold">Meet the Director</p>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
              {director.name}
            </h1>
            <p className="mt-3 text-base font-semibold text-gold-light">
              {director.title}
            </p>
            <div className="rule-brand mt-6" />

            <p className="mt-7 text-lg leading-relaxed text-white/80">
              {director.opening}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 ring-1 ring-inset ring-white/15">
                <GraduationCap className="h-4 w-4 text-gold" aria-hidden />
                {director.teaches}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE ADDRESS ================= */}
      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4">
            <Quote className="h-8 w-8 shrink-0 text-gold" aria-hidden />
            <div className="h-px flex-1 bg-line" />
          </div>

          <div className="mt-9 space-y-6">
            {director.address.map((paragraph, i) => (
              <Reveal key={i} delay={Math.min(i, 3) * 0.04}>
                <p className="text-base leading-[1.85] text-ink sm:text-[1.0625rem]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Closing pull quote */}
          <Reveal>
            <blockquote className="mt-12 border-l-4 border-gold bg-cream py-7 pl-7 pr-6">
              <p className="font-display text-xl italic leading-relaxed text-navy sm:text-2xl">
                {director.closing}
              </p>
            </blockquote>
          </Reveal>

          {/* Signature */}
          <div className="mt-10 border-t border-line pt-7">
            <p className="font-display text-xl font-bold text-navy">
              {director.name}
            </p>
            <p className="mt-1 text-sm text-muted">
              {director.title}, {site.name}
            </p>
          </div>
        </div>
      </Section>

      {/* ================= PRINCIPLES ================= */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What this means in practice"
          title="The principles behind the teaching"
          intro="Four commitments drawn from the Director's address that shape how every lesson at the Academy is planned and taught."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {director.principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-burgundy font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= CURRICULA ================= */}
      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <Globe2 className="mx-auto h-9 w-9 text-gold" aria-hidden />
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Internationally recognised curricula
          </h2>
          <div className="rule-brand mx-auto mt-6" />
          <p className="mt-6 text-base leading-relaxed text-white/75">
            Our programmes draw on curricula from five education systems, each
            adapted to the learner&rsquo;s level and individual goals.
          </p>

          <ul className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {director.curricula.map((country) => (
              <li
                key={country}
                className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/85 ring-1 ring-inset ring-white/15"
              >
                {country}
              </li>
            ))}
          </ul>

          <div className="mt-11">
            <Button href="/courses" variant="gold">
              Explore Our Courses
            </Button>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
