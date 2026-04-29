"use client";

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Terminal,
  User,
  Code2,
  Database,
  Briefcase,
  MapPin,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiPython,
  SiDjango,
  SiNestjs,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";
import { motion, useScroll, useTransform } from "motion/react";

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const techCategories = [
  {
    title: "Frontend",
    items: [
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "group-hover:text-[#3178C6]",
      },
      { name: "React", icon: SiReact, color: "group-hover:text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-white" },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "group-hover:text-[#06B6D4]",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "NestJS", icon: SiNestjs, color: "group-hover:text-[#E0234E]" },
      { name: "Python", icon: SiPython, color: "group-hover:text-[#3776AB]" },
      { name: "Django", icon: SiDjango, color: "group-hover:text-[#092E20]" },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "group-hover:text-[#4169E1]",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", icon: SiDocker, color: "group-hover:text-[#2496ED]" },
      {
        name: "CI/CD Pipelines",
        icon: SiGithubactions,
        color: "group-hover:text-[#2088FF]",
      },
      { name: "Payload CMS", icon: Database, color: "group-hover:text-white" },
    ],
  },
];

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-emerald-500/30 font-sans relative">
      {/* Fixed Vertical Navigation / Decoration */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-6 text-xs font-mono text-zinc-700 hidden xl:flex tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 pointer-events-none z-0">
        chornopolskyi@lux-medien.com
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-6 text-xs font-mono text-zinc-700 hidden xl:flex tracking-[0.3em] uppercase [writing-mode:vertical-rl] pointer-events-none z-0">
        Full Stack Developer
      </motion.div>

      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-10 px-6 md:px-8 py-4 bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#1f1f1f]/80 rounded-full font-mono text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 whitespace-nowrap shadow-2xl">
          <a href="#home" className="hover:text-emerald-400 transition-colors">
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-emerald-400 transition-colors">
            Works
          </a>
          <a href="#stack" className="hover:text-emerald-400 transition-colors">
            Stack
          </a>
          <a
            href="#experience"
            className="hover:text-emerald-400 transition-colors">
            Experience
          </a>
        </div>
      </motion.nav>

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 w-full relative z-10">
        {/* HERO SECTION */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center pt-32 pb-20 relative">
          <motion.div style={{ y: yBg }} className="relative w-full">
            {/* Floating decorative tags */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="absolute -top-12 md:-top-4 left-0 md:left-4 px-4 py-2 border border-emerald-500/30 rounded-full text-xs font-mono text-emerald-400 flex items-center gap-2 backdrop-blur-sm bg-emerald-500/5 cursor-default">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Ready for work
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -top-12 md:-top-4 right-0 md:right-4 px-4 py-2 border border-zinc-800 rounded-full text-xs font-mono text-zinc-500 hidden md:block">
              // 4+ years
            </motion.div>

            <motion.h1
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-[clamp(3.5rem,10vw,11rem)] leading-[0.85] font-black text-zinc-100 tracking-tighter uppercase flex flex-col justify-center pt-8 md:pt-0">
              <motion.span
                variants={fadeInUp}
                className="text-zinc-600 block hover:text-zinc-500 transition-colors duration-500">
                I'm BOHDAN
              </motion.span>
              <motion.span variants={fadeInUp} className="block pr-4 relative">
                CHORNOPOLSKYI
              </motion.span>
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-2 md:gap-6 mt-2 md:mt-4 flex-wrap">
                <span className="text-emerald-400">FULL-STACK</span>
                <motion.span
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="inline-flex relative w-[clamp(4.5rem,10vw,12rem)] h-[clamp(3rem,8vw,8rem)] rounded-full border border-zinc-800 bg-[#0a0a0a] overflow-hidden items-center justify-center shrink-0 group shadow-2xl">
                  <User className="text-zinc-700 w-1/3 h-1/3 group-hover:scale-110 group-hover:opacity-0 transition-all duration-300" />
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] md:text-sm tracking-widest uppercase font-mono text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0a0a0a]/90 backdrop-blur-sm cursor-help">
                    Photo
                  </span>
                </motion.span>
              </motion.div>
              <motion.span
                variants={fadeInUp}
                className="block italic text-[clamp(4rem,10vw,11rem)] text-zinc-300 font-serif lowercase mt-2 md:mt-0">
                developer.
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-7 col-span-1 flex flex-col gap-5">
                <p className="text-zinc-400 text-lg md:text-2xl font-normal leading-relaxed">
                  I architect and build end-to-end web applications. Focusing on
                  strictly typed React frontends, robust scalable backends, and
                  high-performance delivery. Zero fluff.
                </p>
                <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-600">
                  <MapPin size={12} className="text-emerald-500/60" />
                  Warsaw, Poland / Remote
                </span>
              </div>
              <div className="md:col-span-5 col-span-1 flex flex-wrap items-center gap-4 font-mono text-sm md:justify-end">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-8 py-5 md:py-4 bg-zinc-200 text-[#050505] font-bold rounded-full hover:bg-emerald-400 hover:text-[#050505] transition-colors duration-300">
                  Contact Me
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/bohdanchornopolskyi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-[#0a0a0a] border border-zinc-800 rounded-full hover:text-emerald-400 hover:border-emerald-500/50 transition-colors duration-300">
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-[#0a0a0a] border border-zinc-800 rounded-full hover:text-emerald-400 hover:border-emerald-500/50 transition-colors duration-300">
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="py-24 md:py-32 border-t border-zinc-900">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-20 md:flex justify-between items-end">
            <div>
              <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-black text-zinc-100 mb-2 tracking-tighter uppercase leading-none">
                Works
              </h2>
              <p className="text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-widest">
                Real-world systems I haven't messed up
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-zinc-600 font-mono text-sm uppercase tracking-widest">
              [ 02 ]
            </div>
          </motion.div>

          <div className="flex flex-col gap-24 md:gap-32">
            {/* Project 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <motion.div
                variants={fadeInUp}
                className="lg:col-span-7 aspect-[4/3] w-full rounded-[2rem] bg-[#0a0a0a] border border-zinc-900/80 flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:border-emerald-500/30 group-hover:bg-[#0c0c0c] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="text-zinc-700 font-mono text-sm tracking-widest uppercase flex flex-col items-center gap-6 w-full h-full justify-center">
                  <Terminal
                    size={48}
                    strokeWidth={1}
                    className="group-hover:text-emerald-500/50 transition-colors duration-500"
                  />
                  [ Preview Here ]
                </motion.div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="lg:col-span-5 flex flex-col gap-6">
                <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
                  <span>Next.js</span> <span>/</span> <span>Payload CMS</span>{" "}
                  <span>/</span> <span>Postgres</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 tracking-tight leading-[1.1] group-hover:text-zinc-200 transition-colors">
                  Marketing CMS Platform
                </h3>
                <p className="text-zinc-400 leading-relaxed text-base lg:text-lg font-normal">
                  API-first headless architecture driving dynamic localized
                  content globally. Built from the ground up for massive scale
                  and intuitive content management by non-technical teams.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-300 hover:text-emerald-400 transition-colors w-fit mt-4 bg-[#0a0a0a] px-7 py-4 border border-zinc-800 hover:border-emerald-500/30 rounded-full group/btn">
                  View Project{" "}
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                  />
                </a>
              </motion.div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <motion.div
                variants={fadeInUp}
                className="lg:col-span-5 flex flex-col gap-6 lg:order-1 order-2">
                <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
                  <span>React</span> <span>/</span> <span>NestJS</span>{" "}
                  <span>/</span> <span>Docker</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 tracking-tight leading-[1.1] group-hover:text-zinc-200 transition-colors">
                  Telemetry Dashboard
                </h3>
                <p className="text-zinc-400 leading-relaxed text-base lg:text-lg font-normal">
                  High-performance dashboard for monitoring complex
                  microservices networks. Real-time data processing, websocket
                  connections, and rich interactive visualizations spanning
                  millions of events.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-300 hover:text-emerald-400 transition-colors w-fit mt-4 bg-[#0a0a0a] px-7 py-4 border border-zinc-800 hover:border-emerald-500/30 rounded-full group/btn">
                  View Project{" "}
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                  />
                </a>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="lg:col-span-7 aspect-[4/3] w-full rounded-[2rem] bg-[#0a0a0a] border border-zinc-900/80 flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:border-emerald-500/30 group-hover:bg-[#0c0c0c] lg:order-2 order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="text-zinc-700 font-mono text-sm tracking-widest uppercase flex flex-col items-center gap-6 w-full h-full justify-center">
                  <Code2
                    size={48}
                    strokeWidth={1}
                    className="group-hover:text-emerald-500/50 transition-colors duration-500"
                  />
                  [ Preview Here ]
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* STACK SECTION */}
        <section id="stack" className="py-24 md:py-32 border-t border-zinc-900">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-24 md:flex justify-between items-end">
            <div>
              <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-black text-zinc-100 mb-2 tracking-tighter uppercase leading-none">
                Stack
              </h2>
              <p className="text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-widest">
                Technologies I use daily
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-zinc-600 font-mono text-sm uppercase tracking-widest">
              [ 11 ]
            </div>
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-24">
            {techCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}>
                <div className="flex items-center gap-6 mb-8 md:mb-10">
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-300">
                    {category.title}
                  </h3>
                  <div className="h-px bg-zinc-800 flex-grow" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.items.map((tech) => (
                    <motion.div
                      variants={fadeInUp}
                      key={tech.name}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="group flex flex-col items-center justify-center gap-6 p-8 rounded-[1.5rem] bg-[#0a0a0a] border border-zinc-900 text-zinc-500 transition-colors hover:border-emerald-500/30 hover:bg-[#0c0c0c] cursor-default relative overflow-hidden">
                      {/* Subtle hover glow */}
                      <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <tech.icon
                        className={`text-5xl md:text-6xl transition-colors duration-300 relative z-10 ${tech.color}`}
                      />
                      <span className="font-mono text-xs md:text-sm group-hover:text-zinc-200 transition-colors uppercase tracking-widest relative z-10 text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          id="experience"
          className="py-24 md:py-32 border-t border-zinc-900">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 md:mb-24">
            <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-black text-zinc-100 mb-2 tracking-tighter uppercase leading-none">
              Experience
            </h2>
            <p className="text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-widest">
              My professional journey
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-12 md:gap-20">
            {/* Timeline Item 1 */}
            <motion.div
              variants={fadeInUp}
              className="group relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 hover:bg-[#0a0a0a] p-6 lg:-mx-6 rounded-[2rem] transition-colors duration-500">
              <div className="md:col-span-1 font-mono text-xs md:text-sm text-zinc-500 uppercase tracking-widest md:pt-3 flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                2022 — Present
              </div>
              <div className="md:col-span-3">
                <h3 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight leading-none mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  Full Stack Engineer
                </h3>
                <h4 className="text-zinc-400 font-mono text-xs md:text-sm mb-6 md:mb-8 uppercase tracking-widest flex items-center gap-2">
                  <Briefcase size={14} /> Lux-medien
                </h4>
                <p className="text-zinc-400 leading-relaxed text-base md:text-lg font-normal max-w-3xl group-hover:text-zinc-300 transition-colors duration-300">
                  Architecting scalable microservices and monolithic web
                  applications from the ground up. Leading full-stack feature
                  delivery, optimizing CI/CD pipelines, and maintaining robust
                  infrastructure. Focused heavily on ensuring strict typing,
                  code quality, and high-performance delivery across the stack.
                </p>
              </div>
            </motion.div>

            <div className="w-full h-px bg-zinc-900" />

            {/* Timeline Item 2 */}
            <motion.div
              variants={fadeInUp}
              className="group relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 hover:bg-[#0a0a0a] p-6 lg:-mx-6 rounded-[2rem] transition-colors duration-500">
              <div className="md:col-span-1 font-mono text-xs md:text-sm text-zinc-600 uppercase tracking-widest md:pt-3 flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-zinc-700 mt-1.5" />
                2020 — 2022
              </div>
              <div className="md:col-span-3">
                <h3 className="text-3xl md:text-4xl font-bold text-zinc-400 tracking-tight leading-none mb-3 group-hover:text-zinc-200 transition-colors duration-300">
                  Frontend Developer
                </h3>
                <h4 className="text-zinc-500 font-mono text-xs md:text-sm mb-6 md:mb-8 uppercase tracking-widest flex items-center gap-2">
                  <Briefcase size={14} /> Freelance
                </h4>
                <p className="text-zinc-500 leading-relaxed text-base md:text-lg font-normal max-w-3xl group-hover:text-zinc-400 transition-colors duration-300">
                  Built custom interfaces, optimized web performance, and
                  collaborated intimately with design teams and clients to
                  transform complex specifications into responsive, interactive
                  web applications. Primarily worked within the React ecosystem.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* FOOTER / CONTACT */}
        <motion.footer
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-32 md:py-48 border-t border-zinc-900 text-center flex flex-col items-center justify-center gap-10 md:gap-14">
          <motion.h2
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-[clamp(3.5rem,10vw,12rem)] font-black text-zinc-100 tracking-tighter uppercase leading-[0.9] cursor-default">
            Let's <span className="text-emerald-400">Talk</span>
          </motion.h2>
          <a
            href="mailto:chornopolskyi@lux-medien.com"
            className="text-zinc-400 hover:text-emerald-400 text-lg md:text-2xl font-mono decoration-zinc-800 hover:decoration-emerald-500/50 underline-offset-[8px] transition-all break-all px-4 inline-block group">
            <span className="relative">
              chornopolskyi@lux-medien.com
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-emerald-500/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            </span>
          </a>
          <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mt-16 md:mt-24">
            © {new Date().getFullYear()} Bohdan Chornopolskyi. Built with zero
            fluff.
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
