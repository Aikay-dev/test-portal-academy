import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui";
import { navLinks, site } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-burgundy/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6">
        {/* Cream plaque — the crest's navy lettering vanishes on this background. */}
        <div className="rounded-2xl bg-cream p-5 shadow-xl ring-1 ring-gold/40">
          <Image src="/logo.png" alt="" width={1004} height={683} className="w-40" />
        </div>

        <p className="mt-8 font-display text-6xl font-bold text-gold sm:text-7xl">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
          The page you were looking for may have moved, or the address may have
          been typed incorrectly. Try one of the links below.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="gold">
            Back to Home
          </Button>
          <Button href="/contact" variant="ghost">
            Contact Us
          </Button>
        </div>

        <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-10 font-display text-sm italic text-gold-light/60">
          {site.motto}
        </p>
      </div>
    </div>
  );
}
