import { redirect } from 'next/navigation'

export function generateStaticParams() {
  return [{ slug: '__placeholder__' }]
}

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  redirect(`/blog/${slug}`)
}
