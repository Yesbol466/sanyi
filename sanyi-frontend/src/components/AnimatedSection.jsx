// src/components/AnimatedSection.jsx
import { motion } from 'framer-motion'


export default function AnimatedSection({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.28, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
