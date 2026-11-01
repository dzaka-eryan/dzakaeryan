import { allPosts } from 'content-collections'
import { SectionHeader, SectionHeaderTitle } from '@/components/layout/SectionHeader'
import { PostCard } from '@/components/posts/PostCard'

export function HomePosts(props: React.ComponentProps<'section'>) {
  if (allPosts.length === 0) {
    return null
  }

  const posts = [...allPosts].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  return (
    <section {...props}>
      <SectionHeader>
        <SectionHeaderTitle>Recent posts</SectionHeaderTitle>
      </SectionHeader>

      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post._meta.path} post={post} />
        ))}
      </div>
    </section>
  )
}
