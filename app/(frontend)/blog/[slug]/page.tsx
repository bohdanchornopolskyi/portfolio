import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Post, Media } from '@/payload-types'
import Navbar from '@/components/Navbar'
import { RenderBlocks } from '@/components/RenderBlocks'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
  })
  const post = docs[0] as Post | undefined
  if (!post) return {}
  return {
    title: `${post.title} — Bohdan Chornopolskyi`,
    description: post.excerpt ?? undefined,
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    depth: 1,
    limit: 1,
  })

  const post = docs[0] as Post | undefined
  if (!post) notFound()

  const coverImage =
    post.coverImage && typeof post.coverImage === 'object'
      ? (post.coverImage as Media)
      : null

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans relative">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute -top-[10%] left-[5%] w-[55rem] h-[55rem] rounded-full bg-violet-700/[0.06] blur-[160px]" />
      </div>

      {/* Navbar */}
      <Navbar />

      <main className="max-w-[800px] mx-auto px-6 md:px-12 w-full relative z-10 pt-40 pb-32">
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col gap-4 border-b border-zinc-900 pb-12">
          {post.publishedAt && (
            <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
              {formatDate(post.publishedAt)}
            </span>
          )}
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-zinc-100 tracking-tighter leading-[1.05]">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Cover image */}
        {coverImage?.url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverImage.url}
            alt={coverImage.alt ?? post.title}
            className="w-full rounded-[1.5rem] mb-12 object-cover max-h-[480px]"
          />
        )}

        {/* Article body */}
        <RenderBlocks blocks={post.blocks} />

        {/* Back link */}
        <div className="mt-20 pt-10 border-t border-zinc-900">
          <Link
            href="/blog"
            className="font-mono text-xs text-zinc-600 uppercase tracking-widest hover:text-violet-400 transition-colors"
          >
            ← Back to blog
          </Link>
        </div>
      </main>
    </div>
  )
}
