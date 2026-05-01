"use client";

import {
  ArrowUpRight,
  Github,
  Linkedin,
  User,
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
      { name: "Python", icon: SiPython, color: "group-hover:text-[#FFD43B]" },
      { name: "Django", icon: SiDjango, color: "group-hover:text-[#44B78B]" },
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
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-violet-500/30 font-sans relative">
      {/* Ambient page glows — fixed so they follow the viewport */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-[10%] left-[5%] w-[55rem] h-[55rem] rounded-full bg-violet-700/[0.06] blur-[160px]" />
        <div className="absolute top-[40%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-indigo-700/[0.04] blur-[140px]" />
        <div className="absolute bottom-[5%] left-[30%] w-[35rem] h-[35rem] rounded-full bg-violet-600/[0.03] blur-[120px]" />
      </div>

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
        <div className="flex items-center justify-between md:justify-center gap-4 md:gap-10 px-6 md:px-8 py-4 bg-[#0a0a0a]/85 backdrop-blur-xl border border-white/[0.06] rounded-full font-mono text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 whitespace-nowrap shadow-2xl shadow-black/50 ring-1 ring-white/[0.04]">
          <a href="#home" className="hover:text-violet-400 transition-colors duration-200">
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-violet-400 transition-colors duration-200">
            Works
          </a>
          <a href="#stack" className="hover:text-violet-400 transition-colors duration-200">
            Stack
          </a>
          <a
            href="#experience"
            className="hover:text-violet-400 transition-colors duration-200">
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -top-12 md:-top-4 left-0 md:left-4 px-4 py-2 border border-violet-500/25 rounded-full text-xs font-mono text-violet-400 flex items-center gap-2 backdrop-blur-sm bg-violet-500/[0.05] cursor-default shadow-[0_0_20px_rgba(139,92,246,0.08)]">
              <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.9)]" />
              Ready for work
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
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
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  FULL-STACK
                </span>
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
                  <MapPin size={12} className="text-violet-500/60" />
                  Warsaw, Poland / Remote
                </span>
              </div>
              <div className="md:col-span-5 col-span-1 flex flex-wrap items-center gap-4 font-mono text-sm md:justify-end">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-8 py-5 md:py-4 bg-zinc-200 text-[#050505] font-bold rounded-full hover:bg-violet-400 hover:text-[#050505] transition-colors duration-300">
                  Contact Me
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/bohdanchornopolskyi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-[#0a0a0a] border border-zinc-800 rounded-full hover:text-violet-400 hover:border-violet-500/50 transition-colors duration-300">
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-[#0a0a0a] border border-zinc-800 rounded-full hover:text-violet-400 hover:border-violet-500/50 transition-colors duration-300">
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
            <div className="hidden md:flex items-center gap-2 text-zinc-700 font-mono text-sm uppercase tracking-widest">
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
                className="lg:col-span-7 aspect-[16/9] w-full rounded-[2rem] bg-[#0a0a0a] border border-zinc-900/80 flex items-end justify-center overflow-hidden relative px-6 pt-6 transition-all duration-500 group-hover:border-violet-500/15 group-hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.12)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/image-cropper.png"
                  alt="Payload Image Cropper plugin screenshot"
                  className="w-full object-contain object-top rounded-t-xl transition-transform duration-700 group-hover:scale-[1.03] relative z-10"
                />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="lg:col-span-5 flex flex-col gap-6">
                <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-widest text-violet-400/80">
                  <span>TypeScript</span> <span>/</span> <span>Payload CMS</span>{" "}
                  <span>/</span> <span>npm</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 tracking-tight leading-[1.1] group-hover:text-zinc-50 transition-colors">
                  Payload Image Cropper
                </h3>
                <p className="text-zinc-400 leading-relaxed text-base lg:text-lg font-normal">
                  Open-source Payload CMS plugin that lets content editors crop
                  and frame images with configurable aspect ratios directly
                  inside the admin panel — no external tools, no round-trips.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href="https://image-cropper-website.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-300 hover:text-violet-400 transition-colors w-fit bg-[#0a0a0a] px-7 py-4 border border-zinc-800 hover:border-violet-500/30 rounded-full group/btn">
                    Live Site{" "}
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </a>
                  <a
                    href="https://github.com/bohdanchornopolskyi/image-cropper-plugin"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-200 transition-colors w-fit bg-[#0a0a0a] px-7 py-4 border border-zinc-800 hover:border-zinc-700 rounded-full group/btn">
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Project 2 — Genussraum */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <motion.div
                variants={fadeInUp}
                className="lg:col-span-7 aspect-[16/9] w-full rounded-[2rem] bg-[#F8F5EC] border border-[#e8e3d8]/60 flex items-end justify-center overflow-hidden relative px-6 pt-6 transition-all duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.1)]">
                <div className="absolute top-4 left-4 z-30 px-3 py-1.5 bg-[#050505]/80 backdrop-blur-sm border border-zinc-800/60 rounded-full text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  // shipped in days
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/genussraum.png"
                  alt="Genussraum website screenshot"
                  className="w-full object-contain object-top rounded-t-xl transition-transform duration-700 group-hover:scale-[1.03] relative z-10"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8F5EC] to-transparent z-20 pointer-events-none" />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="lg:col-span-5 flex flex-col gap-6">
                <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-widest text-violet-400/80">
                  <span>Next.js</span> <span>/</span> <span>Tailwind CSS</span>{" "}
                  <span>/</span> <span>Payload CMS</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 tracking-tight leading-[1.1] group-hover:text-zinc-50 transition-colors">
                  Genussraum
                </h3>
                <p className="text-zinc-400 leading-relaxed text-base lg:text-lg font-normal">
                  A full restaurant & event venue website delivered under
                  extreme time pressure. The client needed it live within
                  days — it shipped on time. Proof that quality and urgency
                  aren't mutually exclusive.
                </p>
                <a
                  href="https://genussraum.eu/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-300 hover:text-violet-400 transition-colors w-fit mt-4 bg-[#0a0a0a] px-7 py-4 border border-zinc-800 hover:border-violet-500/30 rounded-full group/btn">
                  Live Site{" "}
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                  />
                </a>
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
            <div className="hidden md:flex items-center gap-2 text-zinc-700 font-mono text-sm uppercase tracking-widest">
              [ 11 ]
            </div>
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-24">
            {techCategories.map((category) => (
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
                  <div className="h-px bg-zinc-800/80 flex-grow" />
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
                      className="group flex flex-col items-center justify-center gap-6 p-8 rounded-[1.5rem] bg-[#0a0a0a] border border-zinc-900 text-zinc-500 transition-all duration-300 hover:border-violet-500/20 hover:bg-[#0c0c0c] cursor-default relative overflow-hidden hover:shadow-[0_20px_40px_-10px_rgba(139,92,246,0.1)]">
                      {/* Subtle hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                <div className="w-2 h-2 rounded-full bg-violet-500 mt-1.5 shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
                2022 — Present
              </div>
              <div className="md:col-span-3">
                <h3 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight leading-none mb-3 group-hover:text-violet-400 transition-colors duration-300">
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
                <div className="w-2 h-2 rounded-full bg-zinc-700 mt-1.5 shrink-0" />
                2020 — Present
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

            <div className="w-full h-px bg-zinc-900" />

            {/* Education */}
            <div>
              <div className="flex items-center gap-6 mb-12">
                <h3 className="text-xl md:text-2xl font-bold text-zinc-300 uppercase tracking-widest font-mono">
                  Education
                </h3>
                <div className="h-px bg-zinc-800 flex-grow" />
              </div>
              <motion.div
                variants={fadeInUp}
                className="group relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 hover:bg-[#0a0a0a] p-6 lg:-mx-6 rounded-[2rem] transition-colors duration-500">
                <div className="md:col-span-1 font-mono text-xs md:text-sm text-zinc-600 uppercase tracking-widest md:pt-3 flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-zinc-700 mt-1.5 shrink-0" />
                  2018 — 2022
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-3xl md:text-4xl font-bold text-zinc-400 tracking-tight leading-none mb-3 group-hover:text-zinc-200 transition-colors duration-300">
                    Computer Engineering
                  </h3>
                  <h4 className="text-zinc-500 font-mono text-xs md:text-sm mb-6 md:mb-8 uppercase tracking-widest">
                    Bachelor's degree · Taras Shevchenko National University of Kyiv
                  </h4>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FOOTER / CONTACT */}
        <motion.footer
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-32 md:py-48 border-t border-zinc-900 text-center flex flex-col items-center justify-center gap-10 md:gap-14 relative overflow-hidden">
          {/* Footer ambient glow */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[60rem] h-[30rem] rounded-full bg-violet-600/[0.06] blur-[120px]" />
          </div>

          <motion.h2
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-[clamp(3.5rem,10vw,12rem)] font-black text-zinc-100 tracking-tighter uppercase leading-[0.9] cursor-default relative z-10">
            Let's{" "}
            <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
              Talk
            </span>
          </motion.h2>
          <a
            href="mailto:chornopolskyi@lux-medien.com"
            className="text-zinc-400 hover:text-violet-400 text-lg md:text-2xl font-mono underline-offset-[8px] transition-all break-all px-4 inline-block group relative z-10">
            <span className="relative">
              chornopolskyi@lux-medien.com
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-violet-500/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            </span>
          </a>
          <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mt-16 md:mt-24 relative z-10">
            © {new Date().getFullYear()} Bohdan Chornopolskyi. Built with zero
            fluff.
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
