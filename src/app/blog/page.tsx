import { allPosts } from 'content-collections'
import { Container } from '@/components/layout/Container'
import { PageTitle } from '@/components/layout/PageTitle'
import { PostCard } from '@/components/posts/PostCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  const posts = [...allPosts].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  return (
    <Container>
      <section>
        <PageTitle className="mb-4">Blog</PageTitle>

        {posts.length === 0 ? (
          <p className="text-muted-foreground">Belum ada artikel.</p>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <PostCard key={post._meta.path} post={post} />
            ))}
          </div>
        )}
      </section>
    </Container>
  )
}
