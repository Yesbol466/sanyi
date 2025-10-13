import { useTranslation } from 'react-i18next'


const languages = [
{ code: 'en', label: 'EN' },
{ code: 'zh', label: '中文' },
{ code: 'ru', label: 'RU' },
{ code: 'kk', label: 'KK' }
]


export default function LanguageSwitcher() {
const { i18n } = useTranslation()
const current = i18n.resolvedLanguage || i18n.language
return (
<div className="flex items-center gap-2">
{languages.map(l => (
<button
key={l.code}
onClick={() => i18n.changeLanguage(l.code)}
className={`px-2 py-1 rounded-lg text-sm border ${current===l.code? 'bg-brand text-white border-brand':'border-gray-300 text-gray-600 hover:bg-gray-100'}`}
aria-label={`Switch to ${l.label}`}
>{l.label}</button>
))}
</div>
)
}