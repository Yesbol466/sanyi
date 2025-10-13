import { motion } from 'framer-motion'

export default function CategoryPill({ label, active, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`px-4 py-2 rounded-full border transition text-sm font-medium
        ${active
          ? 'bg-brand text-white border-brand shadow-sm'
          : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
        }`}
    >
      {label}
    </motion.button>
  )
}
