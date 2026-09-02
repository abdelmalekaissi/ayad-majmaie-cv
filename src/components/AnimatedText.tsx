import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

export default function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const characters = text.split('')

  return (
    <p
      ref={ref}
      className="font-medium leading-relaxed text-center text-[#D7E2EA] max-w-[560px]"
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
    >
      {characters.map((char, i) => (
        <Char key={i} index={i} progress={scrollYProgress}>
          {char}
        </Char>
      ))}
    </p>
  )
}

function Char({
  children,
  index,
  progress,
}: {
  children: string
  index: number
  progress: MotionValue<number>
}) {
  const start = index / 50
  const end = start + 1 / 50
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span className="relative inline-block">
      <span className="invisible">{children === ' ' ? '\u00A0' : children}</span>
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0"
        aria-hidden="true"
      >
        {children === ' ' ? '\u00A0' : children}
      </motion.span>
    </span>
  )
}
