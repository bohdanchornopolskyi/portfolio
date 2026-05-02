import { getPayload } from 'payload'
import config from '@payload-config'
import type { Post } from '@/payload-types'
import BlogList from './BlogList'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Blog — Bohdan Chornopolskyi',
  description: 'Articles on full-stack development, Payload CMS, and building for the web.',
}

export default async function BlogPage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: { status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 50,
  })

  return <BlogList posts={posts as Post[]} />
}
