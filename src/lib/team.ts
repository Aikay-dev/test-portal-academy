/**
 * Team shown on the About page.
 *
 * TO ADD A PERSON:
 *   1. Drop their photo in  public/images/team/  — crop to 4:5 (portrait),
 *      which is the ratio the card renders at
 *   2. Set `image` to "/images/team/their-file.jpg"
 *   3. Set `placeholder` to false
 *
 * Members left as placeholders render a neutral monogram tile instead of a
 * photo, so the grid never breaks while you are waiting on pictures.
 *
 * `bio` is optional and deliberately unset for everyone: no biographies have
 * been supplied, so every card shows name, role and subject only and the grid
 * reads as one consistent set. If bios ever arrive, add them for the whole
 * team at once — filling in one person alone makes that card look favoured
 * and the rest look unfinished.
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
    subjects: "Mathematics & Mechanics — Year 7 to A-Level",
    // Team-grid portrait. The Director page uses a different photograph of
    // him — see `image` in lib/director.ts.
    image: "/images/team/olufemi-adebayo-team.jpg",
    placeholder: false,
  },
  {
    name: "Dr. Jumoke Adebayo",
    role: "English Language Specialist",
    subjects: "IELTS · TOEFL · CELPIP · SAT",
    image: "/images/team/jumoke-adebayo.jpg",
    placeholder: false,
  },
  {
    name: "Oladele Alawode",
    role: "ICT & Computer Science Specialist",
    subjects: "Computer Science & Coding",
    image: "/images/team/oladele-alawode.jpg",
    placeholder: false,
  },
  {
    name: "Michael Semire",
    role: "Physics Specialist",
    subjects: "Physics",
    image: "/images/team/michael-semire.jpg",
    placeholder: false,
  },
  {
    name: "Kayode John Olalekan",
    role: "Biology Specialist",
    subjects: "Biology",
    image: "/images/team/kayode-john-olalekan.jpg",
    placeholder: false,
  },
  {
    name: "Toheeb Omitoogun",
    role: "Chemistry Specialist",
    subjects: "Chemistry",
    image: "/images/team/toheeb-omitoogun.jpg",
    placeholder: false,
  },
  {
    name: "Elizabeth Ojo",
    role: "Chemistry Tutor",
    subjects: "Chemistry",
    image: "/images/team/elizabeth-ojo.jpg",
    placeholder: false,
  },
  {
    name: "Oluwakemi Adebanjo",
    role: "Mathematics Tutor",
    subjects: "Mathematics — Key Stage 2 & 3",
    image: "/images/team/oluwakemi-adebanjo.jpg",
    placeholder: false,
  },
  {
    name: "Isaiah Fatehinshe",
    role: "English Specialist",
    subjects: "English — Key Stage 3 & 4",
    image: "/images/team/isaiah-fatehinshe.jpg",
    placeholder: false,
  },
  {
    name: "Adekunle Adelokun",
    role: "English Language & Literature Specialist",
    subjects: "English Language & Literature in English",
    image: "/images/team/adekunle-adelokun.jpg",
    placeholder: false,
  },
  {
    name: "Babatunde Samuel Tosin",
    role: "English Language & Literature Tutor",
    subjects: "English Language & Literature in English",
    image: "/images/team/babatunde-samuel-tosin.jpg",
    placeholder: false,
  },
];

/** Credentials strip shown beneath the team grid. */
export const credentials = [
  { title: "DBS-Checked Tutors", body: "Every tutor teaching a child holds an enhanced DBS certificate." },
  { title: "Subject Specialists", body: "Tutors teach only the subjects they are qualified and experienced in." },
  { title: "Exam-Board Aligned", body: "Lessons follow AQA, Pearson Edexcel and OCR specifications precisely." },
  { title: "UK-Based Teaching", body: "Delivered from the United Kingdom to students anywhere in the world." },
];
