import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

export default function About(){
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <AnimatedSection>
        <h1 className="text-2xl font-bold">{t('about.title')}</h1>
        <p className="text-gray-700 mt-4 leading-8 text-[1.05rem] md:text-lg tracking-wide">
          {t('about.body')}
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.05} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* License card */}
        <div className="card p-6">
          <h2 className="font-semibold mb-3">{t('about.license_title')}</h2>
          <img
            src="/assets/licenses/reg-almaty-2025.jpg"
            alt={t('about.license_title')}
            className="rounded-xl border"
          />
          <p className="text-sm text-gray-500 mt-3">{t('about.license_caption')}</p>
        </div>

        {/* Brands card */}
        <div className="card p-6">
          <h2 className="font-semibold mb-3">{t('about.brands_title')}</h2>
          <div className="flex items-center gap-6">
            <motion.img
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              src="/assets/logo/sanyi-logo.jpg"
              alt="SANYI"
              className="h-12 w-auto"
            />
            <motion.img
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              src="/assets/logo/janbas-logo.jpg"
              alt="JANBAS"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </AnimatedSection>
      {/* Certificates Gallery */}
<AnimatedSection delay={0.08} className="mt-10">
  <div className="card p-6">
    <h2 className="font-semibold mb-4">{t('about.certificates_title')}</h2>

    <div className="relative overflow-hidden group">
      {/* Scrollable container */}
      <div
        id="cert-scroll"
        className="
          flex gap-6 overflow-x-auto scroll-smooth
          pb-2
          snap-x snap-mandatory
          scrollbar-hide
        "
      >
        {['certificate-1.jpg', 'certificate-2.jpg', 'certificate-3.jpg', 'certificate-4.jpg'].map((file, idx) => (
          <motion.img
            key={idx}
            src={`/assets/licenses/${file}`}
            alt={`${t('about.certificates_title')} ${idx + 1}`}
            className="
              h-72 w-auto rounded-xl border shadow-sm snap-start
              hover:scale-105 transition-transform duration-200
            "
            whileHover={{ y: -4 }}
          />
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={() => {
          document.getElementById('cert-scroll').scrollBy({ left: -400, behavior: 'smooth' })
        }}
        className="
          hidden group-hover:flex absolute left-2 top-1/2 -translate-y-1/2
          bg-white/80 backdrop-blur-sm border rounded-full p-2 shadow
          hover:bg-white transition
        "
      >
        ←
      </button>

      {/* Right arrow */}
      <button
        onClick={() => {
          document.getElementById('cert-scroll').scrollBy({ left: 400, behavior: 'smooth' })
        }}
        className="
          hidden group-hover:flex absolute right-2 top-1/2 -translate-y-1/2
          bg-white/80 backdrop-blur-sm border rounded-full p-2 shadow
          hover:bg-white transition
        "
      >
        →
      </button>
    </div>
  </div>
</AnimatedSection>


      {/* Collaborations card */}
      <AnimatedSection delay={0.1} className="mt-6">
        <div className="card p-6">
          <h2 className="font-semibold mb-3">{t('about.collab_title')}</h2>
          <p className="text-gray-700 leading-7">{t('about.collab_body')}</p>

          <div className="mt-4 flex items-center gap-6 flex-wrap">
            {/* Adjust file names if your logo files differ */}
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.18 }}
              src="/assets/logo/vibor-logo.jpg"
              alt="VIBOR"
              className="h-10 w-auto"
            />
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.18 }}
              src="/assets/logo/sanyi-logo.jpg"
              alt="SANYI"
              className="h-10 w-auto"
            />
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.18 }}
              src="/assets/logo/janbas-logo.jpg"
              alt="JANBAS"
              className="h-10 w-auto"
            />
          </div>

          <a
            href="http://www.vibao.net/a/about/"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-brand hover:underline"
          >
            {t('about.visit_partner')}
          </a>
        </div>
      </AnimatedSection>
      
    </div>
  )
}
