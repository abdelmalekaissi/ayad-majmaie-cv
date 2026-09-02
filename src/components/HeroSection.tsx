import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'
import ayadImg from '../assets/ayad.jpg'

const NAV_LINKS = [
  { label: 'Profil', href: '#about' },
  { label: 'Stage', href: '#stage' },
  { label: 'Compétences', href: '#services' },
  { label: 'Parcours', href: '#projects' },
  { label: 'Contact', href: '#top' },
]

export default function HeroSection() {
  return (
    <section id="top" className="relative h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-medium uppercase tracking-wider text-[#D7E2EA] text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Heading */}
      <div className="relative z-20 flex-1 flex items-center overflow-hidden">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14.5vw] mt-6 sm:mt-4 md:-mt-5">
            Ayad<br />Majmaie
          </h1>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug text-[#D7E2EA] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Administrateur réseaux &amp; systèmes en formation · recherche de stage
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <img
              src={ayadImg}
              alt="Portrait d'Ayad Majmaie"
              className="w-full h-auto object-cover"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  )
}
