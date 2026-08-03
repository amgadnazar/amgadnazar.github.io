export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: 1,
    company: "Freelance",
    role: "AI & Machine Learning Engineer",
    period: "2026 – Present",
    location: "Remote",
    description:
      "Designing and developing AI-powered applications, SaaS platforms, intelligent automation systems, Retrieval-Augmented Generation (RAG) solutions, FastAPI backends, React applications, and modern AI products for real-world business use cases.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Gemini AI",
      "RAG",
      "Supabase",
      "LLMs",
    ],
  },

  {
    id: 2,
    company: "Eefaa Marketing",
    role: "Research & Development Engineer",
    period: "2024 – 2026",
    location: "Sudan",
    description:
      "Worked on AI product research, software architecture, business automation, analytics dashboards, and internal technology initiatives. Participated in designing scalable solutions and developing proof-of-concept AI systems to support business growth.",
    technologies: [
      "Python",
      "AI",
      "Automation",
      "Power BI",
      "Tableau",
      "SQL",
      "Data Analytics",
    ],
  },

  {
    id: 3,
    company: "Bank of Khartoum",
    role: "IT Support Trainee",
    period: "2023",
    location: "Sudan",
    description:
      "Provided technical support for hardware and software, assisted users in troubleshooting issues, participated in system maintenance, and gained practical experience with enterprise IT infrastructure and networking.",
    technologies: [
      "Windows",
      "Networking",
      "Hardware",
      "Technical Support",
      "Troubleshooting",
    ],
  },
];