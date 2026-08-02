"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigating from the mobile menu should always close it.
  const closeMenu = () => setOpen(false);

  // Solid background once the page has scrolled past the hero's top edge.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /*
   * The bar is glass at every scroll position — it never becomes an opaque
   * white strip. At the top it is fully transparent so the navy hero runs
   * straight through it; once scrolled it becomes tinted navy glass, which
   * keeps the light text legible over the white and cream sections below.
   * Contents are therefore always styled for a dark background.
   */
  const glass = scrolled || open;

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        glass
          ? "border-b border-white/10 bg-navy/70 shadow-lg backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {/* Thin brand rule, echoing the gold trim on the crest. Hidden while the
          bar is transparent — its navy end is invisible against the hero and
          the rest reads as a stray line floating over the page. */}
      <div
        className={cn(
          "h-[3px] w-full bg-gradient-to-r from-navy via-burgundy to-gold transition-opacity duration-300",
          glass ? "opacity-100" : "opacity-0",
        )}
      />

      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6">
        <Logo variant="light" />

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                    active ? "text-gold" : "text-white/75 hover:text-white",
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          {/* Six nav items plus a CTA already fill the bar at lg — the phone
              number only appears once there is genuinely room for it. */}
          <a
            href={`tel:+${site.phone.raw}`}
            className="hidden items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white xl:flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone.display}
          </a>
          <Link
            href="/contact?enquiry=trial"
            className="rounded-full bg-burgundy px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-burgundy-deep hover:shadow-lift"
          >
            Book a Free Trial
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 rounded-md p-2 text-white transition-colors lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-white/10 bg-navy/90 backdrop-blur-xl transition-[max-height] duration-300 ease-out lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-t-transparent",
        )}
      >
        <ul className="space-y-1 px-4 py-4">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    active
                      ? "bg-white/10 text-gold"
                      : "text-white/80 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="space-y-3 border-t border-white/10 px-4 py-4">
          <Link
            href="/contact?enquiry=trial"
            onClick={closeMenu}
            className="block rounded-full bg-burgundy px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Book a Free Trial Lesson
          </Link>
          <a
            href={`tel:+${site.phone.raw}`}
            className="flex items-center justify-center gap-2 py-1 text-sm font-medium text-white/70"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone.display}
          </a>
        </div>
      </div>
    </header>
  );
}
