// src/lib/api.js
const BASE = import.meta.env.VITE_API_URL || ''  // e.g. http://localhost:8000

import products from '../data/products.json'
import categories from '../data/categories.json'

export async function listProducts(){ return products }
export async function listCategories(){ return categories }

export async function submitRFQ(payload){
  console.log('RFQ payload', payload)
  return { ok: true }
}

/** Log user intent to call (so you capture leads/analytics) */
export async function submitCallIntent({ phone, product_id, product_title, locale }) {
  if (!BASE) { 
    // no backend configured — skip without failing UX
    return { ok: true, skipped: true }
  }
  const res = await fetch(`${BASE}/api/call-intent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone,
      product_id,
      product_title,
      locale,
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
    })
  })
  if (!res.ok) throw new Error('call_intent_failed')
  return await res.json()
}
