import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { PageHeader, Section, SectionHeading } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Trial Lesson",
  description:
    "Get in touch with TestPortal Virtual Academy. Book a free trial lesson, ask about pricing, or speak to us on WhatsApp about online STEM tuition.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: Mail,
    label: "Email us",
    value: site.email.general,
    href: `mailto:${site.email.general}`,
  },
  {
    icon: Phone,
    label: "Call us",
    value: site.phone.display,
    href: `tel:+${site.phone.raw}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us directly",
    href: whatsappLink(),
    external: true,
  },
];

export default function ContactPage() {
  const mapQuery = encodeURIComponent(site.address.full);

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Book a free trial lesson"
        intro="Tell us about your child and we will arrange a free, no-obligation trial lesson with a specialist tutor. No payment details required."
      />

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Details */}
          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-line bg-cream p-7 shadow-card">
              <h2 className="text-lg font-bold">Contact details</h2>
              <div className="rule-brand mt-4" />

              <ul className="mt-6 space-y-5">
                {details.map((d) => (
                  <li key={d.label}>
                    <a
                      href={d.href}
                      {...(d.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-start gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-burgundy/8 text-burgundy transition-colors group-hover:bg-burgundy group-hover:text-white">
                        <d.icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-[0.12em] text-muted">
                          {d.label}
                        </span>
                        <span className="mt-0.5 block break-words text-sm font-semibold text-navy group-hover:text-burgundy">
                          {d.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}

                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/8 text-navy">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-muted">
                      Registered address
                    </span>
                    <address className="mt-0.5 text-sm font-semibold not-italic text-navy">
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.postcode}
                      <br />
                      {site.address.country}
                    </address>
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/8 text-navy">
                    <Clock className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.12em] text-muted">
                      Response time
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-navy">
                      Within one working day
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-line shadow-card">
              <iframe
                title={`Map showing ${site.name} at ${site.address.full}`}
                src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>

            {/* Trial callout */}
            <div className="rounded-2xl bg-navy p-7 text-white">
              <h2 className="text-lg font-bold text-white">
                What happens after you enquire
              </h2>
              <ol className="mt-5 space-y-4">
                {[
                  "We reply within one working day to understand what your child needs.",
                  "We schedule a free trial lesson with a specialist in that subject.",
                  "You receive honest feedback on where they are and what would help.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy-deep">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-white/75">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="Questions parents ask us most"
          intro="If your question is not answered here, send it using the form above and we will reply directly."
        />
        <div className="mt-14">
          <FAQ />
        </div>
      </Section>
    </>
  );
}
