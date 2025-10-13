import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SearchBar from '../components/SearchBar'
import CategoryPill from '../components/CategoryPill'
import ProductCard from '../components/ProductCard'
import { listProducts, listCategories } from '../lib/api'


export default function Home(){
const { t, i18n } = useTranslation()
const [q, setQ] = useState('')
const [cats, setCats] = useState([])
const [activeCat, setActiveCat] = useState('')
const [items, setItems] = useState([])


useEffect(()=>{ listCategories().then(setCats); listProducts().then(setItems) },[])


const filtered = useMemo(()=> {
return items.filter(p => (!activeCat || p.category===activeCat) && (
q.trim()==='' || JSON.stringify(p).toLowerCase().includes(q.toLowerCase())
))
}, [items, q, activeCat])


return (
<div>
{/* Hero */}
<section className="bg-gradient-to-br from-white to-emerald-50 border-b">
<div className="mx-auto max-w-6xl px-4 py-10">
<h1 className="text-3xl md:text-4xl font-bold">{t('home.headline')}</h1>
<p className="text-gray-600 mt-2">{t('home.sub')}</p>
<div className="mt-6 max-w-3xl"><SearchBar value={q} onChange={setQ} onSubmit={()=>{}} /></div>
</div>
</section>


{/* Categories */}
<section className="mx-auto max-w-6xl px-4 py-8">
<div className="flex items-center justify-between mb-4">
<h2 className="font-semibold">{t('home.categories')}</h2>
</div>
<div className="flex gap-2 flex-wrap">
<CategoryPill name={i18n.t('common.nav.home')} active={activeCat===''} onClick={()=>setActiveCat('')} />
{cats.map(c => (
<CategoryPill key={c.id} name={c.name[i18n.resolvedLanguage||'en'] || c.name.en} active={activeCat===c.id} onClick={()=>setActiveCat(c.id)} />
))}
</div>
</section>


{/* Grid */}
<section className="mx-auto max-w-6xl px-4 pb-12">
<h2 className="font-semibold mb-4">{t('home.featured')}</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{filtered.map(p => (
<ProductCard key={p.id} item={p} title={p.title[i18n.resolvedLanguage||'en'] || p.title.en} />
))}
</div>
</section>
</div>
)
}