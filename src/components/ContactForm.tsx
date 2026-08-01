"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import Link from "next/link";
import { subjects } from "@/lib/courses";
import { site } from "@/lib/site";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/** Minimum gap between submissions, to blunt bot spam against the free tier. */
const THROTTLE_MS = 30_000;

const enquiryTypes = [
  { value: "Book a Free Trial Lesson", label: "Book a free trial lesson" },
  { value: "General Enquiry", label: "General enquiry" },
  { value: "Pricing Information", label: "Pricing information" },
  { value: "Other", label: "Something else" },
];

const yearGroups = [
  "Year 7", "Year 8", "Year 9", "Year 10",
  "Year 11", "Year 12", "Year 13", "Not sure / other",
];

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25";
const label = "block text-sm font-semibold text-navy";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const enquiryRef = useRef<HTMLSelectElement>(null);
  const lastSentAt = useRef<number>(0);

  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  /*
   * The hero and navbar CTAs link to /contact?enquiry=trial. We read that on
   * mount and set the select directly rather than using useSearchParams,
   * which would force this whole form to render client-side only and leave it
   * out of the served HTML. Writing to an uncontrolled select via its ref
   * changes no React state, so it triggers no re-render.
   */
  useEffect(() => {
    const enquiry = new URLSearchParams(window.location.search).get("enquiry");
    if (enquiry === "trial" && enquiryRef.current) {
      enquiryRef.current.value = "Book a Free Trial Lesson";
    }
  }, []);

  const configured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: real users never see this field, bots fill everything.
    const honeypot = (form.elements.namedItem("company") as HTMLInputElement)?.value;
    if (honeypot) {
      setStatus("success");
      return;
    }

    const since = Date.now() - lastSentAt.current;
    if (lastSentAt.current && since < THROTTLE_MS) {
      setStatus("error");
      setMessage(
        `Please wait ${Math.ceil((THROTTLE_MS - since) / 1000)} seconds before sending another message.`,
      );
      return;
    }

    if (!configured) {
      setStatus("error");
      setMessage(
        "The enquiry form is not connected yet. Please email or WhatsApp us directly using the details on this page.",
      );
      return;
    }

    /*
     * The six subject checkboxes all share the name "subjects". EmailJS does
     * not reliably collect repeated field names, so the ticked values are
     * flattened into a single hidden input before sending. A timestamp is
     * added at the same time so the email shows when the enquiry came in.
     */
    const ticked = Array.from(
      form.querySelectorAll<HTMLInputElement>('input[name="subjects"]:checked'),
    ).map((input) => input.value);

    const subjectsField = form.elements.namedItem(
      "subjects_list",
    ) as HTMLInputElement | null;
    if (subjectsField) {
      subjectsField.value = ticked.length ? ticked.join(", ") : "None specified";
    }

    const timeField = form.elements.namedItem("time") as HTMLInputElement | null;
    if (timeField) {
      timeField.value = new Date().toLocaleString("en-GB", {
        dateStyle: "full",
        timeStyle: "short",
      });
    }

    setStatus("sending");
    setMessage("");

    try {
      await emailjs.sendForm(SERVICE_ID!, TEMPLATE_ID!, form, PUBLIC_KEY!);
      lastSentAt.current = Date.now();
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
      setMessage(
        "Something went wrong sending your message. Please try again, or contact us directly using the details on this page.",
      );
    }
  };

  /* ----------------------------- Success ----------------------------- */
  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-white p-9 text-center shadow-card sm:p-12">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
          <CheckCircle2 className="h-8 w-8 text-gold-deep" aria-hidden />
        </span>
        <h3 className="mt-6 text-2xl font-bold">Thank you — message sent</h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          We have received your enquiry and will reply within one working day.
          If it is urgent, message us on WhatsApp and we will respond faster.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-sm font-semibold text-burgundy underline underline-offset-4 hover:text-burgundy-deep"
        >
          Send another message
        </button>
      </div>
    );
  }

  /* ------------------------------ Form ------------------------------- */
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate={false}
      className="rounded-2xl border border-line bg-white p-7 shadow-card sm:p-9"
    >
      {!configured && (
        <div className="mb-7 flex gap-3 rounded-lg border border-gold/40 bg-gold/8 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden />
          <p className="text-sm leading-relaxed text-ink">
            <strong className="font-semibold">Form not connected.</strong> The
            EmailJS keys are missing, so submissions will not send. Add them to{" "}
            <code className="rounded bg-paper px-1.5 py-0.5 text-xs">.env.local</code>{" "}
            — see the project README.
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div className="sm:col-span-2">
          <label htmlFor="from_name" className={label}>
            Your name <span className="text-burgundy">*</span>
          </label>
          <input
            id="from_name"
            name="from_name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Adeyemi"
            className={`mt-2 ${field}`}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="from_email" className={label}>
            Email address <span className="text-burgundy">*</span>
          </label>
          <input
            id="from_email"
            name="from_email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={`mt-2 ${field}`}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={label}>
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+44 7000 000000"
            className={`mt-2 ${field}`}
          />
        </div>

        {/* Enquiry type */}
        <div>
          <label htmlFor="enquiry_type" className={label}>
            What is this about? <span className="text-burgundy">*</span>
          </label>
          <select
            id="enquiry_type"
            name="enquiry_type"
            ref={enquiryRef}
            required
            defaultValue="General Enquiry"
            className={`mt-2 ${field}`}
          >
            {enquiryTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {/* Year group */}
        <div>
          <label htmlFor="year_group" className={label}>
            Student&rsquo;s year group
          </label>
          <select
            id="year_group"
            name="year_group"
            defaultValue=""
            className={`mt-2 ${field}`}
          >
            <option value="">Please select…</option>
            {yearGroups.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* Subjects */}
        <div className="sm:col-span-2">
          <span className={label}>Subject(s) of interest</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {subjects.map((s) => (
              <label
                key={s.slug}
                className="cursor-pointer rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-navy transition-colors has-[:checked]:border-burgundy has-[:checked]:bg-burgundy has-[:checked]:text-white"
              >
                <input
                  type="checkbox"
                  name="subjects"
                  value={s.name}
                  className="sr-only"
                />
                {s.name}
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>
            Your message <span className="text-burgundy">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us a little about your child — their current level, the topics they find difficult, and what you would like them to achieve."
            className={`mt-2 resize-y ${field}`}
          />
        </div>

        {/* Honeypot — hidden from users, catches bots */}
        <div className="hidden" aria-hidden>
          <label htmlFor="company">Company (leave blank)</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Populated on submit — see handleSubmit. These are what the
            EmailJS template reads for {{subjects_list}} and {{time}}. */}
        <input type="hidden" name="subjects_list" defaultValue="" />
        <input type="hidden" name="time" defaultValue="" />

        {/* Consent */}
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 h-4 w-4 shrink-0 rounded border-line text-burgundy accent-[#7c1420]"
            />
            <span className="text-sm leading-relaxed text-muted">
              I agree that {site.name} may use the details above to respond to
              my enquiry, as described in the{" "}
              <Link
                href="/privacy"
                className="font-semibold text-burgundy underline underline-offset-2"
              >
                Privacy Notice
              </Link>
              . <span className="text-burgundy">*</span>
            </span>
          </label>
        </div>
      </div>

      {/* Error */}
      {status === "error" && message && (
        <div
          role="alert"
          className="mt-6 flex gap-3 rounded-lg border border-burgundy/30 bg-burgundy/5 p-4"
        >
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-burgundy" aria-hidden />
          <p className="text-sm leading-relaxed text-ink">{message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-burgundy px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-burgundy-deep hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            Send Enquiry
          </>
        )}
      </button>

      <p className="mt-4 text-xs text-muted">
        We normally reply within one working day. Fields marked{" "}
        <span className="text-burgundy">*</span> are required.
      </p>
    </form>
  );
}
