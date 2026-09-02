import FadeIn from './FadeIn'

const SKILLS = [
  {
    number: '01',
    name: 'Administration Linux & Windows',
    description:
      'Administration système sur Windows et Linux : gestion des utilisateurs, services, et serveurs au quotidien.',
  },
  {
    number: '02',
    name: 'Sécurité réseaux',
    description:
      'Sécurisation des infrastructures : bonnes pratiques, protection des accès, durcissement des équipements réseau.',
  },
  {
    number: '03',
    name: 'Cisco — routage & commutation',
    description:
      'IT Essentials, Networking Basics et CCNA : Switching, Routing & Wireless Essentials (certifié 2026). Pratique régulière sur Packet Tracer.',
  },
  {
    number: '04',
    name: 'Virtualisation',
    description:
      'Virtualisation et gestion de machines virtuelles (VMware), pour des environnements fiables et flexibles.',
  },
  {
    number: '05',
    name: 'Active Directory & gestion',
    description:
      'Administration Active Directory, gestion des sauvegardes et dépannage matériel et logiciel.',
  },
  {
    number: '06',
    name: 'Langues & travail d\'équipe',
    description:
      'Français courant, anglais professionnel. Rigueur, réactivité et coordination d\'équipe acquis en environnement professionnel.',
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
