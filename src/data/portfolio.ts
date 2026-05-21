/**
 * Contact form — get your ID from Formspree:
 * 1. Sign up at https://formspree.io
 * 2. Create a form → set email to sanjayv072004@gmail.com
 * 3. Copy the ID from https://formspree.io/f/abc123 → paste "abc123" below
 */
export const formspreeFormId = "xjgzwboj";

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git & GitHub", "Docker", "CI/CD", "Vercel", "Postman"],
  },
  {
    title: "AI / ML",
    skills: ["Python", "Machine Learning", "NLP", "scikit-learn"],
  },
];

/** Add new projects here — the Projects section updates automatically */
export const projects: {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
}[] = [
  {
    name: "AI Fake News Detection System",
    description:
      "An AI-powered web application that analyzes news articles and classifies them as real or fake using natural language processing and machine learning, helping users verify information before sharing.",
    stack: ["Python", "Machine Learning", "NLP", "Flask", "scikit-learn"],
    github: "https://github.com/YOUR_USERNAME/fake-news-detection",
    // demo: "https://your-live-demo.com", // uncomment when you deploy
  },
];

/** Add certifications here when ready (optional — wire up a section later) */
export const certifications: {
  name: string;
  issuer: string;
  year: string;
  link?: string;
}[] = [
  // { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2026", link: "https://..." },
];
