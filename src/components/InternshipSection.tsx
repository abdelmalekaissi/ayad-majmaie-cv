import FadeIn from './FadeIn'
import ictvisionLogo from '../assets/ictvision-logo.png'
import ictvisionPlanImg from '../assets/ictvision-plan.png'
import ictvisionWifiImg from '../assets/ictvision-wifisurvey.png'

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
          <div className="flex flex-col items-center gap-4">
            <img
              src={ictvisionLogo}
              alt="Logo ICT Vision"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
            <p className="font-light uppercase tracking-[0.3em] text-[#D7E2EA]/40 text-xs sm:text-sm">
              Stage · 2026 · plusieurs projets
            </p>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mt-4"
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

        {/* Case study 1 — Design Wi-Fi */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-10 items-center mt-16">
          <FadeIn y={30} className="md:col-span-3">
            <figure className="rounded-3xl overflow-hidden border border-[#D7E2EA]/25 bg-[#D7E2EA]/5">
              <img
                src={ictvisionWifiImg}
                alt="Cartographie de couverture Wi-Fi (Ekahau) réalisée pendant le stage"
                className="w-full h-64 sm:h-96 object-cover"
                loading="lazy"
              />
              <figcaption className="px-4 py-3 text-left text-[#D7E2EA]/60 font-light text-xs sm:text-sm">
                Vue 3D de la couverture Wi-Fi 5&nbsp;GHz — Ekahau
              </figcaption>
            </figure>
          </FadeIn>
          <div className="md:col-span-2 flex flex-col gap-4">
            <FadeIn y={20}>
              <h3 className="font-medium uppercase text-[#D7E2EA] text-xl sm:text-2xl">
                Design Wi-Fi — cartographie de couverture
              </h3>
            </FadeIn>
            <FadeIn delay={0.1} y={20}>
              <p className="font-light text-[#D7E2EA]/80 leading-relaxed text-sm sm:text-base">
                Carte de couverture produite avec Ekahau pour analyser et optimiser le réseau
                sans fil d&apos;un immeuble de bureaux.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} y={20}>
              <ul className="flex flex-col gap-2.5">
                {[
                  'Bande 5 GHz analysée — la plus sollicitée pour les usages exigeants.',
                  'Échelle de puissance en dBm : du vert (signal fort) au rouge (zones à la limite de la connectivité).',
                  'Points d\u2019accès positionnés sur le plan (épingles) pour vérifier la couverture salle par salle.',
                  'Mesure relevée sur l\u2019AP sélectionné : −52 dBm · canal 48 · largeur 20 MHz.',
                  'Objectif atteint : couverture homogène sur l\u2019ensemble des espaces, sans zone morte.',
                ].map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#D7E2EA]/60 flex-shrink-0" />
                    <span className="font-light text-[#D7E2EA]/80 leading-relaxed text-sm sm:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.3} y={20}>
              <p className="rounded-2xl border border-[#D7E2EA]/25 bg-[#D7E2EA]/5 px-4 py-3 text-[#D7E2EA]/70 font-light text-xs sm:text-sm leading-relaxed">
                <span className="font-medium uppercase tracking-wider text-[#D7E2EA]">
                  Ce que ça démontre&nbsp;:
                </span>{' '}
                capacité à planifier un réseau Wi-Fi fiable, de la mesure à l&apos;optimisation —
                compétence clé pour un administrateur systèmes &amp; réseaux.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Case study 2 — Plan de positionnement */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-10 items-center mt-14">
          <div className="md:col-span-2 md:order-2 flex flex-col gap-4">
            <FadeIn y={20}>
              <h3 className="font-medium uppercase text-[#D7E2EA] text-xl sm:text-2xl">
                Plan de positionnement technique
              </h3>
            </FadeIn>
            <FadeIn delay={0.1} y={20}>
              <p className="font-light text-[#D7E2EA]/80 leading-relaxed text-sm sm:text-base">
                Plan technique produit pour le chantier&nbsp;: implantation des équipements et
                tracé des câblages sur un bâtiment (salles, stockage, accueil…).
              </p>
            </FadeIn>
            <FadeIn delay={0.2} y={20}>
              <ul className="flex flex-col gap-2.5">
                {[
                  'Équipements repérés par codes métier : détecteurs (DA), déclencheurs (DS), boîtes de points (BP).',
                  'Armoire de sécurité SSI-001 positionnée dans le local technique.',
                  'Boucles de câblage tracées (détection et alimentations) entre équipements et armoire.',
                  'Repères d\u2019installation précis : hauteurs de pose (h = 110 cm, h = 30 cm).',
                  'Locaux et surfaces légendés pour une lecture directe sur site.',
                ].map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#D7E2EA]/60 flex-shrink-0" />
                    <span className="font-light text-[#D7E2EA]/80 leading-relaxed text-sm sm:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.3} y={20}>
              <p className="rounded-2xl border border-[#D7E2EA]/25 bg-[#D7E2EA]/5 px-4 py-3 text-[#D7E2EA]/70 font-light text-xs sm:text-sm leading-relaxed">
                <span className="font-medium uppercase tracking-wider text-[#D7E2EA]">
                  Ce que ça démontre&nbsp;:
                </span>{' '}
                lecture et production de plans d&apos;installation conformes, directement
                exploitables par les équipes de chantier.
              </p>
            </FadeIn>
          </div>
          <FadeIn y={30} className="md:col-span-3 md:order-1">
            <figure className="rounded-3xl overflow-hidden border border-[#D7E2EA]/25 bg-[#D7E2EA]/5">
              <img
                src={ictvisionPlanImg}
                alt="Plan de positionnement technique réalisé pendant le stage"
                className="w-full h-64 sm:h-96 object-cover"
                loading="lazy"
              />
              <figcaption className="px-4 py-3 text-left text-[#D7E2EA]/60 font-light text-xs sm:text-sm">
                Plan technique de positionnement — relevé sur site
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
