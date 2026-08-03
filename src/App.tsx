import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import FooterSection from "./sections/FooterSection";

import BackgroundEffects from "./components/effects/BackgroundEffects";
import Stats from "./sections/Stats";
import FeaturedProject from "./sections/FeaturedProject";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#070B14] text-white overflow-x-hidden">
      
      <BackgroundEffects />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <FeaturedProject />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <FooterSection />
    </div>
  );
}