import Link from 'next/link'
import {
  BankIcon,
  Briefcase01Icon,
  CourseIcon,
  Hospital01Icon,
  LinkSquare02Icon,
} from '@hugeicons/core-free-icons'
import { SectionHeader, SectionHeaderTitle } from '@/components/layout/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardIndicator, CardTitle } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import type { BadgeVariant } from '@/components/ui/Badge'

interface Experience {
  company: string
  role: string
  period: string
  description: string
  status: 'now' | 'past'
  icon: typeof Briefcase01Icon
  link?: string
}

const experiences: Experience[] = [
  {
    company: 'Duta Digital Nusantara (DDN)',
    role: 'Senior Software Engineer',
    period: 'Present',
    description:
      'Leading complex technical projects, architecting resilient high-throughput applications, and driving software engineering innovation.',
    status: 'now',
    icon: Briefcase01Icon,
    link: 'https://ddn.co.id/',
  },
  {
    company: 'Indocyber Global Teknologi (Bank Rakyat Indonesia)',
    role: 'Senior Software Engineer (L5)',
    period: 'Dec 2025 – Maret 2026',
    description:
      'Led the end-to-end architecture of BRISPOT for Kurator and Briling, designing microservices systems for high interoperability and scalability.',
    status: 'past',
    icon: BankIcon,
    link: 'https://bri.co.id/',
  },
  {
    company: 'One Indonesia / BCA Training Event',
    role: 'Mentor Java Spring Boot',
    period: 'Dec 2025',
    description:
      'Guided aspiring developers through building scalable, enterprise-grade microservices and modern Java Spring Boot practices.',
    status: 'past',
    icon: CourseIcon,
  },
  {
    company: 'Pertamina Bina Medika IHC',
    role: 'Senior Software Engineer (L5)',
    period: 'Mar 2023 – Nov 2025',
    description:
      'Led SIMRS architecture and development, implemented HL7 FHIR protocols for healthcare data exchange, and mentored 12 engineers.',
    status: 'past',
    icon: Hospital01Icon,
    link: 'https://pertaminabina-medika.co.id/',
  },
  {
    company: 'Lemonilo',
    role: 'Senior Software Engineer (L5)',
    period: 'Dec 2022 – Feb 2023',
    description:
      'Led development of the Store Locator lead generation product and built MRC viewability compliance frameworks for Facebook and Instagram.',
    status: 'past',
    icon: Briefcase01Icon,
    link: 'https://www.lemonilo.com/',
  },
  {
    company: 'GreatdayHR',
    role: 'Senior Software Engineer (L5)',
    period: 'Sep 2018 – May 2022',
    description:
      'Led refactoring of legacy monoliths into Golang and NestJS microservices to support core HRIS features such as payroll and attendance.',
    status: 'past',
    icon: Briefcase01Icon,
    link: 'https://greatdayhr.com/',
  },
]

const statusLabels: Record<Experience['status'], { label: string; variant: BadgeVariant }> = {
  now: { label: 'Now', variant: 'green' },
  past: { label: 'Past', variant: 'secondary' },
}

export function HomeProjects() {
  return (
    <section className="@container/projects">
      <SectionHeader>
        <SectionHeaderTitle>Experience</SectionHeaderTitle>
      </SectionHeader>

      <div className="grid gap-4 @xl/projects:grid-cols-2">
        {experiences.map((exp) => (
          <Card key={exp.company} render={<article />}>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="shrink-0 rounded-sm border border-orange-500/20 bg-orange-500/10 p-1 text-orange-500 dark:border-orange-500/30 dark:bg-orange-500/15 dark:text-orange-400">
                    <Icon className="size-4" icon={exp.icon} />
                  </div>

                  <div>
                    <CardTitle className="leading-snug">
                      {exp.link ? (
                        <Link
                          className="after:absolute after:inset-0"
                          href={exp.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {exp.company}
                        </Link>
                      ) : (
                        exp.company
                      )}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {exp.role} • {exp.period}
                    </p>
                  </div>
                </div>

                <Badge variant={statusLabels[exp.status].variant} size="sm">
                  {statusLabels[exp.status].label}
                </Badge>
              </div>
            </CardHeader>

            <CardContent>
              <p>{exp.description}</p>
            </CardContent>

            {exp.link && (
              <CardIndicator>
                <Icon icon={LinkSquare02Icon} />
              </CardIndicator>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}
