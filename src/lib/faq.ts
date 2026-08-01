/**
 * FAQ shown at the foot of the Contact page.
 * Answers marked `needsConfirming` are best guesses drawn from the Academy's
 * marketing material — confirm them with the Director before launch.
 */

export type Faq = {
  question: string;
  answer: string;
  needsConfirming?: boolean;
};

export const faqs: Faq[] = [
  {
    question: "How do lessons actually work?",
    answer:
      "All lessons are taught live on Microsoft Teams by a specialist tutor. Students join at their scheduled time, work through the lesson interactively, and can ask questions throughout — it is a real classroom, not a recording.",
  },
  {
    question: "Is the free trial lesson genuinely free?",
    answer:
      "Yes. The trial lesson is free and carries no obligation. It lets us assess your child's current level and lets you see how we teach before committing to anything.",
  },
  {
    question: "Which year groups and subjects do you cover?",
    answer:
      "Year 7 through to A-Level, in Mathematics, Physics, Chemistry, Biology, Computer Science and English Language. That spans Key Stage 3, GCSE and A-Level.",
  },
  {
    question: "Do you prepare candidates for IELTS, TOEFL, CELPIP or the SAT?",
    answer:
      "Yes. Alongside school English we offer focused preparation for IELTS (Academic and General Training), TOEFL iBT, CELPIP and the SAT. Lessons cover every paper, exam technique and timing, with marked mock tests and feedback against the official band descriptors or scoring criteria.",
  },
  {
    question: "Which exam boards do you teach?",
    answer:
      "AQA, Pearson Edexcel and OCR. Tell us which board your child's school follows and lessons will be aligned to that specification.",
  },
  {
    question: "Do you teach students outside the United Kingdom?",
    answer:
      "Yes. Alongside the British National Curriculum we teach to the US Common Core, the Australian Curriculum and Canadian provincial curricula. Lessons are scheduled around your local time zone.",
  },
  {
    question: "One-to-one or small group — which is better?",
    answer:
      "One-to-one gives your child the tutor's full attention and moves at exactly their pace. Small groups are more affordable and some students respond well to working alongside peers. We are happy to advise after the trial lesson.",
    needsConfirming: true,
  },
  {
    question: "How much does tuition cost?",
    answer:
      "Fees depend on the subject, the level and whether you choose one-to-one or small-group lessons. Send us an enquiry using the form above and we will send you a straightforward breakdown.",
    needsConfirming: true,
  },
  {
    question: "How do I know my child is making progress?",
    answer:
      "You receive a written progress report every week setting out what was covered, what improved and what still needs work. Homework is set after each lesson and marked before the next.",
  },
  {
    question: "Are your tutors DBS-checked?",
    answer:
      "Yes. Every tutor teaching a child holds an enhanced DBS certificate, and all are qualified specialists in the subjects they teach.",
    needsConfirming: true,
  },
  {
    question: "What if we need to cancel or reschedule a lesson?",
    answer:
      "Let us know as far in advance as you can and we will do our best to move the lesson to another slot. Please contact us directly to discuss the current rescheduling policy.",
    needsConfirming: true,
  },
];
