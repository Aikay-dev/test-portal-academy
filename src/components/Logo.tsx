import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  /** `light` renders the wordmark in white, for use on the navy footer. */
  variant?: "dark" | "light";
  /** Hide the wordmark and show the crest alone. */
  crestOnly?: boolean;
  className?: string;
};

export default function Logo({ variant = "dark", crestOnly = false, className }: Props) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${site.name} — home`}
    >
      <Image
        src="/logo.png"
        alt=""
        width={56}
        height={56}
        priority
        className="h-11 w-11 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12"
      />

      {!crestOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[0.95rem] font-bold tracking-tight sm:text-lg",
              variant === "light" ? "text-white" : "text-navy",
            )}
          >
            TestPortal
          </span>
          <span
            className={cn(
              "mt-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.2em] sm:text-[0.62rem]",
              variant === "light" ? "text-gold-light" : "text-burgundy",
            )}
          >
            Virtual Academy
          </span>
        </span>
      )}
    </Link>
  );
}
