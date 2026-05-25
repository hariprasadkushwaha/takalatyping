import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaBullseye, FaEye, FaShieldHeart } from 'react-icons/fa6';

export default function About() {
  const { t } = useTranslation();
  const counters = t('about.counters', { returnObjects: true });
  const values = [24, 1000, 6, 11];

  return (
    <main className="bg-slate-50 pt-32">
      <section className="section-shell py-14">
        <div className="max-w-3xl">
          <p className="font-black uppercase tracking-[0.18em] text-wine">{t('sections.about')}</p>
          <h1 className="mt-4 text-4xl font-black text-navy sm:text-5xl">{t('siteTitle')}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{t('about.intro')}</p>
        </div>
      </section>

      <section className="section-shell grid gap-5 pb-16 md:grid-cols-3">
        {[
          [FaBullseye, t('sections.mission'), t('about.mission')],
          [FaEye, t('sections.vision'), t('about.vision')],
          [FaShieldHeart, t('sections.experience'), t('about.trust')],
        ].map(([Icon, title, text], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass rounded-2xl p-6 shadow-glass"
          >
            <Icon className="text-3xl text-wine" />
            <h2 className="mt-5 text-2xl font-black text-navy">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{text}</p>
          </motion.article>
        ))}
      </section>

      <section className="bg-gradient-to-r from-navy to-wine py-16 text-white">
        <div className="section-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((label, index) => (
            <div key={label} className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur">
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-black"
              >
                {values[index]}+
              </motion.p>
              <p className="mt-2 font-bold text-white/75">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
