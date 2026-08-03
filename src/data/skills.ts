import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="container">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        <span className="uppercase tracking-[4px] text-cyan-400 font-semibold">

          Expertise

        </span>

        <h2 className="mt-4 text-5xl font-black">

          Skills & Technologies

        </h2>

        <p className="mt-6 max-w-2xl text-gray-400 leading-8">

          Technologies and tools I use to build scalable AI solutions,
          modern web applications, data-driven systems and production-ready
          software.

        </p>

      </motion.div>

      <div className="container">

        {Object.entries(skills).map(([category, items], index) => (

          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              delay: index * .12
            }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_20px_70px_rgba(34,211,238,.15)]"
          >

            <h3 className="text-2xl font-bold text-cyan-400">

              {category}

            </h3>

            <div className="mt-8 flex flex-wrap gap-3">

              {items.map((skill) => (

                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {skill}
                </span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}