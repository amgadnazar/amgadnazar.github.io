import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowRight,
  FaWhatsapp,
  FaRobot,
  FaDatabase,
  FaReact,
  FaPython,
} from "react-icons/fa";
import {
  MdOutlineMedicalServices,
  MdOutlineCalendarMonth,
} from "react-icons/md";

const tech = [
  "Python",
  "FastAPI",
  "React",
  "TypeScript",
  "Gemini AI",
  "RAG",
  "Supabase",
  "ChromaDB",
  "WhatsApp Cloud API",
  "TailwindCSS",
];

const features = [
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp Cloud API",
    text: "Official Meta integration for patient communication.",
  },
  {
    icon: <FaRobot />,
    title: "AI Assistant",
    text: "Google Gemini with RAG and conversation memory.",
  },
  {
    icon: <MdOutlineCalendarMonth />,
    title: "Appointments",
    text: "Booking, rescheduling and cancellation workflows.",
  },
  {
    icon: <FaDatabase />,
    title: "Supabase",
    text: "Patient profiles and conversation history.",
  },
  {
    icon: <FaReact />,
    title: "Admin Dashboard",
    text: "Modern React dashboard for clinic management.",
  },
  {
    icon: <FaPython />,
    title: "FastAPI Backend",
    text: "Production-ready modular backend architecture.",
  },
];

export default function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[150px]" />
      </div>

      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          paddingLeft: "48px",
          paddingRight: "48px",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[36px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl lg:p-16"
        >
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-cyan-300">
                Flagship Project
              </span>

              <h2 className="mt-8 text-4xl font-black leading-tight lg:text-6xl">
                Enterprise AI
                <br />
                Medical Assistant
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-400">
                A production-ready Healthcare AI SaaS platform built for
                hospitals and clinics. It automates patient communication,
                appointment management, medical information retrieval, and
                clinic operations through the official Meta WhatsApp Cloud API
                and Google Gemini.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-5">
                <a
                  href="https://github.com/amgadnazar/AI-Medical-Assistant"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
                >
                  <FaGithub />

                  View on GitHub
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 transition hover:border-cyan-400 hover:bg-white/10"
                >
                  Explore Projects

                  <FaArrowRight />
                </a>
              </div>
            </div>

            {/* RIGHT */}

            <div>
              <div className="rounded-3xl border border-white/10 bg-[#0d1322] p-8">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400">
                    <MdOutlineMedicalServices />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      Healthcare AI Platform
                    </h3>

                    <p className="text-gray-400">
                      Enterprise SaaS Architecture
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
                    >
                      <div className="mb-4 text-2xl text-cyan-400">
                        {feature.icon}
                      </div>

                      <h4 className="font-semibold">
                        {feature.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">
                  <p className="text-sm leading-7 text-cyan-100">
                    Designed with a modular architecture where deterministic
                    backend business logic handles most requests before invoking
                    AI, reducing latency, hallucinations, and operational cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}