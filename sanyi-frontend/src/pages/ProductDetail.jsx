// src/pages/ProductDetail.jsx
import { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { listProducts } from '../lib/api'
import Lightbox from '../components/Lightbox'
import OrderCallModal from '../components/OrderCallModal'

export default function ProductDetail(){
  const { idOrSlug } = useParams()
  const { t, i18n } = useTranslation()
  const [items, setItems] = useState([])
  const [activeImg, setActiveImg] = useState(null)
  const [callOpen, setCallOpen] = useState(false)

  useEffect(()=>{ listProducts().then(setItems) },[])

  const product = useMemo(()=> {
    return items.find(p => String(p.id) === idOrSlug || p.slug === idOrSlug)
  }, [items, idOrSlug])

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-gray-600">{t('product.not_found')}</p>
        <Link to="/catalog" className="btn mt-4">{t('product.back_to_catalog')}</Link>
      </div>
    )
  }

  const lang = i18n.resolvedLanguage || 'en'
  const title = product?.title?.[lang] || product?.title?.en || ''
  const desc = product?.desc?.[lang] || ''

  // optional rich fields (keep exactly as you have)
  const system = product?.system?.[lang] || product?.system?.en
  // NOTE: we will normalize lists below so these two are not used directly
  // const advantages = product?.advantages?.[lang] || product?.advantages?.en
  // const considerations = product?.considerations?.[lang] || product?.considerations?.en

  // --- NEW: helper to normalize multilingual arrays (or legacy EN-only arrays)
  const getL10nList = (value) => {
    if (!value) return []
    if (Array.isArray(value)) return value // legacy: ["...","..."]
    if (typeof value === 'object') {
      return value[lang] || value.en || []
    }
    return []
  }

  const specsList = getL10nList(product?.specs)
  const advantagesList = getL10nList(product?.advantages)
  const considerationsList = getL10nList(product?.considerations)

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gallery */}
        <div>
          <div className="card overflow-hidden">
            <img
              src={product.gallery?.[0] || product.thumb}
              alt={title}
              className="w-full h-80 object-cover cursor-zoom-in"
              onClick={()=>setActiveImg(product.gallery?.[0] || product.thumb)}
            />
          </div>
          {product.gallery?.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-3">
              {product.gallery.map((g,i)=>(
                <img
                  key={i}
                  src={g}
                  alt={`${title} ${i+1}`}
                  className="h-20 w-full object-cover rounded-xl border cursor-pointer hover:opacity-90"
                  onClick={()=>setActiveImg(g)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>

          <div className="mt-3 flex flex-wrap gap-2">
            {product.badges?.map((b, i)=>(
              <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-100 border">{b}</span>
            ))}
          </div>

          <p className="mt-5 text-gray-700 leading-7">{desc}</p>

          {specsList.length ? (
            <ul className="mt-4 list-disc pl-6 text-gray-700">
              {specsList.map((s, i)=> <li key={i}>{s}</li>)}
            </ul>
          ) : null}

          <div className="mt-6 flex gap-3">
            <button onClick={()=>setCallOpen(true)} className="btn">
              {t('product.place_order')}
            </button>
            <Link to="/catalog" className="px-4 py-2 rounded-xl border hover:bg-gray-50">
              {t('product.back_to_catalog')}
            </Link>
          </div>
        </div>
      </div>

      {/* Rich content sections */}
      {system && (
        <div className="mt-10 card p-6">
          <h2 className="text-xl font-semibold mb-3">
            {t('product.system_overview', { defaultValue: 'System overview' })}
          </h2>
          <p className="text-gray-700 leading-7 whitespace-pre-line">{system}</p>
        </div>
      )}

      {advantagesList.length ? (
        <div className="mt-6 card p-6">
          <h2 className="text-xl font-semibold mb-3">
            {t('product.advantages', { defaultValue: 'Advantages' })}
          </h2>
          <ul className="space-y-2 list-disc pl-6 text-gray-700">
            {advantagesList.map((a, i)=> <li key={i}>{a}</li>)}
          </ul>
        </div>
      ) : null}

      {considerationsList.length ? (
        <div className="mt-6 card p-6">
          <h2 className="text-xl font-semibold mb-3">
            {t('product.considerations', { defaultValue: 'Considerations' })}
          </h2>
          <ul className="space-y-2 list-disc pl-6 text-gray-700">
            {considerationsList.map((c, i)=> <li key={i}>{c}</li>)}
          </ul>
        </div>
      ) : null}

      <Lightbox open={!!activeImg} src={activeImg} alt={title} onClose={()=>setActiveImg(null)} />

      {/* Call intent modal */}
      <OrderCallModal
        open={callOpen}
        onClose={()=>setCallOpen(false)}
        phone="+77022740605"
        product={product}
      />
    </div>
  )
}
