// src/lib/messaging.js

/** Build a neat, multiline message for leads */
export function buildLeadText({ title, name, email, phone, details, locale, pageUrl }) {
  const lines = [
    `叁亿 - 询价`,
    title ? `产品: ${title}` : null,
    pageUrl ? `链接: ${pageUrl}` : null,
    ``,
    `姓名: ${name || '-'}`,
    `邮箱: ${email || '-'}`,
    `电话/WhatsApp: ${phone || '-'}`,
    ``,
    `项目详情:`,
    `${details || '-'}`,
    ``,
    `语言: ${locale || 'en'}`
  ].filter(Boolean);
  return lines.join('\n');
}

/** Open WhatsApp chat with prefilled text */
export function openWhatsAppMessage(e164Phone, text) {
  const phone = (e164Phone || '').replace('+', ''); // wa.me needs digits only
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  // Use _blank to avoid SPA routing & popup blockers (user click)
  window.open(url, '_blank', 'noopener,noreferrer');
}

/** Open SMS app with prefilled text */
export function openSMSMessage(e164Phone, text) {
  const url = `sms:${e164Phone}?&body=${encodeURIComponent(text)}`;
  window.location.href = url; // triggers native SMS prompt on mobile
}
