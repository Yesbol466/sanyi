import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { submitCallIntent } from '../lib/api'

export default function OrderCallModal({ open, onClose, phone = '+77072346666', product }) {
  const { t, i18n } = useTranslation()
  const isMobile = typeof navigator !== 'undefined'
    ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    : false

  useEffect(() => {
    function esc(e){ if (e.key === 'Escape') onClose?.() }
    if (open) window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open, onClose])

  if (!open) return null

  const display = '+7 707 234 6666'
  const telHref = `tel:${phone}`

  async function onCallNow(){
    try {
      await submitCallIntent({
        phone,
        product_id: product?.id ?? product?.slug ?? null,
        product_title: product?.title?.[i18n.resolvedLanguage] || product?.title?.en || '',
        locale: i18n.resolvedLanguage || 'en'
      })
    } catch (e) {
      // Don't block the call if logging fails
      console.warn('call intent log failed', e)
    } finally {
      window.location.href = telHref   // triggers OS "Call / Cancel" on mobile
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(phone)
      alert('Number copied')
    } catch {}
  }

  return (
    <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
         onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200"
           onClick={e => e.stopPropagation()}>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">
            {t('contact.title', { defaultValue: 'Contact' })}
          </h3>
          <p className="text-gray-600">
            {t('contact.intro', { defaultValue: "Tell us about your project. We'll reply within 24h." })}
          </p>

          <div className="mt-4 flex items-center justify-between rounded-xl border border-gray-200 p-3">
            <div className="font-mono text-lg">{display}</div>
            <button onClick={copy} className="px-3 py-1.5 rounded-lg border text-sm hover:bg-gray-50">
              {t('common.copy', { defaultValue: 'Copy' })}
            </button>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button onClick={onCallNow} className="btn w-full">
              {t('common.call_now', { defaultValue: 'Call now' })}
            </button>
            <button onClick={onClose} className="w-full px-4 py-2 rounded-xl border hover:bg-gray-50">
              {t('common.cancel', { defaultValue: 'Cancel' })}
            </button>
          </div>

          {!isMobile && (
            <p className="mt-3 text-xs text-gray-500">
              Tip: on desktop this opens your default calling app (FaceTime/Skype). You can also copy
              the number and call from your phone.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
