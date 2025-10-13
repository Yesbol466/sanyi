import { Link, NavLink } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t } = useTranslation()
  const nav = t('common.nav', { returnObjects: true })

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/logo/sanyi-logo.jpg"
            alt="SANYI"
            className="h-9 w-auto"
          />
          <span className="text-2xl font-bold text-brand hidden sm:inline">
            {t('common.brand')}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({isActive})=>isActive? 'text-brand':'text-gray-700 hover:text-brand'}>{nav.home}</NavLink>
          <NavLink to="/catalog" className={({isActive})=>isActive? 'text-brand':'text-gray-700 hover:text-brand'}>{nav.catalog}</NavLink>
          <NavLink to="/factory" className={({isActive})=>isActive? 'text-brand':'text-gray-700 hover:text-brand'}>{nav.factory}</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive? 'text-brand':'text-gray-700 hover:text-brand'}>{nav.about}</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive? 'text-brand':'text-gray-700 hover:text-brand'}>{nav.contact}</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <img src="/assets/logo/janbas-logo.jpg" alt="JANBAS" className="h-6 w-auto hidden sm:block" />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
