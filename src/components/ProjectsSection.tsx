import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import FadeIn from './FadeIn'
import belgiumFlag from '../assets/belgium-flag.png'
import helhaLogo from '../assets/helha-logo.jpg'
import ifapmeLogo from '../assets/ifapme-logo.png'
import iraqEmblem from '../assets/iraq-emblem.webp'

type Entry = {
  title: string
  subtitle: string
  dates: string
}

type Project = {
  number: string
  category: string
  name: string
  logo?: string
  logo2?: string
  logoAlt?: string
  entries: Entry[]
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Un parcours, deux pays',
    name: "D'Irak à la Belgique",
    logo: iraqEmblem,
    logo2: belgiumFlag,
    logoAlt: 'Emblème de l\u2019Irak',
    entries: [
      {
        title: 'Naissance en Irak',
        subtitle:
          'Je suis né en Irak, un pays marqué par l\u2019instabilité, loin de l\u2019idée même d\u2019un avenir serein.',
        dates: '',
      },
      {
        title: "L'arrivée en Belgique à 14 ans",
        subtitle:
          'J\u2019avais 14 ans quand je suis arrivé en Belgique. Je quittais mon pays, ma langue, mes repères — sans un mot de français.',
        dates: 'À 14 ans',
      },
      {
        title: 'Tout reconstruire, à partir de zéro',
        subtitle:
          'J\u2019ai dû tout reconstruire de zéro : apprendre une langue, intégrer une école, refaire ma vie. Chaque mot appris, chaque examen réussi, une victoire arrachée.',
        dates: '',
      },
      {
        title: 'J\u2019ai décroché mon CESS — Athénée Royal de Gilly',
        subtitle:
          'J\u2019ai obtenu mon diplôme secondaire dans une langue apprise sur le tard : ma première grande victoire d\u2019un long chemin.',
        dates: '2021–2023',
      },
    ],
  },
  {
    number: '02',
    category: 'La bascule vers l\u2019informatique',
    name: 'HELHa Montignies — 1 an',
    logo: helhaLogo,
    entries: [
      {
        title: 'Bachelier Informatique de Gestion — BAC 1',
        subtitle:
          'Sur le campus de Montignies-sur-Sambre, j\u2019ai posé mes fondations : ordinateurs et réseaux, systèmes d\u2019exploitation, gestion d\u2019entreprise, programmation.',
        dates: '2023–2024',
      },
      {
        title: 'Une direction se précise',
        subtitle:
          'Entre les cours, une évidence a pris forme : ce qui m\u2019attirait, ce n\u2019était pas seulement le code — c\u2019était l\u2019infrastructure, le réseau, la machine qui fait tourner les choses.',
        dates: '2023–2024',
      },
      {
        title: 'J\u2019ai osé changer de voie',
        subtitle:
          'Après cette année, j\u2019ai choisi délibérément la filière qui correspond à ma vocation : l\u2019administration des systèmes et des réseaux.',
        dates: '2024',
      },
    ],
  },
  {
    number: '03',
    category: 'La formation qui construit le métier',
    name: 'IFAPME Charleroi — 2 ans',
    logo: ifapmeLogo,
    entries: [
      {
        title: '1re année — les fondamentaux',
        subtitle:
          'J\u2019ai acquis la base technique : systèmes Windows et Linux, virtualisation, labos de diagnostic et de maintenance — apprise par la pratique.',
        dates: '2024–2025',
      },
      {
        title: '2e année — la montée en compétence',
        subtitle:
          'Je monte en compétence : bases réseaux et protocoles, administration serveur, sécurité, gestion de projets IT (TFE). La pratique en entreprise est au cœur de ma formation.',
        dates: '2025–2026 · en cours',
      },
      {
        title: 'Le stage chez ICT Vision (2026)',
        subtitle:
          'J\u2019y ai réalisé des site surveys Ekahau, du design Wi-Fi, des plans de positionnement multi-systèmes, du patching &amp; datacabling sur chantier, des documents techniques et de l\u2019intelligence artificielle : le terrain, pour de vrai.',
        dates: '2026',
      },
      {
        title: 'Ma première expérience — Hôtel Ibis, Charleroi',
        subtitle:
          'Mes 330 h de stage en 2023 : accueil, réservations, facturation. J\u2019y ai appris le sens du client et du travail d\u2019équipe, avant même la technique.',
        dates: '2023',
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
          <div className="text-right flex flex-col items-end gap-2">
            <div className="flex items-center gap-3">
              {project.logo && (
                <img
                  src={project.logo}
                  alt={project.logoAlt ?? ''}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
              )}
              {project.logo2 && (
                <img
                  src={project.logo2}
                  alt="Drapeau de la Belgique"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
              )}
            </div>
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
                {entry.dates && (
                  <span className="text-[#D7E2EA]/50 font-light whitespace-nowrap text-sm">
                    {entry.dates}
                  </span>
                )}
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
