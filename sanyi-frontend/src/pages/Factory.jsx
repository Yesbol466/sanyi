import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const images = [
  '/assets/factory/factory-line1.png',
  '/assets/factory/factory-line2.png',
  '/assets/factory/factory-line3.png',
  '/assets/factory/factory-outside1.png',
  '/assets/factory/factory-outside3.png',
  '/assets/factory/factory-outside4.png'
]

export default function Factory(){
  const { t } = useTranslation()

  // Subtle stagger for the gallery
  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.04 }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <AnimatedSection>
        <h1 className="text-2xl font-bold">{t('factory.title')}</h1>
        <p className="text-gray-600 mt-2">{t('factory.intro')}</p>
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6"
        >
          {images.map((src, i) => (
            <motion.figure
              key={src}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="card overflow-hidden"
            >
              <img
                src={src}
                alt={`Factory ${i + 1}`}
                className="w-full h-48 object-cover"
              />
            </motion.figure>
          ))}
        </motion.div>
      </AnimatedSection>
    </div>
  )
}
