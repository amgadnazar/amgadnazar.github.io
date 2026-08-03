import { motion } from "framer-motion";
import { MdWorkspacePremium } from "react-icons/md";
import type { Certification } from "../data/certifications";

interface Props {
  certification: Certification;
}

export default function CertificationCard({ certification }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-7
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_20px_80px_rgba(34,211,238,.18)]
      "
    >
      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Icon */}

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-cyan-500/10
            border
            border-cyan-400/20
            text-3xl
            text-cyan-400
          "
        >
          <MdWorkspacePremium />
        </div>

        {/* Title */}

        <h3 className="mt-6 text-xl font-bold leading-8">
          {certification.title}
        </h3>

        {/* Issuer */}

        <div className="mt-3 flex items-center justify-between">
          <span className="font-medium text-cyan-400">
            {certification.issuer}
          </span>

          <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-400">
            {certification.year}
          </span>
        </div>

        {/* Skills */}

        <div className="mt-8 flex flex-wrap gap-2">
          {certification.skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/10
                px-3
                py-2
                text-xs
                font-medium
                text-cyan-300
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}