"use client"

import Link from "next/link"
import { motion } from "motion/react"
import type { Post } from "@/payload-types"
import Navbar from "@/components/Navbar"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans relative">
      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-[10%] left-[5%] w-[55rem] h-[55rem] rounded-full bg-violet-700/[0.06] blur-[160px]" />
        <div className="absolute top-[40%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-indigo-700/[0.04] blur-[140px]" />
      </div>

      {/* Side decorations */}
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

      {/* Navbar */}
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 w-full relative z-10 pt-40 pb-32">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16 md:mb-20">
          <motion.h1
            variants={fadeInUp}
            className="text-[clamp(3.5rem,6vw,6rem)] font-black text-zinc-100 mb-2 tracking-tighter uppercase leading-none">
            Blog
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-widest">
            Thoughts on code, craft, and shipping
          </motion.p>
        </motion.div>

        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center justify-center py-32 gap-4">
            <p className="text-zinc-600 font-mono text-sm uppercase tracking-widest">
              No articles yet — check back soon.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col gap-0">
            {posts.map((post, i) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-10 border-t border-zinc-900 hover:bg-[#0a0a0a] px-6 -mx-6 rounded-[1.5rem] transition-all duration-300">
                  <div className="md:col-span-1 font-mono text-xs text-zinc-700 uppercase tracking-widest pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="md:col-span-7 flex flex-col gap-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight group-hover:text-zinc-50 transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-zinc-500 leading-relaxed text-base line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-4 flex md:flex-col md:items-end gap-4 md:gap-2">
                    {post.publishedAt && (
                      <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
                        {formatDate(post.publishedAt)}
                      </span>
                    )}
                    <span className="font-mono text-xs text-violet-500/70 uppercase tracking-widest group-hover:text-violet-400 transition-colors flex items-center gap-1">
                      Read →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
            <div className="border-t border-zinc-900" />
          </motion.div>
        )}
      </main>
    </div>
  )
}
