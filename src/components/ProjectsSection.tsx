import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import FadeIn from './FadeIn'

type Entry = {
  title: string
  subtitle: string
  dates: string
}

type Project = {
  number: string
  category: string
  name: string
  block?: string
  entries: Entry[]
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Expérience professionnelle · Réceptionniste',
    name: 'Hôtel Ibis — Charleroi',
    entries: [
      {
        title: 'Accueil & relation client',
        subtitle: 'Gestion du standard téléphonique avec un accueil chaleureux.',
        dates: '2023',
      },
      {
        title: 'Réservations',
        subtitle: 'Traitement des réservations entrantes pour optimiser le taux d\u2019occupation annuel.',
        dates: '2023',
      },
      {
        title: 'Coordination',
        subtitle: 'Coordination des services hôteliers pour garantir un séjour d\u2019exigence.',
        dates: '2023',
      },
      {
        title: 'Suivi & facturation',
        subtitle: 'Suivi rigoureux des facturations clients pour assurer la comptabilité.',
        dates: '2023',
      },
      {
        title: 'Stage de 330 heures',
        subtitle: 'Stage non rémunéré — coordination des équipes et service client aux heures de pointe.',
        dates: '2023',
      },
    ],
  },
  {
    number: '02',
    category: 'Formations en cours',
    name: 'Administrateur Réseaux & Systèmes',
    entries: [
      {
        title: 'Administrateur Réseaux et Systèmes',
        subtitle: '2e année — formation en alternance chez IFAPME Charleroi.',
        dates: 'En cours',
      },
      {
        title: 'BAC 1 Informatique de Gestion',
        subtitle: 'Première année en Haute École HELHa, Charleroi.',
        dates: '2023',
      },
      {
        title: 'CESS — Tourisme de Gestion',
        subtitle: 'Certificat d\u2019enseignement secondaire supérieur, Athénée Royal de Gilly.',
        dates: '2021',
      },
    ],
  },
  {
    number: '03',
    category: 'Diplômes & certificats',
    name: 'Cisco & Informatique',
    entries: [
      {
        title: 'CCNA — Switching, Routing & Wireless Essentials',
        subtitle: 'Certificat Cisco Networking Academy, délivré en 2026 (mention vérifiée).',
        dates: '2026',
      },
      {
        title: 'IT Essentials — Cisco',
        subtitle: 'Cisco Networking Academy — bases matérielles et logicielles.',
        dates: '2024',
      },
      {
        title: 'Networking Basics — Cisco',
        subtitle: 'Cisco Networking Academy — fondamentaux réseaux (Packet Tracer).',
        dates: '2024',
      },
    ],
  },
]

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(progress, [0, 1], [1, targetScale])

  return (
    <div
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale, transformOrigin: 'top' }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 overflow-hidden"
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <span
            className="font-black text-[#D7E2EA] leading-none"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 100px)' }}
          >
            {project.number}
          </span>
          <div className="text-right">
            <p className="font-light uppercase tracking-widest text-[#D7E2EA]/60 text-sm">
              {project.category}
            </p>
            <h3 className="font-medium uppercase text-[#D7E2EA] text-xl sm:text-2xl md:text-3xl">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto max-h-[56vh] pr-2">
          {project.entries.map((entry) => (
            <div
              key={entry.title}
              className="rounded-3xl border border-[#D7E2EA]/25 bg-[#D7E2EA]/5 p-5 flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-medium text-[#D7E2EA] uppercase tracking-wide text-base sm:text-lg">
                  {entry.title}
                </h4>
                <span className="text-[#D7E2EA]/50 font-light whitespace-nowrap text-sm">
                  {entry.dates}
                </span>
              </div>
              <p className="font-light text-[#D7E2EA]/70 leading-relaxed text-sm sm:text-base">
                {entry.subtitle}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 pb-10"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
        >
          Parcours
        </h2>
      </FadeIn>

      <div ref={containerRef} className="max-w-5xl mx-auto space-y-4">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
