/**
 * The Director's welcome address, as supplied by Olufemi Adebayo.
 *
 * This is his own words — edit only with his approval. Each string is one
 * paragraph; the page renders them in order.
 */

export const director = {
  name: "Olufemi Adebayo",
  title: "Founder and Director",
  teaches: "Mathematics & Mechanics — Year 7 to A-Level",
  image: "/images/team/olufemi-adebayo.jpg",

  /** Pulled out as the page's opening statement. */
  opening:
    "Welcome to TestPortal Virtual Academy, a global learning community founded on the belief that every learner can achieve excellence when provided with the right guidance, encouragement and opportunity.",

  address: [
    "I am Olufemi Adebayo, an experienced mathematics educator, researcher and academic mentor with a deep commitment to helping young people become confident, curious and independent learners. My academic and professional journey spans mathematics, engineering and teacher education, supported by extensive experience in classroom teaching, academic leadership, examination management, behaviour support and personalised tuition.",
    "Throughout my career, I have worked with learners of different abilities, backgrounds and educational needs. This experience has taught me that education should never be limited to memorising facts or preparing solely for examinations. Meaningful education should help learners understand ideas deeply, think critically, solve unfamiliar problems, communicate confidently and recognise their own potential.",
    "TestPortal Virtual Academy was established to provide structured, engaging and personalised learning within a supportive online environment. Our programmes draw upon internationally recognised curricula from the United Kingdom, the United States, Canada, Australia and Singapore, allowing us to support learners across a range of educational systems. Every programme is carefully adapted to the learner's curriculum, academic level and individual goals, while strengthening subject knowledge, examination technique, critical thinking, problem-solving ability and independent study habits.",
    "Our teaching extends beyond the delivery of lessons. We seek to identify each learner's strengths, address areas of difficulty and build the confidence required for sustained academic progress. Complex concepts are broken down clearly, learning is made purposeful, and every student is encouraged to participate actively in their own development.",
    "As Director, I am committed to ensuring that every learner is known, supported and appropriately challenged. We work closely with parents and guardians, provide meaningful feedback and maintain high academic expectations without losing sight of the individual behind the results. Our purpose is not only to help students achieve excellent grades, but also to develop resilient, responsible and capable young people who are prepared for further education and the wider world.",
    "At TestPortal Virtual Academy, we believe that excellence is built through purposeful learning, consistent effort and expert support. Every lesson is an opportunity to deepen understanding, strengthen confidence and move closer to a learner's aspirations.",
  ],

  /** Rendered as a pull quote at the close of the address. */
  closing:
    "Welcome to a place where potential is recognised, learning is purposeful and excellence is pursued.",

  /** Themes drawn from the address, shown as a summary strip. */
  principles: [
    {
      title: "Understanding, Not Memorisation",
      body: "Education should never be limited to memorising facts or preparing solely for examinations.",
    },
    {
      title: "Every Learner Known",
      body: "Every learner is known, supported and appropriately challenged — the individual behind the results is never lost.",
    },
    {
      title: "Partnership With Parents",
      body: "Close work with parents and guardians, meaningful feedback, and high academic expectations throughout.",
    },
    {
      title: "Prepared for What Follows",
      body: "Not only excellent grades, but resilient, responsible young people ready for further education and the wider world.",
    },
  ],

  /** Curricula named in the address — note this list includes Singapore. */
  curricula: ["United Kingdom", "United States", "Canada", "Australia", "Singapore"],
} as const;
