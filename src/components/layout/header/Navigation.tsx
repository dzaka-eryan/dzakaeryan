import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const links = [
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/kelas',
    label: 'Kelas',
  },
] as const

export function Navigation() {
  return (
    <nav aria-label="Main Navigation">
      <ul className="flex items-center gap-1 sm:gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Button
              aria-label={link.label}
              nativeButton={false}
              variant="ghost"
              render={<Link href={link.href}>{link.label}</Link>}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
