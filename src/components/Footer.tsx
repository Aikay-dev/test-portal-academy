import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site, whatsappLink } from "@/lib/site";
import { subjects } from "@/lib/courses";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      <div className="h-[3px] w-full bg-gradient-to-r from-gold via-burgundy to-navy" />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {site.description}
            </p>
            <p className="mt-5 font-display text-sm italic text-gold-light">
              {site.motto}
            </p>
            <p className="mt-1 text-xs text-white/50">{site.mottoTranslation}</p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Subjects
            </h3>
            <ul className="mt-4 space-y-2.5">
              {subjects.map((subject) => (
                <li key={subject.slug}>
                  <Link
                    href={`/courses#${subject.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {subject.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={`mailto:${site.email.general}`}
                  className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <span className="break-all">{site.email.general}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${site.phone.raw}`}
                  className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <address className="not-italic">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.postcode}
                  <br />
                  {site.address.country}
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <Link href="/privacy" className="text-white/50 transition-colors hover:text-white">
              Privacy Notice
            </Link>
            <Link href="/terms" className="text-white/50 transition-colors hover:text-white">
              Terms of Use
            </Link>
            <span className="text-white/40">Online STEM Tuition · Year 7 to A-Level</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
