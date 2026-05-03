import { codeToHtml } from 'shiki'
import { CopyButton } from './CopyButton'

const LANG_ALIASES: Record<string, string> = {
  js: 'javascript',
  ts: 'typescript',
  tsx: 'tsx',
  jsx: 'jsx',
  py: 'python',
  rb: 'ruby',
  sh: 'bash',
  shell: 'bash',
  yml: 'yaml',
  zsh: 'bash',
}

const TERMINAL_LANGS = new Set(['bash', 'sh', 'shell', 'zsh', 'terminal', 'cmd', 'powershell'])

const TERMINAL_LABEL: Record<string, string> = { cmd: 'cmd', powershell: 'powershell' }

type Props = {
  code: string
  language?: string
}

function BlockHeader({
  label,
  copyText,
  terminal = false,
}: {
  label: string
  copyText: string
  terminal?: boolean
}) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/60 border-b border-zinc-800/80">
      <div className="flex items-center gap-2">
        {terminal ? (
          <>
            <span className="size-2 rounded-full bg-red-500/70" />
            <span className="size-2 rounded-full bg-yellow-500/70" />
            <span className="size-2 rounded-full bg-emerald-500/70" />
          </>
        ) : (
          <>
            <span className="size-2.5 rounded-full bg-zinc-700" />
            <span className="size-2.5 rounded-full bg-zinc-700" />
            <span className="size-2.5 rounded-full bg-zinc-700" />
          </>
        )}
        <span className="ml-2 font-mono text-[11px] text-zinc-500 uppercase tracking-wider">{label}</span>
      </div>
      <CopyButton text={copyText} />
    </div>
  )
}

export async function CodeBlock({ code, language }: Props) {
  const rawLang = language?.toLowerCase() ?? 'text'
  const resolvedLang = LANG_ALIASES[rawLang] ?? rawLang

  if (TERMINAL_LANGS.has(rawLang)) {
    return <CommandBlock command={code} language={rawLang} />
  }

  let html: string
  try {
    html = await codeToHtml(code, { lang: resolvedLang, theme: 'github-dark' })
  } catch {
    html = await codeToHtml(code, { lang: 'text', theme: 'github-dark' })
  }

  return (
    <div className="not-prose my-6 rounded-xl border border-zinc-800/80 overflow-hidden bg-[#0d1117]">
      <BlockHeader label={language || 'code'} copyText={code} />
      <div
        className="overflow-x-auto text-[13.5px] leading-6 [&>pre]:m-0 [&>pre]:p-5 [&>pre]:bg-transparent! [&>pre]:font-mono"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

function CommandBlock({ command, language }: { command: string; language: string }) {
  const lines = command.trim().split('\n')
  const isMultiLine = lines.length > 1

  return (
    <div className="not-prose my-6 rounded-xl border border-zinc-800/80 overflow-hidden bg-zinc-950">
      <BlockHeader label={TERMINAL_LABEL[language] ?? 'terminal'} copyText={command} terminal />
      <div className="px-5 py-4 overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i} className="flex items-start gap-3 font-mono text-[13.5px] leading-6">
            {line.trim() !== '' || !isMultiLine ? (
              <span className="text-violet-400/70 select-none shrink-0 mt-0.5">$</span>
            ) : (
              <span className="w-3 shrink-0" />
            )}
            <span className="text-zinc-200">{line}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
