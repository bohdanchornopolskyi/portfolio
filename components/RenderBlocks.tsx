import { Fragment } from 'react'
import type { Post } from '@/payload-types'
import { CodeBlockComponent } from '@/blocks/Code/Component'
import { RichTextBlockComponent } from '@/blocks/RichText/Component'

type Block = Post['blocks'][number]

export function RenderBlocks({ blocks }: { blocks: Block[] }) {
  if (!blocks?.length) return null

  return (
    <Fragment>
      {blocks.map((block, index) => {
        if (block.blockType === 'code') {
          return <CodeBlockComponent key={index} code={block.code} language={block.language ?? undefined} />
        }
        if (block.blockType === 'richText') {
          return <RichTextBlockComponent key={index} content={block.content} />
        }
        return null
      })}
    </Fragment>
  )
}
