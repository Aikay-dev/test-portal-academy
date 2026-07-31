import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "./ui";
import { whatsappLink } from "@/lib/site";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-burgundy/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="eyebrow text-gold">Limited spaces for the upcoming intake</p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Book a free trial lesson today
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
          See how we teach before you commit to anything. We will assess your
          child&rsquo;s current level and show you exactly where the gaps are.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact?enquiry=trial" variant="gold" className="w-full sm:w-auto">
            Book Your Free Trial
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button href={whatsappLink()} variant="ghost" external className="w-full sm:w-auto">
            <MessageCircle className="h-4 w-4" aria-hidden />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
