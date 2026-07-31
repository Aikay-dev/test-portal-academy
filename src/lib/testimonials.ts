/**
 * Testimonials.
 *
 * Only the first entry is genuine — it is taken from the Academy's own
 * marketing material. The rest are marked `placeholder: true` and MUST be
 * replaced with real quotes before the site goes live. Placeholder entries
 * are visibly flagged in development so they cannot be shipped by accident.
 */

export type Testimonial = {
  quote: string;
  author: string;
  relation: string;
  rating: 1 | 2 | 3 | 4 | 5;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Test-Portal has helped me understand difficult topics and improve my grades with confidence.",
    author: "Year 11 Student",
    relation: "GCSE Mathematics & Science",
    rating: 5,
    placeholder: false,
  },
  {
    quote:
      "Replace this with a real parent testimonial. Ask for two or three sentences describing the change they saw in their child's confidence or grades.",
    author: "Parent Name",
    relation: "Parent of a Year 10 student",
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      "Replace this with a real student testimonial. Quotes that name a specific topic or exam are far more persuasive than general praise.",
    author: "Student Name",
    relation: "A-Level Physics",
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      "Replace this with a real testimonial about the weekly progress reports or parent communication — it is a genuine differentiator worth evidencing.",
    author: "Parent Name",
    relation: "Parent of a Year 8 student",
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      "Replace this with a real testimonial from a family studying outside the UK, if you have one. It demonstrates the international curricula in practice.",
    author: "Parent Name",
    relation: "Parent, international student",
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      "Replace this with a real testimonial mentioning a grade improvement, for example a move from a grade 4 to a grade 7.",
    author: "Parent Name",
    relation: "Parent of a Year 11 student",
    rating: 5,
    placeholder: true,
  },
];

/** Headline results shown alongside the testimonials. */
export const results = [
  { value: "95%", label: "GCSE Pass Rate", detail: "Across all subjects taught" },
  { value: "4.9/5", label: "Parent Rating", detail: "From families we have taught" },
  { value: "300+", label: "Students Taught", detail: "Year 7 through to A-Level" },
];
