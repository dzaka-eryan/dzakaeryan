import Image from 'next/image'
import { IconFlagIndonesia } from '@/components/icons/IconFlagIndonesia'
import { Container } from '@/components/layout/Container'
import { PageTitle } from '@/components/layout/PageTitle'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Dzaka Eryan - Senior Software Engineer based in Jakarta, Indonesia.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <Container className="space-y-8">
      <section>
        <Image
          className="mb-5 size-20 rounded-full"
          src="/anime.jpg"
          alt="Dzaka Eryan"
          width={80}
          height={80}
          priority
        />

        <PageTitle className="mb-4">About Me</PageTitle>

        <div className="space-y-4 leading-relaxed text-foreground/90">
          <p>
            Hi, I&apos;m <span className="font-semibold text-foreground">Dzaka Eryan</span>, a
            Senior Software Engineer currently working at{' '}
            <span className="font-medium text-foreground">Duta Digital Nusantara (DDN)</span> and
            based in Jakarta, Indonesia
            <IconFlagIndonesia
              className={cn(
                'ml-2 inline-block h-2.25 w-3 shrink-0 -translate-y-0.5 rounded-xs',
                'drop-shadow-[0_0_1px_rgba(0,0,0,0.1)]'
              )}
            />
            .
          </p>

          <p>
            With over 7 years of software engineering experience, I architect resilient,
            high-throughput applications and scalable microservices. My track record spans leading
            end-to-end architectures in banking (Bank Rakyat Indonesia), healthcare (Pertamina Bina
            Medika IHC), and fast-growing tech companies (Lemonilo, GreatDay HR).
          </p>

          <p>
            Beyond architecting systems with Java Spring Boot, Golang, NestJS, and cloud
            infrastructure, I actively mentor developers, conduct enterprise training, and champion
            engineering best practices.
          </p>
        </div>
      </section>
    </Container>
  )
}
