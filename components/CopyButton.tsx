'use client'

import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
  }

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      className="flex items-center gap-1.5 font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors duration-150 cursor-pointer select-none"
    >
      {copied ? (
        <>
          <Check size={12} className="text-emerald-400" />
          <span className="text-emerald-400">Copied</span>
        </>
      ) : (
        <>
          <Copy size={12} />
          <span>Copy</span>
        </>
      )}
    </button>
  )
}
