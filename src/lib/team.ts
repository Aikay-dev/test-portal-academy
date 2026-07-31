/**
 * Team shown on the About page.
 *
 * TO ADD A REAL PERSON:
 *   1. Drop their photo in  public/images/team/  (square crop works best)
 *   2. Set `image` to "/images/team/their-file.jpg"
 *   3. Set `placeholder` to false
 *
 * Members left as placeholders render a neutral monogram tile instead of a
 * photo, so the grid never breaks while you are waiting on pictures.
 */

export type TeamMember = {
  name: string;
  role: string;
  subjects?: string;
  bio?: string;
  image?: string;
  placeholder: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Olufemi Adebayo",
    role: "Director",
    bio: "Leads the Academy's teaching strategy and oversees tutor recruitment, ensuring every student is matched with a specialist in their subject.",
    placeholder: true,
  },
  {
    name: "Tutor Name",
    role: "Lead Mathematics Tutor",
    subjects: "Mathematics — Year 7 to A-Level",
    bio: "Add a short biography here: qualifications, years of teaching experience, and the levels they specialise in.",
    placeholder: true,
  },
  {
    name: "Tutor Name",
    role: "Science Tutor",
    subjects: "Physics & Chemistry — Year 7 to A-Level",
    bio: "Add a short biography here: qualifications, years of teaching experience, and the levels they specialise in.",
    placeholder: true,
  },
  {
    name: "Tutor Name",
    role: "Computer Science Tutor",
    subjects: "Computer Science — Year 7 to A-Level",
    bio: "Add a short biography here: qualifications, years of teaching experience, and the levels they specialise in.",
    placeholder: true,
  },
];

/** Credentials strip shown beneath the team grid. */
export const credentials = [
  { title: "DBS-Checked Tutors", body: "Every tutor teaching a child holds an enhanced DBS certificate." },
  { title: "Subject Specialists", body: "Tutors teach only the subjects they are qualified and experienced in." },
  { title: "Exam-Board Aligned", body: "Lessons follow AQA, Pearson Edexcel and OCR specifications precisely." },
  { title: "UK-Based Teaching", body: "Delivered from the United Kingdom to students anywhere in the world." },
];
