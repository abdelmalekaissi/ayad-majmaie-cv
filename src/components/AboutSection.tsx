import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import ayadImg from '../assets/ayad.jpg'
import wifiSurveyImg from '../assets/wifi-survey.png'
import cybersecImg from '../assets/cybersec.png'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            À propos
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={30}>
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-[#D7E2EA]/40 mx-auto">
            <img
              src={ayadImg}
              alt="Portrait d'Ayad Majmaie"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 max-w-[720px] text-center">
          <FadeIn delay={0.2} y={30}>
            <p
              className="font-light leading-relaxed text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)' }}
            >
              Administrateur systèmes et réseaux en formation, j&apos;allie une rigueur acquise en
              environnement professionnel à des compétences techniques en Linux, virtualisation et
              sécurité. Réactif et habitué au travail d&apos;équipe, je garantis fiabilité et
              disponibilité des infrastructures. Je suis aujourd&apos;hui à la recherche d&apos;un
              emploi dans l&apos;IT pour mettre ces compétences au service de votre équipe.
            </p>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['Permis B', 'Véhiculé', 'Charleroi', 'Disponible immédiatement'].map((badge, i) => (
              <FadeIn key={badge} delay={0.25 + i * 0.08} y={15}>
                <span className="inline-block rounded-full border border-[#D7E2EA]/40 px-5 py-2 text-[#D7E2EA] uppercase tracking-wider text-xs sm:text-sm font-medium">
                  {badge}
                </span>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl">
            <FadeIn delay={0.3} y={30}>
              <figure className="rounded-3xl overflow-hidden border border-[#D7E2EA]/25">
                <img
                  src={wifiSurveyImg}
                  alt="Relevé Wi-Fi sur le terrain (Ekahau)"
                  className="w-full h-44 sm:h-56 object-cover"
                />
                <figcaption className="px-4 py-3 text-left text-[#D7E2EA]/70 font-light text-xs sm:text-sm">
                  Relevé Wi-Fi sur le terrain — survey site Ekahau
                </figcaption>
              </figure>
            </FadeIn>
            <FadeIn delay={0.4} y={30}>
              <figure className="rounded-3xl overflow-hidden border border-[#D7E2EA]/25">
                <img
                  src={cybersecImg}
                  alt="Administration système au quotidien"
                  className="w-full h-44 sm:h-56 object-cover"
                />
                <figcaption className="px-4 py-3 text-left text-[#D7E2EA]/70 font-light text-xs sm:text-sm">
                  Administration au quotidien
                </figcaption>
              </figure>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} y={20}>
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base">
              majmaieayad@gmail.com · +32 4 65 29 80 47 · Rue de Zone 69B, 6030 Charleroi
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
