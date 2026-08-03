import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  category?: string;
}

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const getDemoButton = () => {
    switch (project.demo) {
      case "request-demo":
        return {
          label: "Request Demo",
          href: "#contact",
          external: false,
        };

      case "research-paper":
        return {
          label: "Research Paper",
          href: project.github,
          external: true,
        };

      case "powerbi-preview":
        return {
          label: "Power BI Preview",
          href: project.github,
          external: true,
        };

      case "view-results":
        return {
          label: "View Results",
          href: project.github,
          external: true,
        };

      case "view-analysis":
        return {
          label: "View Analysis",
          href: project.github,
          external: true,
        };

      case "view-screenshots":
        return {
          label: "View Screenshots",
          href: project.github,
          external: true,
        };

      default:
        if (
          project.demo &&
          (project.demo.startsWith("http://") ||
            project.demo.startsWith("https://"))
        ) {
          return {
            label: "View Dashboard",
            href: project.demo,
            external: true,
          };
        }

        return null;
    }
  };

  const demoButton = getDemoButton();

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_20px_80px_rgba(34,211,238,.15)]
      "
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent" />

        {project.featured && (
          <span
            className="
              absolute
              left-5
              top-5
              rounded-full
              bg-cyan-500
              px-4
              py-2
              text-xs
              font-semibold
              text-black
            "
          >
            Featured
          </span>
        )}
      </div>

      {/* Content */}

      <div className="p-7">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/10
                px-3
                py-1.5
                text-sm
                text-cyan-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              py-3
              transition-all
              duration-300
              hover:border-cyan-400
              hover:text-cyan-400
            "
          >
            <FaGithub />
            GitHub
          </a>

          {demoButton && (
            <a
              href={demoButton.href}
              target={demoButton.external ? "_blank" : undefined}
              rel={demoButton.external ? "noopener noreferrer" : undefined}
              className="
                flex-1
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-cyan-500
                py-3
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-cyan-400
              "
            >
              <FaExternalLinkAlt />
              {demoButton.label}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}