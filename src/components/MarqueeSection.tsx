import { useEffect, useRef } from 'react'
import ciscoLogo from '../assets/cisco.webp'
import ubiquitiLogo from '../assets/ubiquiti.png'
import lenovoLogo from '../assets/lenovo.png'
import microsoftLogo from '../assets/microsoft.webp'
import rexelLogo from '../assets/rexel.webp'
import hpeLogo from '../assets/hpe.png'
import anthropicLogo from '../assets/anthropic.png'
import ekahauLogo from '../assets/ekahau.svg'

const LOGOS = [
  { src: ciscoLogo, alt: 'Cisco' },
  { src: ubiquitiLogo, alt: 'Ubiquiti' },
  { src: lenovoLogo, alt: 'Lenovo' },
  { src: microsoftLogo, alt: 'Microsoft' },
  { src: rexelLogo, alt: 'Rexel' },
  { src: hpeLogo, alt: 'HPE' },
  { src: anthropicLogo, alt: 'Anthropic' },
  { src: ekahauLogo, alt: 'Ekahau' },
]

const ROW_1 = LOGOS.slice(0, 4)
const ROW_2 = LOGOS.slice(4)

const triple = <T,>(row: T[]) => [...row, ...row, ...row]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const row1 = row1Ref.current
    const row2 = row2Ref.current
    if (!section || !row1 || !row2) return

    const update = () => {
      const sectionTop = section.getBoundingClientRect().top
      const offset = (window.innerHeight - sectionTop) * 0.3
      row1.style.transform = `translateX(${offset - 200}px)`
      row2.style.transform = `translateX(${-(offset - 200)}px)`
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-16 sm:pt-20 md:pt-24 pb-10 overflow-hidden"
    >
      <p className="text-center font-light uppercase tracking-[0.3em] text-[#D7E2EA]/40 text-xs sm:text-sm mb-8">
        Technologies &amp; environnements
      </p>
      <div
        ref={row1Ref}
        className="flex items-center gap-10 sm:gap-16 will-change-transform"
        style={{ transform: 'translateX(0px)' }}
      >
        {triple(ROW_1).map((logo, i) => (
          <img
            key={`r1-${i}`}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="h-10 sm:h-14 md:h-16 w-auto object-contain flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
          />
        ))}
      </div>
      <div
        ref={row2Ref}
        className="flex items-center gap-10 sm:gap-16 mt-8 will-change-transform"
        style={{ transform: 'translateX(0px)' }}
      >
        {triple(ROW_2).map((logo, i) => (
          <img
            key={`r2-${i}`}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="h-10 sm:h-14 md:h-16 w-auto object-contain flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
          />
        ))}
      </div>
    </section>
  )
}
