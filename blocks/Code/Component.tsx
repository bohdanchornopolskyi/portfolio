import { CodeBlock } from '@/components/CodeBlock'

type Props = {
  code: string
  language?: string
}

export function CodeBlockComponent({ code, language }: Props) {
  return <CodeBlock code={code} language={language} />
}
