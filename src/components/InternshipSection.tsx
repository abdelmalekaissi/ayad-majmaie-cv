import FadeIn from './FadeIn'

const REALIZATIONS = [
  {
    number: '01',
    name: 'Site Survey Ekahau',
    description:
      "Relevés Wi-Fi sur site avec Ekahau : analyse de la couverture, de la qualité du signal et des interférences.",
  },
  {
    number: '02',
    name: 'Design Wi-Fi',
    description:
      "Conception de réseaux sans fil : positionnement des points d'accès et planification des canaux et fréquences.",
  },
  {
    number: '03',
    name: 'Plans de positions techniques spéciales',
    description:
      "Réalisation de plans techniques de positionnement des équipements spéciaux sur site.",
  },
  {
    number: '04',
    name: 'Patching & datacabling sur chantier',
    description:
      "Câblage et brassage sur chantier : pose des chemins de câbles, raccordements et organisation des baies.",
  },
  {
    number: '05',
    name: 'Réalisation de documents techniques',
    description:
      'Rédaction et mise en forme des documentations techniques des projets.',
  },
  {
    number: '06',
    name: 'Intelligence artificielle',
    description:
      "Utilisation de l'intelligence artificielle dans le cadre des projets : outils et automatisation.",
  },
]

export default function InternshipSection() {
  return (
    <section
      id="stage"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn y={40}>
          <p className="font-light uppercase tracking-[0.3em] text-[#D7E2EA]/40 text-xs sm:text-sm text-center mb-4">
            Stage · 2026 · plusieurs projets
          </p>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2rem, 6.5vw, 90px)' }}
          >
            Mon stage chez ICT&nbsp;Vision
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <p
            className="font-light leading-relaxed text-center text-[#D7E2EA]/80 max-w-2xl mx-auto mt-8"
            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)' }}
          >
            Au cours de mon stage, j&apos;ai contribué à plusieurs projets et réalisé :
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {REALIZATIONS.map((item, i) => (
            <FadeIn key={item.number} delay={i * 0.08} y={25}>
              <div className="rounded-3xl border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 p-6 sm:p-8 h-full flex flex-col gap-3">
                <span
                  className="font-black text-[#D7E2EA]/30 leading-none"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                >
                  {item.number}
                </span>
                <h3 className="font-medium uppercase text-[#D7E2EA] text-lg sm:text-xl">
                  {item.name}
                </h3>
                <p className="font-light text-[#D7E2EA]/70 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
