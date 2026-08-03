import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import CertificationCard from "../components/CertificationCard";

export default function Certifications() {
  return (
    <section
      id="certifications"
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
            Education & Learning
          </p>

          <h2 className="text-5xl font-black">
            Education & Certifications
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            My academic background and professional certifications have
            strengthened my expertise in Artificial Intelligence, Machine
            Learning, Data Analytics, Software Engineering, Project
            Management, and Modern Backend Development.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <CertificationCard certification={certificate} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="
            mt-20
            rounded-3xl
            border
            border-cyan-400/20
            bg-gradient-to-r
            from-cyan-500/10
            via-transparent
            to-indigo-500/10
            p-10
            text-center
          "
        >
          <h3 className="text-3xl font-bold">
            Lifelong Learning
          </h3>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-400">
            I believe continuous learning is essential in technology. Alongside
            earning industry-recognized certifications, I completed a Bachelor's
            degree in Computer Science while continuously building real-world AI
            products, scalable software systems, and data-driven applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}