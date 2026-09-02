import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Typewriter from './Typewriter'
import abdelPhoto from '../assets/abdel-photo.png'

const feedbacks = [
  {
    quote:
      '«Je tiens à souligner la rigueur, la motivation et les compétences techniques d\u2019Ayad. Durant son stage, il a su s\u2019intégrer dans plusieurs projets variés — du site survey et du design Wi-Fi jusqu\u2019aux plans de positionnement multi-systèmes et au câblage sur chantier — avec une réelle autonomie. Son appétence pour l\u2019intelligence artificielle appliquée à nos flux de travail est un vrai plus. C\u2019est un profil fiable, curieux et qui apprend vite. Je recommande Ayad sans hésitation. »',
    author: 'Abdelmalek Aissi',
    title: 'Directeur technique — ICT Vision',
    avatar: abdelPhoto,
  },
  {
    quote:
      '«Ayad a fait preuve d\u2019une capacité d\u2019apprentissage remarquable sur les chantiers. Le patching, le datacabling et la lecture des plans techniques sont devenus des automatismes en quelques semaines. Un stagiaire sérieux, ponctuel et agréable à encadrer. »',
    author: 'Équipe projet',
    title: 'Collègues de chantier — ICT Vision',
    avatar: 'https://picsum.photos/seed/equipe/100/100',
  },
  {
    quote:
      '«Une première expérience en réception d\u2019hôtel menée avec un sens du service et du travail d\u2019équipe remarquables, notamment aux heures de pointe. Ayad sait s\u2019adapter, communiquer et rester efficace sous pression. »',
    author: 'Hôtel Ibis',
    title: 'Réception — Charleroi (2023)',
    avatar: 'https://picsum.photos/seed/ibis/100/100',
  },
]

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
}

const slideTransition = {
  x: { type: 'spring' as const, stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 },
}

const staggerWrapper = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: 'easeOut' as const } },
}

export default function FeedbackSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length)
  }

  const feedback = feedbacks[currentIndex]

  return (
    <section
      id="feedback"
      className="w-full bg-white text-black py-8 md:py-24 px-6 md:px-12 lg:px-[120px] flex flex-col justify-center overflow-hidden font-sans"
    >
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerWrapper}
      >
        {/* Title */}
        <motion.h2
          variants={fadeUpItem}
          className="text-sm md:text-base mb-6 font-medium tracking-wide"
        >
          <Typewriter text="Témoignages" delay={0} speed={0.012} />
        </motion.h2>

        {/* Top divider */}
        <motion.div
          variants={dividerVariants}
          className="w-full h-[1px] bg-[#D9D9D9] mb-12 md:mb-20 origin-left"
        />

        {/* Quote carousel */}
        <motion.div
          variants={fadeUpItem}
          className="relative overflow-hidden min-h-[300px] md:min-h-[250px] flex items-center"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="w-full"
            >
              <p className="text-2xl md:text-4xl lg:text-[44px] font-light leading-snug md:leading-tight text-right tracking-tight">
                <Typewriter text={feedback.quote} delay={0.2} speed={0.012} />
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          variants={dividerVariants}
          className="w-full h-[1px] bg-[#D9D9D9] mt-12 md:mt-20 mb-8 origin-left"
        />

        {/* Author + navigation */}
        <motion.div
          variants={fadeUpItem}
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 w-full sm:w-auto"
            >
              <img
                src={feedback.avatar}
                alt={`${feedback.author} — ${feedback.title}`}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-lg">
                  <Typewriter text={feedback.author} delay={0.4} speed={0.012} />
                </h3>
                <p className="text-gray-500 text-sm">
                  <Typewriter text={feedback.title} delay={0.5} speed={0.012} />
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Témoignage précédent"
              className="w-14 h-14 bg-[#D9D9D9] hover:bg-[#c9c9c9] transition-colors flex items-center justify-center rounded-full"
            >
              <ArrowLeft className="w-6 h-6 text-black" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Témoignage suivant"
              className="w-14 h-14 bg-[#D9D9D9] hover:bg-[#c9c9c9] transition-colors flex items-center justify-center rounded-full"
            >
              <ArrowRight className="w-6 h-6 text-black" strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
