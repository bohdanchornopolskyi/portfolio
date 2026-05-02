"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { motion } from "motion/react"

let didAnimateOnce = false

const links = [
  { label: "Home", href: "/#home" },
  { label: "Works", href: "/#projects" },
  { label: "Stack", href: "/#stack" },
  { label: "Experience", href: "/#experience" },
  { label: "Blog", href: "/blog" },
]

export default function Navbar() {
  const pathname = usePathname()
  const onBlog = pathname.startsWith("/blog")
  const shouldAnimate = useRef(!didAnimateOnce)

  useEffect(() => {
    didAnimateOnce = true
  }, [])

  return (
    <motion.nav
      initial={shouldAnimate.current ? { y: -100 } : false}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
      <div className="flex items-center justify-between md:justify-center gap-4 md:gap-10 px-6 md:px-8 py-4 bg-[#0a0a0a]/85 backdrop-blur-xl border border-white/[0.06] rounded-full font-mono text-[10px] md:text-xs uppercase tracking-widest text-zinc-400 whitespace-nowrap shadow-2xl shadow-black/50 ring-1 ring-white/[0.04]">
        {links.map(({ label, href }) => {
          const active = href === "/blog" ? onBlog : false
          return (
            <Link
              key={href}
              href={href}
              className={`transition-colors duration-200 ${active ? "text-violet-400" : "hover:text-violet-400"}`}>
              {label}
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}
