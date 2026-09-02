import FadeIn from './FadeIn'

const SKILLS = [
  {
    number: '01',
    name: 'Multitechnique',
    description:
      'Intervention sur l\u2019ensemble des corps de métier d\u2019un chantier IT : câblage structuré, électricité courants faibles, data, incendie (détection), intrusion et vidéosurveillance IP.',
  },
  {
    number: '02',
    name: 'Réseau — VLAN & routage',
    description:
      'Configuration de VLAN, routage inter-VLAN, segmentation et sécurité des switchs. Bases CCNA (Switching, Routing & Wireless Essentials) appliquées au terrain.',
  },
  {
    number: '03',
    name: 'Wi-Fi — SSID & Ekahau',
    description:
      'Création et configuration de SSID, sécurisation des réseaux sans fil (WPA2/WPA3), surveys Wi-Fi et cartographies de couverture Ekahau (dBm, canaux, bandes 2,4/5 GHz).',
  },
  {
    number: '04',
    name: 'Setup serveur — Windows Server 2022',
    description:
      'Installation et configuration de serveurs Windows Server 2022 : Active Directory (AD DS), DNS, DHCP, GPO, partages et gestion des utilisateurs.',
  },
  {
    number: '05',
    name: 'Administration Linux & virtualisation',
    description:
      'Administration de systèmes Linux (services, utilisateurs, droits), gestion de machines virtuelles (VMware) et des sauvegardes.',
  },
  {
    number: '06',
    name: 'Outils & documentation de projet',
    description:
      'Documents techniques de chantier, plans de positionnement multi-systèmes, intégration d\u2019outils d\u2019intelligence artificielle dans les flux de travail.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
      >
        Compétences
      </h2>

      <div className="max-w-5xl mx-auto">
        {SKILLS.map((skill, i) => (
          <FadeIn
            key={skill.number}
            delay={i * 0.1}
            className="flex items-start gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 border-b last:border-b-0"
            style={{
              borderColor: 'rgba(12, 12, 12, 0.15)',
            }}
          >
            <span
              className="font-black text-[#0C0C0C] leading-none"
              style={{ fontSize: 'clamp(2rem, 6vw, 90px)' }}
            >
              {skill.number}
            </span>
            <div className="pt-2">
              <h3
                className="font-medium uppercase text-[#0C0C0C]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {skill.name}
              </h3>
              <p
                className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {skill.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
