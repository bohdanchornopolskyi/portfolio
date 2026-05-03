import type { Block } from 'payload'

export const CodeBlockConfig: Block = {
  slug: 'code',
  labels: { singular: 'Code Block', plural: 'Code Blocks' },
  fields: [
    {
      name: 'language',
      type: 'text',
      defaultValue: 'typescript',
      admin: {
        description: 'Language for syntax highlighting (e.g. typescript, python, bash)',
      },
    },
    {
      name: 'code',
      type: 'code',
      required: true,
    },
  ],
}
