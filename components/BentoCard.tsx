'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function BentoCard({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0, duration: 0.7 } }
      }}
      className={cn(
        "rounded-[2rem] bg-[#0B1120] border border-slate-800/80 p-8 flex flex-col transition-all hover:bg-[#0F172A]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
