// src/pages/Contact.jsx
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { buildLeadText, openWhatsAppMessage, openSMSMessage } from '../lib/messaging'

const COMPANY_PHONE_RAW = '+77022740605' // WhatsApp/SMS target

export default function Contact(){
  const { t, i18n } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [details, setDetails] = useState('')
  const [toast, setToast] = useState(null)

  const message = buildLeadText({
    title: null,
    name, email, phone,
    details,
    locale: i18n.resolvedLanguage,
    pageUrl: window.location.href
  })

  const handleWhatsApp = (e) => {
    e.preventDefault()
    openWhatsAppMessage(COMPANY_PHONE_RAW, message)
    setToast(t('contact.sent_whatsapp', { defaultValue: 'Opening WhatsApp…' }))
  }

  const handleSMS = (e) => {
    e.preventDefault()
    openSMSMessage(COMPANY_PHONE_RAW, message)
    setToast(t('contact.sent_sms', { defaultValue: 'Opening SMS app…' }))
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-bold">{t('contact.title')}</h1>
      <p className="text-gray-600 mt-2">
        {t('contact.intro', { defaultValue: "Tell us about your project. We'll reply within 24h." })}
      </p>

      {toast && (
        <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-emerald-800">
          {toast}
        </div>
      )}

      <form className="mt-6 space-y-4" onSubmit={handleWhatsApp}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="w-full rounded-xl border px-4 py-3"
            placeholder={t('contact.name', { defaultValue: 'Name' })}
            value={name} onChange={e=>setName(e.target.value)} />
          <input className="w-full rounded-xl border px-4 py-3" type="email"
            placeholder="Email"
            value={email} onChange={e=>setEmail(e.target.value)} />
        </div>

        <input className="w-full rounded-xl border px-4 py-3"
          placeholder={t('contact.phone', { defaultValue: 'Phone / WhatsApp' })}
          value={phone} onChange={e=>setPhone(e.target.value)} />

        <textarea className="w-full rounded-xl border px-4 py-3 h-40"
          placeholder={t('contact.project_details', { defaultValue: 'Project details' })}
          value={details} onChange={e=>setDetails(e.target.value)} />

        <button className="w-full btn" onClick={handleWhatsApp}>
          {t('contact.send_whatsapp', { defaultValue: 'Send via WhatsApp' })}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button type="button" className="px-4 py-2 rounded-xl border hover:bg-gray-50" onClick={handleSMS}>
            {t('contact.send_sms', { defaultValue: 'Send via SMS' })}
          </button>
          <a className="px-4 py-2 rounded-xl border text-center hover:bg-gray-50" href={`tel:${COMPANY_PHONE_RAW}`}>
            {t('contact.call_now', { defaultValue: 'Call now' })}
          </a>
        </div>
      </form>
    </div>
  )
}
