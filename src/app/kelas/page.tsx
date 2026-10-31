import { Container } from '@/components/layout/Container'
import { PageTitle } from '@/components/layout/PageTitle'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kelas',
  description: 'Kelas, workshop, dan sesi mentoring oleh Dzaka Eryan.',
  alternates: {
    canonical: '/kelas',
  },
}

export default function KelasPage() {
  return (
    <Container className="space-y-8">
      <section>
        <PageTitle className="mb-4">Kelas</PageTitle>

        <p className="mb-6 leading-relaxed text-muted-foreground">
          Tempat belajar seputar software engineering, arsitektur sistem, dan pengembangan web
          modern.
        </p>

        <div className="rounded-lg border border-dashed border-border p-8 text-center">
          <h2 className="mb-2 text-base font-medium text-foreground">Kelas sedang dipersiapkan</h2>
          <p className="text-sm text-muted-foreground">
            Jadwal kelas baru, workshop, dan materi mentoring akan segera diperbarui di sini.
          </p>
        </div>
      </section>
    </Container>
  )
}
