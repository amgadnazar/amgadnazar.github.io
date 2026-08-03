import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaChevronDown } from "react-icons/fa";

const stats = [
  { value: "15+", label: "Projects" },
  { value: "8+", label: "Certificates" },
  { value: "3+", label: "AI Products" },
  { value: "24/7", label: "Learning" },
];

const badges = [
  { name: "AI Automation", cls: "-left-8 top-10" },
  { name: "FastAPI", cls: "-right-8 top-24" },
  { name: "Machine Learning", cls: "-left-24 bottom-24" },
  { name: "Data Analytics", cls: "-right-8 bottom-10" },
];

export default function Hero(){
return (
<section id="hero" className="relative min-h-screen overflow-hidden flex items-center pt-24">
<div className="absolute inset-0 -z-10 bg-[#070B14]">
<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",backgroundSize:"48px 48px"}}/>
<motion.div animate={{x:[0,80,0],y:[0,-40,0]}} transition={{duration:18,repeat:Infinity}} className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[170px]"/>
<motion.div animate={{x:[0,-70,0],y:[0,50,0]}} transition={{duration:20,repeat:Infinity}} className="absolute -right-40 bottom-0 h-[650px] w-[650px] rounded-full bg-indigo-500/15 blur-[170px]"/>
</div>

<div style={{maxWidth:"1500px",margin:"0 auto",padding:"0 48px",width:"100%"}}>
<div className="grid lg:grid-cols-2 gap-24 items-center">
<motion.div initial={{opacity:0,x:-60}} animate={{opacity:1,x:0}}>
<span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-cyan-300 uppercase tracking-[3px]">AI • Machine Learning • Software Engineer</span>
<h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight">Building<br/><span className="gradient">AI Products</span><br/>That Solve<br/>Real Problems.</h1>
<p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">AI & Machine Learning Engineer with a Bachelor's degree in Computer Science, specializing in Healthcare AI, Data Analytics, Intelligent Automation, scalable backend systems, and production-ready SaaS applications.</p>
<div className="mt-10 flex flex-wrap gap-5">
<a href="#projects" className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black hover:bg-cyan-400 transition">View Projects <FaArrowRight/></a>
<a
  href="/resume/Amjad_Nazar_CV.pdf"
  download="Amjad_Nazar_CV.pdf"
  className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 hover:border-cyan-400 transition"
>
  Download CV
</a></div>
<div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
{stats.map(s=><div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5"><div className="text-2xl font-black text-cyan-400">{s.value}</div><div className="text-sm text-gray-400 mt-2">{s.label}</div></div>)}
</div>
<div className="mt-10 flex gap-4">
{[
["https://github.com/amgadnazar",FaGithub],
["https://linkedin.com/in/amjad-nazar",FaLinkedin],
["mailto:amgadnazar11@gmail.com",FaEnvelope]
].map(([h,I],i)=><a key={i} href={h} className="h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400"><I/></a>)}
</div>
</motion.div>

<motion.div initial={{opacity:0,x:60}} animate={{opacity:1,x:0}} className="flex justify-center lg:justify-end">
<div className="relative">
<div className="absolute inset-0 rounded-full bg-cyan-500/40 blur-[120px]"/>
<motion.div animate={{rotate:360}} transition={{duration:30,repeat:Infinity,ease:"linear"}} className="absolute -inset-5 rounded-full border border-cyan-400/20"/>
{badges.map(b=><motion.div key={b.name} animate={{y:[0,-8,0]}} transition={{duration:3,repeat:Infinity}} className={`absolute ${b.cls} rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl`}>{b.name}</motion.div>)}
<img src="/profile.png" alt="Amjad Nazar" className="relative h-[340px] w-[340px] sm:h-[430px] sm:w-[430px] lg:h-[520px] lg:w-[520px] rounded-full object-cover border-4 border-cyan-400/30 shadow-[0_0_100px_rgba(34,211,238,.35)]"/>
</div>
</motion.div>
</div>
<div className="mt-16 flex justify-center animate-bounce text-cyan-400"><FaChevronDown size={22}/></div>
</div>
</section>);
}