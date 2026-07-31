import type { Metadata } from "next";
import { Check, Users, User } from "lucide-react";
import { PageHeader, Section, SectionHeading, Button } from "@/components/ui";
import SubjectIcon from "@/components/SubjectIcon";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { subjects, curricula } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses — Maths, Sciences, Computer Science & English",
  description:
    "Online tuition in Mathematics, Physics, Chemistry, Biology, Computer Science and English Language, from Year 7 through GCSE to A-Level. Aligned to AQA, Pearson Edexcel and OCR.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we teach"
        title="Courses built around the specification"
        intro="Six subjects, three stages, and lessons aligned to the exact exam board your child's school follows. Every course below runs from Year 7 to A-Level."
      />

      {/* Quick jump */}
      <div className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-bold uppercase tracking-[0.14em] text-muted">
              Jump to:
            </span>
            {subjects.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-burgundy"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery formats */}
      <Section tone="white">
        <SectionHeading
          eyebrow="How lessons are delivered"
          title="One-to-one or small group"
          intro="Both formats are taught live on Microsoft Teams by the same specialist tutors. The right choice depends on your child."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/8 text-burgundy">
                <User className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-bold">One-to-One Tuition</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The tutor&rsquo;s full attention, and a lesson that moves at
                exactly your child&rsquo;s pace. Best where there are specific
                gaps to close, confidence to rebuild, or an exam close at hand.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Lesson plan built around one student",
                  "Pace adjusts week to week",
                  "Ideal for exam-year catch-up",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-ink">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/8 text-navy">
                <Users className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-bold">Small-Group Tuition</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Small enough that every student is known and questioned, large
                enough that lessons stay collaborative. More affordable, and
                some students genuinely work better alongside peers.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Lower cost per lesson",
                  "Learning alongside peers at the same level",
                  "Structured, specification-led teaching",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-ink">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Subject detail */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Subject by subject"
          title="What your child will actually study"
          intro="Each subject below is broken down by stage, with the topics we cover and the exam boards we teach to."
        />

        <div className="mt-14 space-y-8">
          {subjects.map((subject) => (
            <Reveal key={subject.slug}>
              <article
                id={subject.slug}
                className="scroll-mt-28 overflow-hidden rounded-2xl border border-line bg-white shadow-card"
              >
                {/* Subject header */}
                <div className="border-b border-line bg-navy px-7 py-7 sm:px-9">
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                        <SubjectIcon name={subject.icon} />
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{subject.name}</h3>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-gold">
                          {subject.range}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {subject.boards.map((board) => (
                        <span
                          key={board}
                          className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-inset ring-white/15"
                        >
                          {board}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70">
                    {subject.blurb}
                  </p>
                </div>

                {/* Levels */}
                <div className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
                  {subject.levels.map((level) => (
                    <div key={level.stage} className="p-7 sm:p-8">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
                        {level.years}
                      </p>
                      <h4 className="mt-1.5 text-lg font-bold">{level.stage}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {level.summary}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {level.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-start gap-2.5 text-sm text-ink"
                          >
                            <Check
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-deep"
                              aria-hidden
                            />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Curricula */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Curricula we follow"
          title="Not only the British curriculum"
          intro="Students outside the United Kingdom are taught to their own national curriculum, with lessons scheduled around their local time zone."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {curricula.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-line bg-white p-7 text-center shadow-card">
                <span className="text-4xl" role="img" aria-label={c.name}>
                  {c.flag}
                </span>
                <h3 className="mt-4 text-base font-bold leading-snug">{c.name}</h3>
                <p className="mt-2 text-sm text-muted">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact?enquiry=trial">Book a Free Trial Lesson</Button>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
