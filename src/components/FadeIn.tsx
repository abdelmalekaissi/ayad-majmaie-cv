import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ElementType } from 'react'

type FadeInProps = HTMLMotionProps<'div'> & {
  delay?: number
  duration?: number
  x?: number
  y?: number
  as?: ElementType
}

export default function FadeIn({
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  children,
  ...rest
}: FadeInProps) {
  const Comp = motion.create(as)
  return (
    <Comp
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
