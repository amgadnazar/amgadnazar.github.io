import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import type { ContactItem } from "../data/contact";

interface Props {
  contact: ContactItem;
}

const icons = {
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
  location: FaLocationDot,
};

export default function ContactCard({ contact }: Props) {
  const Icon = icons[contact.icon];

  return (
    <motion.a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -6,
      }}
      transition={{ duration: 0.25 }}
      className="
        group
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-[#171B24]
        px-6
        py-6
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:bg-[#1C212C]
        hover:shadow-[0_20px_50px_rgba(34,211,238,.08)]
      "
    >
      {/* Left */}

      <div className="flex items-center gap-5">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-cyan-500/10
            text-cyan-400
            text-xl
            transition-transform
            duration-300
            group-hover:scale-110
          "
        >
          <Icon />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            {contact.title}
          </h3>

          <p className="mt-1 text-gray-400">
            {contact.value}
          </p>
        </div>
      </div>

      {/* Right */}

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white/5
          text-gray-500
          transition-all
          duration-300
          group-hover:bg-cyan-500
          group-hover:text-black
        "
      >
        <FaArrowUpRightFromSquare className="text-sm" />
      </div>
    </motion.a>
  );
}