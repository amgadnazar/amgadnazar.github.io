import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          paddingLeft: "48px",
          paddingRight: "48px",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-gray-400"
        >
          © {new Date().getFullYear()} Amjad Nazar. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}