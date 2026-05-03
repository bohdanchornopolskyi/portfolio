import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import { CodeBlock } from '@/components/CodeBlock'

function extractCodeText(node: Record<string, unknown>): string {
  if (typeof node.code === 'string') return node.code

  const children = node.children as Record<string, unknown>[] | undefined
  if (!Array.isArray(children)) return ''

  return children
    .map((child) => {
      if (child.type === 'linebreak') return '\n'
      if (typeof child.text === 'string') return child.text
      if (Array.isArray(child.children)) return extractCodeText(child)
      return ''
    })
    .join('')
}

export const richTextConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  code: ({ node }) => {
    const n = node as Record<string, unknown>
    return <CodeBlock code={extractCodeText(n).trim()} language={n.language as string | undefined} />
  },
  blocks: {
    Code: ({ node }: { node: Record<string, unknown> }) => {
      const fields = node.fields as { code?: string; language?: string }
      return <CodeBlock code={fields.code ?? ''} language={fields.language} />
    },
  },
})
