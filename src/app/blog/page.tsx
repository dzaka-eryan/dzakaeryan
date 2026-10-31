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
  return (
    <Container>
      <section>
        <PageTitle className="mb-4">Blog</PageTitle>

        {allPosts.length === 0 ? (
          <p className="text-muted-foreground">Belum ada artikel.</p>
        ) : (
          <div className="space-y-3">
            {allPosts.map((post) => (
              <PostCard key={post._meta.path} post={post} />
            ))}
          </div>
        )}
      </section>
    </Container>
  )
}
