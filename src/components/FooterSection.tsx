import { useEffect, useRef, useState, type CSSProperties } from 'react'

const TEXT_COLOR = '#000000'
const BG_BLUE = '#4BB3ED'
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_034306_a6072b2b-fed9-442e-9cf1-603074e3f7b4.mp4'

const WHATSAPP_URL =
  'https://wa.me/32465298047?text=' +
  encodeURIComponent('Bonjour Ayad, je vous contacte après avoir vu votre CV en ligne.')

function anim(
  visible: boolean,
  delay: number,
  opts: { y?: number; x?: number; duration?: number } = {},
) {
  const { y = 20, x = 0, duration = 1600 } = opts
  const translateFrom =
    y !== 0 ? `translateY(${y}px)` : x !== 0 ? `translateX(${x}px)` : 'none'
  return {
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translate(0,0)' : translateFrom,
      transition: `opacity ${duration}ms ${EASE} ${delay}ms, transform ${duration}ms ${EASE} ${delay}ms`,
    } as CSSProperties,
  }
}

const CONTACT_LINES = [
  { label: 'Email', value: 'majmaieayad@gmail.com' },
  { label: 'GSM', value: '+32 4 65 29 80 47' },
  { label: 'Adresse', value: 'Rue de Zone 69B, 6030 Charleroi' },
  { label: 'Disponibilité', value: 'Immédiate — stage & emploi' },
]

function ContactPanel({ visible }: { visible: boolean }) {
  return (
    <div
      className="relative flex flex-col px-6 md:px-8 pt-10 md:pt-8 pb-8 md:pb-10"
      style={{ backgroundColor: BG_BLUE, minHeight: '100%' }}
    >
      {/* Top labels row */}
      <div
        className="flex items-start justify-between mb-auto"
        {...anim(visible, 0, { y: 12, duration: 1400 })}
      >
        <span className="text-xs font-normal" style={{ color: TEXT_COLOR }}>
          Ayad Majmaie
        </span>
        <span className="text-xs font-normal" style={{ color: TEXT_COLOR }}>
          Contact
        </span>
      </div>

      {/* Contact block */}
      <div
        className="flex flex-col items-center py-8"
        style={{ flex: 1, justifyContent: 'center', ...anim(visible, 300, { y: 40, duration: 1800 }).style }}
      >
        <h2
          className="font-bold uppercase tracking-tight"
          style={{ color: TEXT_COLOR, fontSize: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center' }}
        >
          Parlons-en
        </h2>
      </div>

      {/* Bottom row — details + button */}
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div className="flex flex-col gap-0.5" {...anim(visible, 900, { y: 16, duration: 1400 })}>
          {CONTACT_LINES.map((line) => (
            <div key={line.label}>
              <p
                className="text-xs leading-snug"
                style={{ color: TEXT_COLOR, fontWeight: 400 }}
              >
                {line.label}
              </p>
              <p
                className="text-xs font-bold tracking-widest uppercase leading-snug"
                style={{ color: TEXT_COLOR }}
              >
                {line.value}
              </p>
            </div>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Me contacter via WhatsApp"
          className="text-xs font-bold tracking-widest uppercase border px-6 py-3 relative group shrink-0"
          style={{
            color: TEXT_COLOR,
            borderColor: TEXT_COLOR,
            backgroundColor: 'transparent',
            textDecoration: 'none',
            ...anim(visible, 1150, { y: 16, duration: 1400 }).style,
          }}
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">
            WhatsApp
          </span>
          <span
            className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
            style={{ backgroundColor: '#ffffff' }}
          />
        </a>
      </div>
    </div>
  )
}

export default function FooterSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative w-full" id="contact">
      <div
        className="flex flex-col md:grid md:min-h-screen"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        <ContactPanel visible={visible} />

        {/* Desktop video panel */}
        <div
          className="hidden md:block relative overflow-hidden"
          style={{ backgroundColor: '#111', minHeight: '100%' }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
        </div>

        {/* Mobile video strip */}
        <div
          className="md:hidden relative overflow-hidden"
          style={{ height: '75vw', backgroundColor: '#111' }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
