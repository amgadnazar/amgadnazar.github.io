import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const skills = [
  {
    category: "Artificial Intelligence",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Generative AI",
      "Natural Language Processing",
      "Google Gemini",
      "Scikit-learn",
      "Sentence Transformers",
    ],
  },

  {
    category: "Programming",
    items: [
      "Python",
      "R",
      "TypeScript",
      "JavaScript",
      "Java",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },

  {
    category: "Frontend Development",
    items: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Axios",
      "Responsive Design",
    ],
  },

  {
    category: "Backend Development",
    items: [
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "Authentication",
      "API Integration",
    ],
  },

  {
    category: "Data Analytics",
    items: [
      "Power BI",
      "Tableau",
      "Excel",
      "Google Sheets",
      "Pandas",
      "NumPy",
      "SPSS",
      "Data Cleaning",
      "Data Visualization",
      "Statistical Analysis",
    ],
  },

  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "Supabase",
      "ChromaDB",
      "Firebase Firestore",
    ],
  },

  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Linux",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          width: "100%",
          paddingLeft: "48px",
          paddingRight: "48px",
        }}
      >
        <SectionTitle
          subtitle="My Stack"
          title="Skills & Technologies"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:shadow-[0_20px_60px_rgba(34,211,238,.12)]
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-2xl font-bold gradient">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-sm
                      text-gray-200
                      transition
                      duration-300
                      hover:border-cyan-400
                      hover:bg-cyan-400/10
                      hover:text-cyan-300
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}