import { motion } from "framer-motion";

const stats = [
  {
    value: "15+",
    label: "Projects",
  },
  {
    value: "8+",
    label: "Certifications",
  },
  {
    value: "20+",
    label: "Technologies",
  },
  {
    value: "3+",
    label: "Research & AI Products",
  },
];

export default function Stats() {
  return (
    <section className="relative -mt-12 z-20">
      <div className="container">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-8
                text-center
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:shadow-[0_20px_60px_rgba(34,211,238,.18)]
              "
            >
              <h3 className="text-5xl font-black text-cyan-400">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}