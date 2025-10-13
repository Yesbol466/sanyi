import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function ProductCard({ item, title }) {
  const { t } = useTranslation()
  return (
    <motion.div
      className="card overflow-hidden"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      <Link to={`/product/${item.slug || item.id}`}>
        <div className="relative">
          <img src={item.thumb} alt={title} className="w-full h-44 object-cover" />
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-t from-black/15 to-transparent" />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="font-semibold line-clamp-2 min-h-[3.2rem]">{title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.badges?.map((b,i)=> (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 border border-gray-200">{b}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <Link to={`/product/${item.slug || item.id}`} className="btn flex-1">
            {t('product.view_details')}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
