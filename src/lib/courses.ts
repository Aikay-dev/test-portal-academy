/**
 * Subject catalogue. Edit here — the Courses page and the Home page
 * subject grid both read from this file.
 */

export type Level = {
  stage: string;
  years: string;
  summary: string;
  topics: string[];
};

/** Optional international test preparation offered alongside a subject. */
export type Certification = {
  name: string;
  detail: string;
  focus: string[];
};

export type Subject = {
  slug: string;
  name: string;
  icon: "sigma" | "atom" | "flask" | "leaf" | "monitor" | "message";
  range: string;
  blurb: string;
  boards: string[];
  levels: Level[];
  certifications?: Certification[];
};

export const subjects: Subject[] = [
  {
    slug: "mathematics",
    name: "Mathematics",
    icon: "sigma",
    range: "Year 7 – A-Level",
    blurb:
      "From number fluency to calculus. We rebuild confidence where it has been lost and stretch students who are ready to move faster.",
    boards: ["AQA", "Pearson Edexcel", "OCR"],
    levels: [
      {
        stage: "Key Stage 3",
        years: "Years 7–9",
        summary: "Securing the foundations that everything later depends on.",
        topics: ["Number and place value", "Algebraic notation", "Ratio and proportion", "Geometry and measures", "Probability and statistics"],
      },
      {
        stage: "GCSE",
        years: "Years 10–11",
        summary: "Exam-focused preparation across Foundation and Higher tiers.",
        topics: ["Algebraic manipulation", "Quadratics and simultaneous equations", "Trigonometry", "Vectors", "Exam technique and past papers"],
      },
      {
        stage: "A-Level",
        years: "Years 12–13",
        summary: "Pure and applied mathematics at the depth universities expect.",
        topics: ["Differentiation and integration", "Sequences and series", "Mechanics", "Statistical distributions", "Proof and reasoning"],
      },
    ],
  },
  {
    slug: "physics",
    name: "Physics",
    icon: "atom",
    range: "Year 7 – A-Level",
    blurb:
      "Physics rewards students who can picture what is happening. We teach the intuition first, then the equations that describe it.",
    boards: ["AQA", "Pearson Edexcel", "OCR"],
    levels: [
      {
        stage: "Key Stage 3",
        years: "Years 7–9",
        summary: "Forces, energy and electricity explained through everyday examples.",
        topics: ["Forces and motion", "Energy transfers", "Simple circuits", "Waves and sound", "Space physics"],
      },
      {
        stage: "GCSE",
        years: "Years 10–11",
        summary: "Required practicals, calculations and the command words examiners use.",
        topics: ["Electricity and circuits", "Particle model of matter", "Magnetism and induction", "Radioactivity", "Required practical write-ups"],
      },
      {
        stage: "A-Level",
        years: "Years 12–13",
        summary: "Mathematical physics, from mechanics to quantum phenomena.",
        topics: ["Further mechanics", "Fields and their consequences", "Thermal physics", "Quantum phenomena", "Practical endorsement skills"],
      },
    ],
  },
  {
    slug: "chemistry",
    name: "Chemistry",
    icon: "flask",
    range: "Year 7 – A-Level",
    blurb:
      "The subject where marks are most often lost to imprecise language. We drill the definitions as hard as the concepts.",
    boards: ["AQA", "Pearson Edexcel", "OCR"],
    levels: [
      {
        stage: "Key Stage 3",
        years: "Years 7–9",
        summary: "Particles, reactions and the periodic table made concrete.",
        topics: ["States of matter", "Elements and compounds", "Acids and alkalis", "Chemical reactions", "The periodic table"],
      },
      {
        stage: "GCSE",
        years: "Years 10–11",
        summary: "Structured revision of every specification topic, with mole calculations drilled.",
        topics: ["Atomic structure and bonding", "Quantitative chemistry", "Rates and equilibria", "Organic chemistry", "Chemical analysis"],
      },
      {
        stage: "A-Level",
        years: "Years 12–13",
        summary: "Physical, inorganic and organic chemistry at full depth.",
        topics: ["Thermodynamics", "Kinetics and equilibria", "Transition metals", "Organic synthesis routes", "Spectroscopy and analysis"],
      },
    ],
  },
  {
    slug: "biology",
    name: "Biology",
    icon: "leaf",
    range: "Year 7 – A-Level",
    blurb:
      "Content-heavy by nature. We teach students how to organise and recall it, not simply how to read it again.",
    boards: ["AQA", "Pearson Edexcel", "OCR"],
    levels: [
      {
        stage: "Key Stage 3",
        years: "Years 7–9",
        summary: "Cells, body systems and ecosystems, taught visually.",
        topics: ["Cells and organisation", "Human body systems", "Reproduction", "Ecosystems", "Variation and inheritance"],
      },
      {
        stage: "GCSE",
        years: "Years 10–11",
        summary: "Specification coverage plus the extended-response technique that carries the marks.",
        topics: ["Cell biology", "Infection and response", "Bioenergetics", "Homeostasis", "Inheritance and evolution"],
      },
      {
        stage: "A-Level",
        years: "Years 12–13",
        summary: "Biochemistry, physiology and genetics at university-entry standard.",
        topics: ["Biological molecules", "Gene expression", "Energy transfer", "Nervous coordination", "Statistical analysis of data"],
      },
    ],
  },
  {
    slug: "computer-science",
    name: "Computer Science",
    icon: "monitor",
    range: "Year 7 – A-Level",
    blurb:
      "Real programming from the first lesson, alongside the theory papers that decide the grade.",
    boards: ["AQA", "Pearson Edexcel", "OCR"],
    levels: [
      {
        stage: "Key Stage 3",
        years: "Years 7–9",
        summary: "Computational thinking and a first proper programming language.",
        topics: ["Algorithms and flowcharts", "Introduction to Python", "Data representation", "Networks basics", "Online safety"],
      },
      {
        stage: "GCSE",
        years: "Years 10–11",
        summary: "Programming practice paired with systematic theory revision.",
        topics: ["Programming fundamentals", "Data structures", "Computer systems", "Networks and security", "Ethical and legal issues"],
      },
      {
        stage: "A-Level",
        years: "Years 12–13",
        summary: "Deeper theory plus support through the non-exam assessment project.",
        topics: ["Object-oriented programming", "Data structures and algorithms", "Computational complexity", "Databases and SQL", "NEA project guidance"],
      },
    ],
  },
  {
    slug: "english-language",
    name: "English Language",
    icon: "message",
    range: "Year 7 – A-Level · Test Prep",
    blurb:
      "Reading closely and writing clearly — the two skills that lift grades across every other subject as well. We also prepare candidates for IELTS, TOEFL, CELPIP and the SAT.",
    boards: ["AQA", "Pearson Edexcel", "OCR"],
    levels: [
      {
        stage: "Key Stage 3",
        years: "Years 7–9",
        summary: "Building vocabulary, sentence control and reading stamina.",
        topics: ["Reading comprehension", "Sentence structure", "Descriptive writing", "Spelling and punctuation", "Speaking and listening"],
      },
      {
        stage: "GCSE",
        years: "Years 10–11",
        summary: "Both papers taught to the mark scheme, with timed practice throughout.",
        topics: ["Analysing language and structure", "Comparing texts", "Creative writing", "Writing to persuade", "Spoken language endorsement"],
      },
      {
        stage: "A-Level",
        years: "Years 12–13",
        summary: "Linguistic frameworks, discourse analysis and independent investigation.",
        topics: ["Language levels and frameworks", "Child language acquisition", "Language change", "Language and identity", "NEA investigation support"],
      },
    ],
    certifications: [
      {
        name: "IELTS",
        detail: "Academic & General Training",
        focus: [
          "All four papers: Listening, Reading, Writing, Speaking",
          "Task 1 and Task 2 writing to the band descriptors",
          "Timed practice under exam conditions",
          "Band-score feedback after every mock",
        ],
      },
      {
        name: "TOEFL iBT",
        detail: "Internet-based test",
        focus: [
          "Integrated reading, listening, speaking and writing tasks",
          "Note-taking technique for the listening section",
          "Structuring the independent writing task",
          "Pacing and screen-based exam practice",
        ],
      },
      {
        name: "CELPIP",
        detail: "Canadian English proficiency",
        focus: [
          "General and General LS formats",
          "Canadian English conventions and register",
          "Functional writing: emails and survey responses",
          "Fully computer-delivered practice",
        ],
      },
      {
        name: "SAT",
        detail: "US college admissions",
        focus: [
          "Reading and Writing modules",
          "Grammar, punctuation and rhetorical skills",
          "Evidence-based reading strategy",
          "Digital adaptive format and timing",
        ],
      },
    ],
  },
];

/** Curricula the Academy teaches to, beyond the British National Curriculum. */
export const curricula = [
  { name: "British National Curriculum", detail: "England, Wales, Scotland & Northern Ireland", flag: "🇬🇧" },
  { name: "US Curriculum", detail: "Common Core State Standards", flag: "🇺🇸" },
  { name: "Australian Curriculum", detail: "ACARA aligned", flag: "🇦🇺" },
  { name: "Canadian Curriculum", detail: "Provincial curricula", flag: "🇨🇦" },
];

/** The three-stage pathway shown on the Home page. */
export const pathway = [
  {
    stage: "Key Stage 3",
    years: "Years 7 – 9",
    title: "Building the foundations",
    body: "Strong foundations and genuine confidence across the core STEM subjects, before the pressure of formal examinations begins.",
  },
  {
    stage: "GCSE",
    years: "Years 10 – 11",
    title: "Exam-focused preparation",
    body: "Structured, specification-aligned teaching for AQA, Pearson Edexcel and OCR, with past papers and examiner technique throughout.",
  },
  {
    stage: "A-Level",
    years: "Years 12 – 13",
    title: "University-entry standard",
    body: "In-depth subject mastery and rigorous preparation for the grades competitive university courses demand.",
  },
];

/** Reasons parents choose the Academy — used on Home. */
export const differentiators = [
  {
    title: "Live Interactive Classes",
    body: "Every lesson is taught live on Microsoft Teams. Students ask questions in the moment rather than watching a recording.",
    icon: "video",
  },
  {
    title: "Tailored Learning Plans",
    body: "Each student begins with an assessment, and lessons are planned around the gaps it reveals — not a fixed syllabus.",
    icon: "clipboard",
  },
  {
    title: "Weekly Progress Reports",
    body: "Parents receive a written report every week showing what was covered, what improved and what needs attention.",
    icon: "chart",
  },
  {
    title: "Homework & Assessments",
    body: "Work set after every lesson and marked before the next, so that understanding is reinforced rather than assumed.",
    icon: "check",
  },
  {
    title: "Parent Feedback & Support",
    body: "Open communication throughout. Questions are answered directly by the tutor teaching your child.",
    icon: "users",
  },
  {
    title: "One-to-One & Small Group",
    body: "Choose focused individual attention or small groups that keep lessons collaborative and more affordable.",
    icon: "user",
  },
];
