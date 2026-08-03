import { motion } from "framer-motion";
import { contact } from "../data/contact";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          width: "100%",
          paddingLeft: "48px",
          paddingRight: "48px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            p-10
            md:p-14
            lg:p-16
          "
        >
          {/* Background Glow */}

          <div className="absolute inset-0">
            <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />
          </div>

          <div className="relative z-10">
            {/* Header */}

            <div className="text-center">
              <p className="mb-4 uppercase tracking-[6px] text-cyan-400">
                CONTACT
              </p>

              <h2 className="text-4xl font-black md:text-5xl">
                Let's Work Together
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                Interested in AI Engineering, Machine Learning, Healthcare AI,
                Backend Development or Data Analytics?
                <br />
                I'm always open to discussing exciting projects, startup ideas,
                research collaborations and full-time opportunities.
              </p>
            </div>

            {/* Cards */}

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {contact.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <ContactCard contact={item} />
                </motion.div>
              ))}
            </div>

            {/* Divider */}

            <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* CTA */}

            <div className="text-center">
              <h3 className="text-3xl font-bold">
                Ready to build your next AI product?
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-gray-400 leading-7">
                Whether you're looking for an AI Engineer, Machine Learning
                Engineer, Backend Developer, or someone to build intelligent
                products from idea to production, I'd love to hear from you.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-5">
                <a
                  href="mailto:amgadnazar11@gmail.com"
                  className="
                    rounded-2xl
                    bg-cyan-500
                    px-8
                    py-4
                    font-semibold
                    text-black
                    shadow-[0_15px_40px_rgba(34,211,238,.35)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-cyan-400
                  "
                >
                  Email Me
                </a>

                <a
                href="/resume/Amjad_Nazar_CV.pdf"
                download="Amjad_Nazar_CV.pdf"
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-8
                    py-4
                    font-semibold
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400
                    hover:bg-white/10
                  "
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}