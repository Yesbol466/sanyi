import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { listProducts, listCategories } from '../lib/api'
import ProductCard from '../components/ProductCard'
import CategoryPill from '../components/CategoryPill'
import SearchBar from '../components/SearchBar'
import { motion } from 'framer-motion'

export default function Catalog(){
  const { t, i18n } = useTranslation()
  const [items, setItems] = useState([])
  const [cats, setCats] = useState([])
  const [q, setQ] = useState('')
  const [activeCat, setActiveCat] = useState('all')
  const [err, setErr] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        const [p, c] = await Promise.all([listProducts(), listCategories()])
        setItems(Array.isArray(p) ? p : [])
        setCats(Array.isArray(c) ? c : [])
      } catch (e) {
        console.error('Catalog load failed:', e)
        setErr(e?.message || 'load_failed')
      }
    }
    load()
  }, [])

  const lang = i18n.resolvedLanguage || 'en'

  const filtered = useMemo(() => {
    const list = Array.isArray(items) ? items : []
    return list.filter(p => {
      const title = (p?.title?.[lang] || p?.title?.en || '').toLowerCase()
      const matchQ = q ? title.includes(q.toLowerCase()) : true
      const matchCat = activeCat === 'all' ? true : p?.category === activeCat
      return matchQ && matchCat
    })
  }, [items, q, activeCat, lang])

  const activeLabel =
    activeCat === 'all'
      ? t('catalog.all', { defaultValue: 'All' })
      : (cats.find(c => c.id === activeCat)?.name?.[lang] || '')

  // ---- Framer Motion variants for staggered reveal ----
  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.04 }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } }
  }
  // -----------------------------------------------------

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-bold">{t('catalog.title')}</h1>

      {/* Error hint (only shown if something crashed) */}
      {err && (
        <div className="mt-3 rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
          {t('common.error', { defaultValue: 'Something went wrong loading products.' })} — {String(err)}
        </div>
      )}

      {/* Filter bar */}
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex flex-wrap gap-2 items-center">
          <CategoryPill
            active={activeCat === 'all'}
            onClick={() => setActiveCat('all')}
            label={t('catalog.all', { defaultValue: 'All' })}
          />
          {(Array.isArray(cats) ? cats : []).map(c => (
            <CategoryPill
              key={c.id}
              active={activeCat === c.id}
              onClick={() => setActiveCat(c.id)}
              label={c?.name?.[lang] || c?.name?.en || ''}
            />
          ))}
        </div>

        <div className="flex items-baseline justify-between">
          <p className="text-sm text-gray-600">
            {t('catalog.showing', { defaultValue: 'Showing' })}{' '}
            <span className="font-medium text-gray-900">{activeLabel}</span>{' '}
            <span className="text-gray-400">•</span>{' '}
            <span className="font-medium text-gray-900">{filtered.length}</span>{' '}
            {t('catalog.items', { defaultValue: 'items' })}
          </p>
          <div className="min-w-[220px]">
            <SearchBar value={q} onChange={setQ} placeholder={t('common.search_placeholder')} />
          </div>
        </div>
      </div>

      {/* Animated Grid */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="show"
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {filtered.map(p => {
          const title = p?.title?.[lang] || p?.title?.en || ''
          return (
            <motion.div key={p.id ?? title} variants={itemVariants}>
              <ProductCard item={p} title={title} />
            </motion.div>
          )
        })}
      </motion.div>

      {!filtered.length && !err && (
        <p className="mt-10 text-gray-500">
          {t('catalog.empty', { defaultValue: 'No products match your filter.' })}
        </p>
      )}
    </div>
  )
}
