import { useTranslation } from 'react-i18next'


export default function SearchBar({ value, onChange, onSubmit }) {
const { t } = useTranslation()
return (
<form onSubmit={e=>{e.preventDefault(); onSubmit?.()}} className="w-full">
<div className="flex items-center gap-2 bg-white rounded-2xl border p-2 shadow-card">
<input
value={value}
onChange={e=>onChange?.(e.target.value)}
placeholder={t('common.search_placeholder')}
className="flex-1 outline-none px-3 py-2 rounded-xl"
/>
<button className="btn">Search</button>
</div>
</form>
)
}