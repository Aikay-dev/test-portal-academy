import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms on which you may use the TestPortal Virtual Academy website.",
  alternates: { canonical: "/terms" },
};

const updated = "31 July 2026";

const sections = [
  {
    heading: "1. About these terms",
    body: [
      `These terms govern your use of the ${site.name} website. By using this website you accept them. If you do not accept them, please do not use the site.`,
      "These terms cover the website only. Tuition itself is provided under a separate agreement made when you enrol a student with us.",
    ],
  },
  {
    heading: "2. Using this website",
    body: [
      "You may use this website to learn about our services and to contact us. You must not use it in any way that is unlawful, that attempts to gain unauthorised access to it, or that interferes with its operation or with other users' access to it.",
      "You must not submit false information through the enquiry form, or use it to send unsolicited or automated messages.",
    ],
  },
  {
    heading: "3. Enquiries and trial lessons",
    body: [
      "Submitting the enquiry form does not create a contract for tuition. It is a request for information, which we will respond to.",
      "Free trial lessons are offered at our discretion and subject to tutor availability. We may limit trial lessons to one per student.",
      "Fees, lesson schedules and cancellation arrangements are confirmed in writing before tuition begins.",
    ],
  },
  {
    heading: "4. Information on this website",
    body: [
      "We take care to keep the information on this website accurate and current, but we do not warrant that it is complete or free from error. Course content, subject availability and teaching arrangements may change.",
      "Statistics shown on this website, including pass rates, student numbers and ratings, describe past results across the students we have taught. They are not a promise or guarantee of any particular outcome for an individual student.",
    ],
  },
  {
    heading: "5. Intellectual property",
    body: [
      `All content on this website — including the ${site.name} name, crest, text, layout and design — is owned by us or used with permission, and is protected by copyright and trade mark law.`,
      "You may view and print pages for your own personal use. You may not reproduce, republish or use any part of this website for commercial purposes without our written permission.",
    ],
  },
  {
    heading: "6. Third-party links and services",
    body: [
      "This website links to third-party services, including WhatsApp, Microsoft Teams and an embedded map. We are not responsible for the content, availability or privacy practices of those services, and their own terms apply to your use of them.",
    ],
  },
  {
    heading: "7. Availability",
    body: [
      "We aim to keep this website available at all times, but we do not guarantee uninterrupted access. We may suspend, withdraw or alter all or any part of the site without notice.",
    ],
  },
  {
    heading: "8. Our liability",
    body: [
      "To the extent permitted by law, we exclude liability for any loss or damage arising from your use of, or inability to use, this website, or from reliance on any information published on it.",
      "Nothing in these terms excludes or limits our liability for death or personal injury caused by negligence, for fraud, or for any other liability that cannot lawfully be excluded.",
    ],
  },
  {
    heading: "9. Governing law",
    body: [
      "These terms are governed by the laws of England and Wales, and any dispute relating to them is subject to the exclusive jurisdiction of the courts of England and Wales.",
    ],
  },
  {
    heading: "10. Changes to these terms",
    body: [
      "We may revise these terms at any time. The date shown at the top of this page indicates when they were last updated. Please check this page periodically.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        intro={`The terms on which you may use this website. Last updated ${updated}.`}
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold">{section.heading}</h2>
              {section.body.map((para, i) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </section>
          ))}

          <div className="rounded-2xl border border-line bg-cream p-7">
            <p className="text-sm leading-relaxed text-muted">
              See also our{" "}
              <Link
                href="/privacy"
                className="font-semibold text-burgundy underline underline-offset-2"
              >
                Privacy Notice
              </Link>
              . Questions about either document can be sent to{" "}
              <a
                href={`mailto:${site.email.general}`}
                className="font-semibold text-burgundy underline underline-offset-2"
              >
                {site.email.general}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
