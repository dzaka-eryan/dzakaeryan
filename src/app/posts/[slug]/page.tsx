import { redirect } from 'next/navigation'
import { allPosts } from 'content-collections'

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path,
  }))
}

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  redirect(`/blog/${slug}`)
}
