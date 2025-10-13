import { useTranslation } from 'react-i18next'

export default function Footer(){
  const { t } = useTranslation()
  const c = t('common.contact', { returnObjects: true })

  return (
    <footer className="mt-16 border-t bg-white">
      {/* Contact strip */}
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone */}
        <div className="card p-5">
          <div className="text-sm text-gray-500">{c.phone_label}</div>
          <a href={`tel:${c.phone_raw}`} className="block mt-1 text-lg font-semibold text-gray-900 hover:text-brand">
            {c.phone_display}
          </a>
        </div>

        {/* Email */}
        <div className="card p-5">
          <div className="text-sm text-gray-500">{c.email_label}</div>
          <a href={`mailto:${c.email}`} className="block mt-1 text-lg font-semibold text-gray-900 hover:text-brand break-all">
            {c.email}
          </a>
        </div>

        {/* Address */}
        <div className="card p-5">
          <div className="text-sm text-gray-500">{c.address_label}</div>
          <a
            href={c.map_link}
            target="_blank"
            rel="noreferrer"
            className="block mt-1 text-lg font-semibold text-gray-900 hover:text-brand"
          >
            {c.address}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {t('common.brand')}. {t('common.footer_rights')}</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-brand" href="/privacy.html">Privacy</a>
            <a className="hover:text-brand" href="/terms.html">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
