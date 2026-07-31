import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Video,
  ClipboardList,
  TrendingUp,
  CheckSquare,
  Users,
  User,
  Quote,
  GraduationCap,
} from "lucide-react";
import { Section, SectionHeading, Button, Stars } from "@/components/ui";
import SubjectIcon from "@/components/SubjectIcon";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/site";
import { subjects, curricula, pathway, differentiators } from "@/lib/courses";
import { testimonials } from "@/lib/testimonials";

const featureIcons = {
  video: Video,
  clipboard: ClipboardList,
  chart: TrendingUp,
  check: CheckSquare,
  users: Users,
  user: User,
} as const;

export default function HomePage() {
  const featured = testimonials.slice(0, 3);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-navy pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-burgundy/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold ring-1 ring-inset ring-white/15">
              Year 7 · GCSE · A-Level
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Your complete{" "}
              <span className="text-gold">STEM</span> learning journey
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              From Year 7 to A-Level with expert tutors, personalised lessons and
              measurable results — taught live, from the United Kingdom, to
              students anywhere in the world.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact?enquiry=trial" variant="gold" className="w-full sm:w-auto">
                Book a Free Trial Lesson
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/courses" variant="ghost" className="w-full sm:w-auto">
                Explore Our Courses
              </Button>
            </div>

            <p className="mt-8 font-display text-sm italic text-gold-light/80">
              {site.motto}
            </p>
          </div>

          {/* Crest */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden
                className="absolute inset-0 -m-6 rounded-full bg-white/5 blur-2xl"
              />
              <Image
                src="/logo.png"
                alt={`${site.name} crest`}
                width={1004}
                height={683}
                priority
                className="relative w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <dl className="grid grid-cols-2 divide-line sm:divide-x lg:grid-cols-4">
            {site.stats.map((stat) => (
              <div key={stat.label} className="px-2 py-8 text-center sm:py-10">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-bold text-burgundy sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= PATHWAY ================= */}
      <Section tone="white">
        <SectionHeading
          eyebrow="The pathway we teach"
          title="Three stages, one continuous journey"
          intro="Students join us at any point and stay with us as they progress. Because we teach the whole pathway, nothing is repeated and nothing is missed."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pathway.map((step, i) => (
            <Reveal key={step.stage} delay={i * 0.08}>
              <article className="relative flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-shadow hover:shadow-lift">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy font-display text-lg font-bold text-gold">
                  {i + 1}
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-burgundy">
                  {step.years}
                </p>
                <h3 className="mt-2 text-xl font-bold">{step.stage}</h3>
                <p className="mt-1 text-sm font-semibold text-navy-soft">
                  {step.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= SUBJECTS ================= */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Subjects we cover"
          title="Six subjects, taught by specialists"
          intro="Every tutor teaches only the subjects they are qualified and experienced in — from Year 7 right through to A-Level."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, i) => (
            <Reveal key={subject.slug} delay={i * 0.05}>
              <Link
                href={`/courses#${subject.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/8 text-burgundy transition-colors group-hover:bg-burgundy group-hover:text-white">
                  <SubjectIcon name={subject.icon} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{subject.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-gold-deep">
                  {subject.range}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {subject.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-burgundy">
                  View course
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= CURRICULA ================= */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Curricula we follow"
          title="Wherever your child studies"
          intro="We teach to the curriculum your child's school actually follows, and schedule lessons around your local time zone."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
      </Section>

      {/* ================= WHY CHOOSE US ================= */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="Why parents & students choose us"
          title="Teaching you can actually see working"
          intro="Tuition only works when parents can tell it is working. Everything below exists to make progress visible."
          tone="light"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, i) => {
            const Icon = featureIcons[item.icon as keyof typeof featureIcons];
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl bg-white/5 p-7 ring-1 ring-inset ring-white/10 transition-colors hover:bg-white/[0.08]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ================= TESTIMONIAL TEASER ================= */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="What families say"
          title="Trusted by parents and students"
          intro="A 4.9 out of 5 parent rating, earned across more than three hundred students."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card">
                <Quote className="h-7 w-7 text-gold" aria-hidden />
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

        <div className="mt-12 text-center">
          <Button href="/testimonials" variant="secondary">
            Read All Testimonials
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Section>

      {/* ================= RESULTS STRIP ================= */}
      <section className="border-y border-line bg-white py-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center sm:flex-row sm:justify-center sm:gap-14 sm:px-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-burgundy" aria-hidden />
            <div className="text-left">
              <p className="font-display text-2xl font-bold text-navy">95%</p>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                GCSE Pass Rate
              </p>
            </div>
          </div>
          <div className="hidden h-10 w-px bg-line sm:block" />
          <div className="flex items-center gap-3">
            <Stars count={5} />
            <div className="text-left">
              <p className="font-display text-2xl font-bold text-navy">4.9/5</p>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                Parent Rating
              </p>
            </div>
          </div>
          <div className="hidden h-10 w-px bg-line sm:block" />
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-burgundy" aria-hidden />
            <div className="text-left">
              <p className="font-display text-2xl font-bold text-navy">300+</p>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                Students Taught
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
