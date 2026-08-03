import { motion } from "framer-motion";
import {
  FaBrain,
  FaDatabase,
  FaServer,
  FaChartLine,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

const highlights = [
  {
    icon: <FaBrain />,
    title: "Artificial Intelligence",
    description:
      "Building production-ready AI systems powered by modern LLMs and Machine Learning.",
  },
  {
    icon: <FaServer />,
    title: "Backend Engineering",
    description:
      "Designing scalable APIs, automation workflows, and enterprise backend architectures.",
  },
  {
    icon: <FaDatabase />,
    title: "Data & Analytics",
    description:
      "Transforming raw data into actionable insights through analytics and visualization.",
  },
  {
    icon: <FaChartLine />,
    title: "Product Development",
    description:
      "Turning innovative ideas into real-world software products with clean architecture.",
  },
];

const stats = [
  {
    number: "20+",
    title: "Projects",
  },
  {
    number: "10+",
    title: "Certificates",
  },
  {
    number: "3+",
    title: "Years Learning",
  },
  {
    number: "4",
    title: "Core Fields",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionTitle
          subtitle="Who I Am"
          title="About Me"
        />

        {/* Main Content */}

        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-black leading-tight">
              Building intelligent software that creates
              <span className="gradient"> real impact.</span>
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              I'm{" "}
              <span className="font-semibold text-white">
                Amjad Nazar
              </span>
              , an AI & Machine Learning Engineer holding a{" "}
              <span className="font-semibold text-cyan-400">
                Bachelor's degree in Computer Science
              </span>
              . I specialize in building production-ready AI applications,
              scalable backend systems, intelligent automation solutions, and
              data-driven software that solve real business challenges.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-400">
              My work spans Artificial Intelligence, Machine Learning,
              Healthcare AI, Backend Development, Data Analytics, and Modern
              Web Technologies. I enjoy transforming complex ideas into
              scalable, maintainable products with clean architecture and
              exceptional user experiences.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-5"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/40
                  hover:bg-white/[0.06]
                "
              >
                <div className="flex items-start gap-5">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-cyan-500/10
                      text-2xl
                      text-cyan-400
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-xl font-bold">
                      {item.title}
                    </h4>

                    <p className="mt-2 leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((item) => (
            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-8
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/40
              "
            >
              <h3 className="gradient text-5xl font-black">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}