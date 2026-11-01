import Link from 'next/link'
import { ArrowRightBigIcon, PinIcon } from '@hugeicons/core-free-icons'
import { Card, CardContent, CardHeader, CardIndicator, CardTitle } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { formatDate } from '@/lib/utils'
import type { Post } from 'content-collections'

export function PostCard({ post }: { post: Post }) {
  return (
    <Card render={<article />}>
      <CardHeader>
        <div className="flex items-center gap-2">
          {post.pinned && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-orange-500 dark:text-orange-400">
              <Icon className="size-3.5 -rotate-45" icon={PinIcon} />
              Pinned
            </span>
          )}

          <time className="text-xs text-muted-foreground" dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
        </div>

        <CardTitle>
          <Link className="after:absolute after:inset-0" href={`/blog/${post._meta.path}`}>
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="line-clamp-2">
        <p>{post.summary}</p>
      </CardContent>

      <CardIndicator>
        <Icon icon={ArrowRightBigIcon} />
      </CardIndicator>
    </Card>
  )
}
