import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How TestPortal Virtual Academy collects, uses and protects the personal information you provide through this website.",
  alternates: { canonical: "/privacy" },
};

const updated = "31 July 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Notice"
        intro={`How we collect, use and protect the personal information you give us. Last updated ${updated}.`}
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="prose-brand space-y-10">
          <section>
            <h2 className="text-2xl font-bold">1. Who we are</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) provides online
              tuition to students from Year 7 to A-Level. Our registered address
              is {site.address.full}. For any question about this notice or about
              your personal data, contact us at{" "}
              <a
                href={`mailto:${site.email.general}`}
                className="font-semibold text-burgundy underline underline-offset-2"
              >
                {site.email.general}
              </a>
              .
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We are the data controller for the personal information described
              below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. What we collect</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              When you submit the enquiry form on this website, we collect only
              what you choose to enter:
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                "Your name",
                "Your email address",
                "Your telephone or WhatsApp number, if you provide one",
                "The nature of your enquiry",
                "The student's year group and subjects of interest, if you provide them",
                "The content of your message",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-base text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We do not use tracking cookies or advertising cookies on this
              website, and we do not build profiles of visitors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. Information about children</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our enquiry form is intended to be completed by a parent or
              guardian. Please provide only what is necessary for us to respond —
              a year group and the subjects of interest are usually enough. Please
              do not send medical, educational or other sensitive details about a
              child through the website form; we will ask for anything further
              directly, and securely, if it becomes relevant.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">4. Why we use it, and our lawful basis</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We use the information solely to respond to your enquiry, to
              arrange a trial lesson where requested, and to provide the
              information you have asked for. Our lawful basis is your consent,
              given when you tick the consent box on the form, and our legitimate
              interest in responding to enquiries about our services.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We will not add you to a marketing list without asking you
              separately, and we never sell personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">5. How your message reaches us</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The enquiry form is delivered by EmailJS, a third-party email
              delivery service, which transmits the contents of the form to our
              own inbox. EmailJS processes the data only in order to deliver the
              message. Your message is then held in our email account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">6. How long we keep it</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Where an enquiry does not lead to tuition, we keep the
              correspondence for up to twelve months and then delete it. Where it
              does lead to tuition, records are kept for as long as we provide
              services to you and for a reasonable period afterwards to meet our
              legal and accounting obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">7. Your rights</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Under the United Kingdom General Data Protection Regulation you
              have the right to:
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                "Ask what personal data we hold about you, and receive a copy",
                "Have inaccurate data corrected",
                "Ask us to delete your data",
                "Ask us to restrict how we use it",
                "Object to our use of it",
                "Withdraw consent at any time",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-base text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-muted">
              To exercise any of these rights, email{" "}
              <a
                href={`mailto:${site.email.general}`}
                className="font-semibold text-burgundy underline underline-offset-2"
              >
                {site.email.general}
              </a>
              . We will respond within one month.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              If you are unhappy with how we have handled your data, you may
              complain to the Information Commissioner&rsquo;s Office at{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-burgundy underline underline-offset-2"
              >
                ico.org.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">8. Security</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              This website is served over an encrypted HTTPS connection, and
              access to our email accounts is restricted to authorised staff. No
              transmission over the internet can be guaranteed completely secure,
              but we take reasonable measures to protect the information you send
              us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">9. Changes to this notice</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We may update this notice from time to time. The date at the top of
              this page shows when it was last revised.
            </p>
          </section>

          <div className="rounded-2xl border border-line bg-cream p-7">
            <p className="text-sm leading-relaxed text-muted">
              See also our{" "}
              <Link
                href="/terms"
                className="font-semibold text-burgundy underline underline-offset-2"
              >
                Terms of Use
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
