import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";
import type { Experience } from "../data/experience";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-8
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_20px_80px_rgba(34,211,238,.15)]
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              <MdWork />
              {experience.period}
            </span>

            <h3 className="mt-5 text-2xl font-bold">
              {experience.role}
            </h3>

            <p className="mt-2 text-cyan-400 font-medium">
              {experience.company}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {experience.location}
            </p>
          </div>
        </div>

        <p className="mt-6 leading-8 text-gray-400">
          {experience.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/10
                px-3
                py-2
                text-sm
                text-cyan-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}