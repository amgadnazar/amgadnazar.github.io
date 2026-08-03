import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#070B14]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <a
          href="#hero"
          className="text-2xl font-black tracking-wide"
        >
          <span className="gradient">Amjad</span>
          <span className="text-white">.</span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="/resume/Amjad_Nazar_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden
            rounded-xl
            bg-cyan-500
            px-6
            py-3
            font-semibold
            text-black
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-cyan-400
            lg:inline-flex
        "
        >
          Resume
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl lg:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#070B14] lg:hidden">
          <div className="container flex flex-col py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-gray-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/CV.pdf"
              className="mt-5 rounded-xl bg-cyan-500 py-3 text-center font-semibold text-black"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}