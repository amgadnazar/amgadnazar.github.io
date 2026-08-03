import { motion } from "framer-motion";
import { experience } from "../data/experience";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
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
            Career
          </p>

          <h2 className="text-5xl font-black">
            Professional Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            My professional journey across AI engineering, software
            development, research, and enterprise IT, building practical
            solutions for businesses and real-world applications.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* Center Line */}

          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={`relative mb-14 flex w-full ${
                index % 2 === 0
                  ? "lg:justify-start"
                  : "lg:justify-end"
              }`}
            >
              {/* Timeline Dot */}

              <div
                className="
                  absolute
                  left-6
                  top-10
                  h-5
                  w-5
                  rounded-full
                  border-4
                  border-[#070B14]
                  bg-cyan-400
                  shadow-[0_0_25px_rgba(34,211,238,.8)]
                  lg:left-1/2
                  lg:-translate-x-1/2
                "
              />

              {/* Card */}

              <div className="ml-16 w-full lg:ml-0 lg:w-[46%]">
                <ExperienceCard experience={item} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}