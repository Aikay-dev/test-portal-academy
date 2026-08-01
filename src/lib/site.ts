/**
 * Single source of truth for anything that appears in more than one place.
 * Change a phone number or address here and it updates across the whole site.
 */

export const site = {
  name: "TestPortal Virtual Academy",
  shortName: "TestPortal",
  tagline: "Quality Teaching. Confident Results.",
  strapline: "Inspiring Numerate Minds",

  /** Yoruba motto carried on the Academy crest. */
  motto: "púpọ̀ nípa díẹ̀, kì í ṣe díẹ̀ nípa púpọ̀.",
  mottoTranslation: "Much about a little, not a little about much.",

  description:
    "Online STEM tuition from Year 7 to A-Level. Expert tutors, personalised lesson plans and measurable results, delivered live to students worldwide.",

  url: "https://testportalva.org",

  email: {
    general: "info@testportalva.org",
    director: "olufemi.adebayo@testportalva.org",
  },

  phone: {
    display: "+44 7350 167144",
    /** E.164, digits only — used for tel: and wa.me links. */
    raw: "447350167144",
  },

  address: {
    street: "135 Great Horton Road",
    city: "Bradford",
    postcode: "BD7 1QG",
    country: "United Kingdom",
    get full() {
      return `${this.street}, ${this.city}, ${this.postcode}, ${this.country}`;
    },
  },

  /** Figures taken from the Academy's own marketing material. */
  stats: [
    { value: "300+", label: "Students Taught" },
    { value: "4.9/5", label: "Parent Rating" },
    { value: "95%", label: "GCSE Pass Rate" },
    { value: "6", label: "Core Subjects" },
  ],

  /** Add real profile URLs here as the Academy creates them. */
  socials: [] as { name: string; href: string }[],
} as const;

export const whatsappLink = (message?: string) => {
  const text = message ?? "Hello TestPortal Virtual Academy, I would like to book a free trial lesson.";
  return `https://wa.me/${site.phone.raw}?text=${encodeURIComponent(text)}`;
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/director", label: "Director" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;
