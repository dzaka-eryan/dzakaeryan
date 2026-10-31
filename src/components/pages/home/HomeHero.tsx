import Link from 'next/link'
import { Calendar03Icon, FileDownloadIcon } from '@hugeicons/core-free-icons'
import { IconFlagIndonesia } from '@/components/icons/IconFlagIndonesia'
import { PageTitle } from '@/components/layout/PageTitle'
import { buttonVariants } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { links } from '@/data/links.json'
import { cn } from '@/lib/utils'

export function HomeHero(props: React.ComponentProps<'section'>) {
  return (
    <section {...props}>
      {/* <Image
        className="mb-5 size-16 rounded-full"
        src="/anime.jpg"
        alt="Dzaka Eryan"
        width={64}
        height={64}
        loading="eager"
      /> */}

      <PageTitle className="mb-4">
        Hey, I&apos;m <span className="border-b-[0.09375rem] border-primary">Dzaka Eryan</span>!
      </PageTitle>

      <div className="mb-5 space-y-3 leading-relaxed text-pretty text-foreground sm:space-y-2">
        <p>
          A Senior Software Engineer based in Jakarta,&nbsp;Indonesia
          <IconFlagIndonesia
            className={cn(
              'ml-2 inline-block h-2.25 w-3 shrink-0 -translate-y-0.5 rounded-xs',
              'drop-shadow-[0_0_1px_rgba(0,0,0,0.1)]'
            )}
          />
        </p>

        <p>
          Backed by 7+ years in software engineering, I architect resilient, high-throughput
          applications from the ground up. I bridge the gap between complex business needs and
          clean, maintainable code that scales.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Link
          className={cn(buttonVariants({ variant: 'default' }))}
          href={links.calcom}
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon={Calendar03Icon} />
          Book call
        </Link>

        <Link
          className={cn(buttonVariants({ variant: 'secondary' }))}
          href="/Dzaka%20Cv.pdf"
          target="_blank"
          rel="noreferrer"
          download="Dzaka-Cv.pdf"
        >
          <Icon icon={FileDownloadIcon} />
          Download CV
        </Link>
      </div>
    </section>
  )
}
