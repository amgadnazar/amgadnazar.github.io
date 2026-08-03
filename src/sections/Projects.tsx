import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32"
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          width: "100%",
          paddingLeft: "48px",
          paddingRight: "48px",
        }}
      >
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 uppercase tracking-[6px] text-cyan-400">
            Portfolio
          </p>

          <h2 className="text-5xl font-black">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            A collection of AI, Machine Learning, Data Analytics, Mobile
            Development, and Software Engineering projects focused on solving
            real-world business and healthcare problems.
          </p>
        </motion.div>

        {/* Featured Project */}

        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <div key={project.id} className="mt-20">
              <ProjectCard project={project} />
            </div>
          ))}

        {/* Other Projects */}

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
        </div>
      </div>
    </section>
  );
}