import { RichText } from '@payloadcms/richtext-lexical/react'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
}

export function RichTextBlockComponent({ content }: Props) {
  return (
    <div
      className="prose prose-invert prose-zinc prose-lg max-w-none
        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-zinc-100
        prose-p:text-zinc-400 prose-p:leading-relaxed
        prose-a:text-violet-400 prose-a:no-underline hover:prose-a:text-violet-300
        prose-strong:text-zinc-200
        prose-code:text-violet-300 prose-code:bg-zinc-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
        prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-[1rem]
        prose-blockquote:border-violet-500/40 prose-blockquote:text-zinc-500
        prose-hr:border-zinc-800"
    >
      <RichText data={content} />
    </div>
  )
}
