import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Target, Globe2, HeartHandshake, ArrowRight } from "lucide-react";
import { PageHeader, Section, SectionHeading, Button } from "@/components/ui";
import TeamCard from "@/components/TeamCard";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { team, credentials } from "@/lib/team";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Our Story, Approach and Team",
  description:
    "Meet the team behind TestPortal Virtual Academy. Professional subject specialists teaching STEM and English from Year 7 to A-Level.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Target,
    title: "Depth Over Coverage",
    body: "Our motto says it plainly: much about a little, not a little about much. We would rather a student truly understands a topic than skims six.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable Teaching",
    body: "Weekly written reports mean parents never have to guess whether tuition is working. Progress is documented, not asserted.",
  },
  {
    icon: Globe2,
    title: "Genuinely International",
    body: "We teach the British, American, Australian and Canadian curricula, scheduling lessons around the family's own time zone.",
  },
  {
    icon: HeartHandshake,
    title: "Confidence First",
    body: "Most students who struggle are not incapable — they have lost confidence. Rebuilding it is usually where the grades come from.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Academy"
        title="Quality teaching. Confident results."
        intro="TestPortal Virtual Academy is a UK-based online academy teaching STEM subjects and English Language to students from Year 7 through to A-Level."
      />

      {/* Story */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built around what actually moves a grade
            </h2>
            <div className="rule-brand mt-5" />

            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted">
              <p>
                TestPortal Virtual Academy was founded on a straightforward
                observation: most students who fall behind in mathematics and
                the sciences have not run out of ability. They have run out of
                confidence, usually after one topic went unaddressed and
                everything built on top of it started to wobble.
              </p>
              <p>
                So we teach the whole pathway — Key Stage 3, GCSE and A-Level —
                rather than parachuting in for exam season. That continuity lets
                us find the original gap instead of patching the symptom, and it
                means a student who joins us in Year 7 never has to start again
                with a new tutor who does not know their history.
              </p>
              <p>
                Every lesson is taught live on Microsoft Teams by a subject
                specialist, never pre-recorded. Every student begins with an
                assessment, and every parent receives a written report each week
                setting out what was covered, what improved, and what still
                needs work.
              </p>
              <p>
                Today we have taught more than three hundred students across the
                United Kingdom and internationally, hold a 4.9 out of 5 parent
                rating, and see a 95% GCSE pass rate across the subjects we
                teach.
              </p>
            </div>
          </div>

          {/* Crest + motto */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-2xl border border-line bg-cream p-9 text-center shadow-card">
                <Image
                  src="/logo.png"
                  alt={`${site.name} crest`}
                  width={1004}
                  height={683}
                  className="mx-auto w-full max-w-[16rem]"
                />
                <div className="rule-brand mx-auto mt-7" />
                <p className="mt-6 font-display text-lg italic leading-relaxed text-navy">
                  {site.motto}
                </p>
                <p className="mt-3 text-sm text-muted">
                  &ldquo;{site.mottoTranslation}&rdquo;
                </p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-burgundy">
                  Our guiding principle
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What we believe"
          title="How we approach teaching"
          intro="Four principles that shape every lesson we plan and every report we write."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.06}>
              <div className="flex h-full gap-5 rounded-2xl border border-line bg-white p-7 shadow-card">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-burgundy/8 text-burgundy">
                  <value.icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{value.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {value.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Meet the team"
          title="The people teaching your child"
          intro="Every tutor is a specialist in the subject they teach, and every tutor working with a child has extensive experience in teaching."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={`${member.name}-${i}`} delay={i * 0.06}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/director" variant="secondary">
            Read the Director&rsquo;s Welcome
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Section>

      {/* Credentials */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="Our standards"
          title="What you can rely on"
          tone="light"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl bg-white/5 p-7 ring-1 ring-inset ring-white/10">
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
